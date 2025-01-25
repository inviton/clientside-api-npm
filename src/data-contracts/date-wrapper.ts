export interface IDateWrapper {
    innerDate: Date;

    clone(): IDateWrapper;

    serialize(): string;

    toJSON(key?: any): string;

    valueOf(): number;

    toString(): string;

    toDisplayStringTime(langCode?: string, showSeconds?: boolean): string;

    toDisplayString(showTime?: boolean, showSeconds?: boolean, monthLong?: boolean, langCode?: string): string;

    getTime(): number;

    getFullYear(): number;

    getMonth(): number;

    getDate(): number;

    getDay(): number;

    getHours(): number;

    getMinutes(): number;

    getSeconds(): number;

    getTimezoneOffset(): number;

    setTime(time: number): number;

    setSeconds(sec: number, ms?: number): number;

    setMinutes(min: number, sec?: number, ms?: number): number;

    setHours(hours: number, min?: number, sec?: number, ms?: number): number;

    setDate(date: number): number;

    setMonth(month: number, date?: number): number;

    setFullYear(year: number, month?: number, date?: number): number;

    toWire(includeTime?: boolean): string;

    showKokot(): void;
}