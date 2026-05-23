const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

function runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
        const proc = spawn(command, args, { stdio: 'inherit', shell: true });
        proc.on('error', (error) => reject(error));
        proc.on('close', (code) => code === 0 ? resolve() : reject(new Error(`Command failed with exit code ${code}`)));
    });
}

/**
 * Wraps tsup's flat .d.ts/.d.mts output in `export namespace Inviton { ... }`
 * to match the legacy semi-manual shape consumers depend on
 * (e.g. `Inviton.TicketFormRenderArgs`).
 *
 * tsup emits:
 *   type InvitonApiSection = '...';
 *   interface InviDomStatic { ... }
 *   declare const enum OperationResult { ... }
 *   ...
 *   declare const invitonApi: { ... InviDomStatic ... };
 *   export { invitonApi };
 *
 * We rewrite it to:
 *   type InvitonApiSection = '...';
 *   export namespace Inviton {
 *       export interface InviDomStatic { ... }
 *       export const enum OperationResult { ... }
 *       ...
 *   }
 *   declare const invitonApi: { ... Inviton.InviDomStatic ... };
 *   export { invitonApi };
 */
function wrapDtsWithInvitonNamespace(filePath) {
    if (!fs.existsSync(filePath)) {
        console.warn(`  skip: ${filePath} (missing)`);
        return;
    }
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');

    let apiLineIdx = -1;
    for (let i = 0; i < lines.length; i++) {
        if (/^declare\s+const\s+invitonApi\b/.test(lines[i])) { apiLineIdx = i; break; }
    }
    if (apiLineIdx === -1) {
        console.warn(`  skip: ${path.basename(filePath)} (no \`declare const invitonApi\`)`);
        return;
    }

    const typesLines = lines.slice(0, apiLineIdx);
    const apiLines = lines.slice(apiLineIdx);

    const typeNames = new Set();
    const moduleLevelLines = [];
    const namespaceLines = [];

    for (const line of typesLines) {
        // InvitonApiSection is referenced unqualified by the api decl, keep it at module scope.
        if (/^type\s+InvitonApiSection\b/.test(line)) {
            moduleLevelLines.push(line);
            continue;
        }
        let m, out = line;
        if ((m = /^interface\s+(\w+)/.exec(line))) {
            typeNames.add(m[1]);
            out = '    export ' + line;
        } else if ((m = /^declare\s+const\s+enum\s+(\w+)/.exec(line))) {
            typeNames.add(m[1]);
            out = '    ' + line.replace(/^declare\s+const\s+enum\s+/, 'export const enum ');
        } else if ((m = /^type\s+(\w+)/.exec(line))) {
            typeNames.add(m[1]);
            out = '    export ' + line;
        } else if (line === '') {
            out = '';
        } else {
            out = '    ' + line;
        }
        namespaceLines.push(out);
    }

    if (typeNames.size === 0) {
        console.warn(`  skip: ${path.basename(filePath)} (no types found)`);
        return;
    }

    // Replace bare type refs with `Inviton.X` in the api block, skipping comment bodies
    // so JSDoc text doesn't get mangled. Longest names first to neutralize prefix overlap.
    const names = [...typeNames].sort((a, b) => b.length - a.length);
    const altPattern = names.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const refRegex = new RegExp(`(?<!Inviton\\.)\\b(${altPattern})\\b`, 'g');

    let inComment = false;
    const rewrittenApi = apiLines.map(line => {
        let result = '';
        let i = 0;
        while (i < line.length) {
            if (!inComment) {
                const start = line.indexOf('/*', i);
                if (start === -1) {
                    result += line.slice(i).replace(refRegex, 'Inviton.$1');
                    break;
                }
                result += line.slice(i, start).replace(refRegex, 'Inviton.$1');
                result += '/*';
                i = start + 2;
                inComment = true;
            } else {
                const end = line.indexOf('*/', i);
                if (end === -1) { result += line.slice(i); break; }
                result += line.slice(i, end + 2);
                i = end + 2;
                inComment = false;
            }
        }
        return result;
    });

    const output = [
        ...moduleLevelLines,
        'export namespace Inviton {',
        ...namespaceLines,
        '}',
        ...rewrittenApi,
    ].join('\n');

    fs.writeFileSync(filePath, output);
    console.log(`  wrapped: ${path.basename(filePath)} (${typeNames.size} types)`);
}

async function postProcessing(outputDir) {
    console.log('Wrapping declaration files in Inviton namespace...');
    wrapDtsWithInvitonNamespace(path.resolve(outputDir, 'index.d.ts'));
    wrapDtsWithInvitonNamespace(path.resolve(outputDir, 'index.d.mts'));
    console.log('Post-processing completed.');
}

(async () => {
    try {
        console.log('Running tsup build...');
        await runCommand('tsup src/index.ts --format cjs,esm --dts --minify');
        const outputDir = path.resolve(__dirname, '..', 'dist');
        await postProcessing(outputDir);
        console.log('All tasks completed successfully.');
        process.exit();
    } catch (error) {
        console.error('Error occurred:', error.message);
        process.exit(1);
    }
})();
