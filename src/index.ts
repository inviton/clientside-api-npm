import type { EventDetailRenderArgs } from "./data-contracts/event-detail";
import type { EventInteractionsListArgs } from "./data-contracts/event-interaction";
import type { EventListRenderArgs } from "./data-contracts/event-list";
import type { ReservationSystemApiArgs } from "./data-contracts/reservation-system";
import type { ScheduleItemRendererArgs, ScheduleListRendererArgs, SchedulePeopleRendererArgs, SchedulePersonRendererArgs, ScheduleRendererArgs } from "./data-contracts/schedule";
import type { dialogUtils as DialogUtils, InitTicketFormArgs, InviDomStatic, invitonLLAPI as InvitonLLAPI, ISeatingRenderer, PreInitArgs, SeatingRenderDataArgs, SeatingRenderIdsArgs, TicketFormMerchRendererArgs, TicketFormRenderArgs, TicketSelectorRenderIdsArgs } from "./data-contracts/ticket-form";


(function () {
    // @ts-ignore
    (function (i, n, v, l, t, o, m) {
        // @ts-ignore
        if (!i['InvitonApiObject']) {
            // @ts-ignore
            var cq = [], ia = { showLoading: function (d) { function f(p, q) { h += '<div class="' + p + '">' + (q ? '</div>' : '') } function g(p) { f('rect' + p, !0) } var h = ''; f('holdon-content'), f('sk-rect'); for (var j = 1; 6 > j; j++)g(j); h += '</div></div>'; var k = document.createElement('div'); k.setAttribute('class', 'holdon-white holdon-overlay holdon-element'), k.innerHTML = h, d.appendChild(k) }, pushCommand: function (d, f, g) { null != g && null != g.targetElement && !1 != g.blockElem && ia.showLoading(g.targetElement), cq.push([d, f, g]) }, getQueue: function () { return cq } }, gcd = function () { var d = new Date, f = d.getMinutes(); return 1 == Math.abs(f % 2) && (d = new Date(d.getTime() - 6e4)), d.setSeconds(0), d.setMilliseconds(0), d.getTime() }; i.InvitonApiObject = ia, o = n.createElement('style'), o.innerHTML = '.holdon-overlay{position:absolute;left:0;top:0;bottom:0;right:0;background:#000;background:rgba(0,0,0,.48);z-index:999;cursor:wait}.holdon-content{width:50px;height:57px;position:absolute;top:50%;left:50%;margin:-21px 0 0 -25px}.sk-rect{width:50px;height:40px;text-align:center;font-size:10px}.sk-rect>div{background-color:#b3b3b3;height:100%;width:6px;display:inline-block;-webkit-animation:sk-rect-anim 1.2s infinite ease-in-out;animation:sk-rect-anim 1.2s infinite ease-in-out;margin-left:2px}.sk-rect .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rect .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rect .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rect .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rect-anim{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-rect-anim{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.holdon-white.holdon-overlay{background:rgba(255,255,255,.9)}.holdon-white.holdon-overlay .sk-rect>div{background-color:#cecece}', n.head.appendChild(o), i[t] = function (d, f, g) { ia.pushCommand(d, f, g) }, o = n.createElement(v), m = n.getElementsByTagName(v)[0], o.async = 1, o.src = l + '?v=' + gcd(), m.parentNode.insertBefore(o, m);
        }
    })(window, document, 'script', 'https://inviton-cdn.azureedge.net/clientside-api/js/api-loader', 'invitonApi')
})();

const isLoadingMap: { [index: string]: boolean } = {};
const api = (window as any).invitonApi;
const rootInviton = () => {
    return (window as any).inviton;
}

/**
 * Hacky way to awaitedly render script's section as not all parts provide direct way of preloading
 * 
 */
// const ensureSectionLoaded = (section: string, methodName: string, args: any): Promise<void> => {
//     return new Promise((resolve, reject) => {
//         if (rootInviton()?.ticketForm != null) {
//             resolve();
//             return;
//         }

//         if (!isLoading) {
//             isLoading = true;
//             api(section, methodName, args);
//         }

//         let retryCount = 0;
//         const looper = () => {
//             if (rootInviton()?.ticketForm != null) {
//                 resolve();
//                 return;
//             }

//             if (retryCount > 120) {
//                 isLoading = false;
//                 reject('Timeout');
//             }

//             setTimeout(() => {
//                 looper();
//             }, 100)
//         };

//         looper();
//     })
// }

/**
 * Hacky way to awaitedly render script's section as not all parts provide direct way of preloading
 * 
 */
const ensureScriptLoadSectionLoaded = (section: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if ((rootInviton() || {})[section] != null) {
            resolve();
            return;
        }

        if (isLoadingMap[section] == null) {
            isLoadingMap[section] = true;
            api(section, 'scriptLoad', {
                callback: () => {
                    resolve();
                }
            });
        }
    })
}

/**
 * Loads TicketForm 
 */
const loadTicketForm = (): Promise<void> => {
    return ensureScriptLoadSectionLoaded('ticketForm');
};

/**
 * Loads Event interactions 
 */
const loadEventInteractions = (): Promise<void> => {
    return ensureScriptLoadSectionLoaded('eventInteraction');
};

export const invitonApi = {
    /**
     * Most common and high-level way to render ticket selector for items that are not seating plan
     */
    ticketSelector: {
        /**
        * Renders the ticket selector for Event or TicketDate IDs 
        * Requires Event/TicketDate ID as well target HTML Element, where the ticket selector should be rendered
        * 
        * @example <caption>Sample usage</caption>
        * 
        * 
        * ```js
        * (function (i, n, v, l, t, o, m) {
        *   if (!i['InvitonApiObject']) {
        *     var cmdQueue=[],internalApi={showLoading:function(e){var n="";function t(e,t){n+='<div class="'+e+'">'+(t?"</div>":"")}t("holdon-content"),t("sk-rect");for(var a=1;a<6;a++)t("rect"+a,!0);n+="</div></div>";var i=e.length?e:[e];for(a=0;a<i.length;a++){var o=document.createElement("div");o.setAttribute("class","holdon-white holdon-overlay holdon-element"),o.innerHTML=n,i[a].appendChild(o)}},pushCommand:function(e,t,n){null!=n&&(n.targetElement||n.targetElementArr)&&0!=n.blockElem&&internalApi.showLoading(n.targetElementArr||n.targetElement),cmdQueue.push([e,t,n])},getQueue:function(){return cmdQueue}},getCacheDate=function(){var e=new Date,t=e.getMinutes();return 1==Math.abs(t%2)&&(e=new Date(e.getTime()-6e4)),e.setSeconds(0),e.setMilliseconds(0),e.getTime()};i.InvitonApiObject=internalApi,o=n.createElement("style"),o.innerHTML=".holdon-overlay{position:absolute;left:0;top:0;bottom:0;right:0;background:#000;background:rgba(0,0,0,.48);z-index:999;cursor:wait}.holdon-content{width:50px;height:57px;position:absolute;top:50%;left:50%;margin:-21px 0 0 -25px}.sk-rect{width:50px;height:40px;text-align:center;font-size:10px}.sk-rect>div{background-color:#b3b3b3;height:100%;width:6px;display:inline-block;-webkit-animation:sk-rect-anim 1.2s infinite ease-in-out;animation:sk-rect-anim 1.2s infinite ease-in-out;margin-left:2px}.sk-rect .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rect .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rect .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rect .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rect-anim{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-rect-anim{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.holdon-white.holdon-overlay{background:rgba(255,255,255,.9)}.holdon-white.holdon-overlay .sk-rect>div{background-color:#cecece}",n.head.appendChild(o),i[t]=function(e,t,n){internalApi.pushCommand(e,t,n)},o=n.createElement(v),m=n.getElementsByTagName(v)[0],o.async=1,o.src=l+"/v-"+getCacheDate()+".js",m.parentNode.insertBefore(o,m);
        *   }
        * })(window, document, 'script', 'https://inviton-cdn.azureedge.net/clientside-api/js/api-loader', 'invitonApi');
        *
        * invitonApi('ticketSelector', 'renderForIds', {
        *   eventIds: [10500],
        *   targetElement: document.getElementById('invitonApiWrap')
        * })
        * ```
        */
        renderForIds(args: TicketSelectorRenderIdsArgs) {
            api('ticketSelector', 'renderForIds', args);
        }
    },
    /**
     * Renders forms for given ticket dates, useful when building custom ticket selectors
     */
    ticketForm: {
        /**
         * Code-way to render form (no attributes needed). Renders form based on the parameters provided
         * 
         * @param args Parameters based on which the form should be rendered
         */
        renderForm(args: TicketFormRenderArgs): void {
            api('ticketForm', 'renderForm', args);
        },

        /**
         * Initializes ticketForm for given element, this includes data load and for render
         */
        initElement(args: InitTicketFormArgs): void {
            api('ticketForm', 'initElement', args);
        },

        /**
         * Initializes all ticketForm forms found on the document
         * 
         * @param args
         */
        initDocumentForms(args: PreInitArgs): void {
            api('ticketForm', 'initDocumentForms', args);
        }
    },
    /**
     * Renders seating plan for given parameters
     */
    seating: {
        /**
        * For seating events that are some kind of tour, or other multi-date seating events offers possibility to render schedule table based on given Event ID array
        */
        renderScheduleTable(args: SeatingRenderDataArgs) {
            api('seating', 'renderScheduleTable', args);
        },
        /**
        * Mostly for internal use - renders seating plan based on given data
        */
        async renderForData(args: SeatingRenderDataArgs): Promise<ISeatingRenderer> {
            await loadTicketForm();
            return rootInviton().seating.renderForData(args);
        },
        /**
        * Most common way to renders the seating plan for given Event ID
        * Requires Event ID as well target HTML Element, where the seating plan should be rendered
        */
        async renderForIds(args: SeatingRenderIdsArgs): Promise<ISeatingRenderer> {
            await loadTicketForm();
            return rootInviton().seating.renderForIds(args);
        }
    },
    /**
     * Renderer for the merch module - allows selling additional merch for the event
     */
    merch: {
        /**
        * Renders product detail
        * @param args
        * @example <caption>Sample usage</caption>
        *
        *
        * ```js
        * (function (i, n, v, l, t, o, m) {
        *   if (!i['InvitonApiObject']) {
        *     var cmdQueue=[],internalApi={showLoading:function(e){var n="";function t(e,t){n+='<div class="'+e+'">'+(t?"</div>":"")}t("holdon-content"),t("sk-rect");for(var a=1;a<6;a++)t("rect"+a,!0);n+="</div></div>";var i=e.length?e:[e];for(a=0;a<i.length;a++){var o=document.createElement("div");o.setAttribute("class","holdon-white holdon-overlay holdon-element"),o.innerHTML=n,i[a].appendChild(o)}},pushCommand:function(e,t,n){null!=n&&(n.targetElement||n.targetElementArr)&&0!=n.blockElem&&internalApi.showLoading(n.targetElementArr||n.targetElement),cmdQueue.push([e,t,n])},getQueue:function(){return cmdQueue}},getCacheDate=function(){var e=new Date,t=e.getMinutes();return 1==Math.abs(t%2)&&(e=new Date(e.getTime()-6e4)),e.setSeconds(0),e.setMilliseconds(0),e.getTime()};i.InvitonApiObject=internalApi,o=n.createElement("style"),o.innerHTML=".holdon-overlay{position:absolute;left:0;top:0;bottom:0;right:0;background:#000;background:rgba(0,0,0,.48);z-index:999;cursor:wait}.holdon-content{width:50px;height:57px;position:absolute;top:50%;left:50%;margin:-21px 0 0 -25px}.sk-rect{width:50px;height:40px;text-align:center;font-size:10px}.sk-rect>div{background-color:#b3b3b3;height:100%;width:6px;display:inline-block;-webkit-animation:sk-rect-anim 1.2s infinite ease-in-out;animation:sk-rect-anim 1.2s infinite ease-in-out;margin-left:2px}.sk-rect .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rect .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rect .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rect .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rect-anim{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-rect-anim{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.holdon-white.holdon-overlay{background:rgba(255,255,255,.9)}.holdon-white.holdon-overlay .sk-rect>div{background-color:#cecece}",n.head.appendChild(o),i[t]=function(e,t,n){internalApi.pushCommand(e,t,n)},o=n.createElement(v),m=n.getElementsByTagName(v)[0],o.async=1,o.src=l+"/v-"+getCacheDate()+".js",m.parentNode.insertBefore(o,m);
        *   }
        * })(window, document, 'script', 'https://inviton-cdn.azureedge.net/clientside-api/js/api-loader', 'invitonApi');
        *
        * invitonApi('merch', 'renderMerchItemDetail', {
        *       language: 'auto', //sk, en, cs, de, pl, lv, auto [determines based on browser]
        *       eventIds: [10091],
        *       targetElement: document.getElementById('invitonApiWrap'),
        *       merchSettings: {
        *           itemId: 17375, 
        *           detailRenderTagret: 'popup' // popup, inline (default)
        *      }
        * })
        * ```
        */
        renderMerchItemDetail(args: TicketFormMerchRendererArgs) {
            api('merch', 'renderMerchItemDetail', args);
        },

        /**
         * Reders product list
         * @param args     
         * @example <caption>Sample usage</caption>
        *
        *
        * ```js
        * (function (i, n, v, l, t, o, m) {
        *   if (!i['InvitonApiObject']) {
        *     var cmdQueue=[],internalApi={showLoading:function(e){var n="";function t(e,t){n+='<div class="'+e+'">'+(t?"</div>":"")}t("holdon-content"),t("sk-rect");for(var a=1;a<6;a++)t("rect"+a,!0);n+="</div></div>";var i=e.length?e:[e];for(a=0;a<i.length;a++){var o=document.createElement("div");o.setAttribute("class","holdon-white holdon-overlay holdon-element"),o.innerHTML=n,i[a].appendChild(o)}},pushCommand:function(e,t,n){null!=n&&(n.targetElement||n.targetElementArr)&&0!=n.blockElem&&internalApi.showLoading(n.targetElementArr||n.targetElement),cmdQueue.push([e,t,n])},getQueue:function(){return cmdQueue}},getCacheDate=function(){var e=new Date,t=e.getMinutes();return 1==Math.abs(t%2)&&(e=new Date(e.getTime()-6e4)),e.setSeconds(0),e.setMilliseconds(0),e.getTime()};i.InvitonApiObject=internalApi,o=n.createElement("style"),o.innerHTML=".holdon-overlay{position:absolute;left:0;top:0;bottom:0;right:0;background:#000;background:rgba(0,0,0,.48);z-index:999;cursor:wait}.holdon-content{width:50px;height:57px;position:absolute;top:50%;left:50%;margin:-21px 0 0 -25px}.sk-rect{width:50px;height:40px;text-align:center;font-size:10px}.sk-rect>div{background-color:#b3b3b3;height:100%;width:6px;display:inline-block;-webkit-animation:sk-rect-anim 1.2s infinite ease-in-out;animation:sk-rect-anim 1.2s infinite ease-in-out;margin-left:2px}.sk-rect .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rect .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rect .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rect .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rect-anim{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-rect-anim{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.holdon-white.holdon-overlay{background:rgba(255,255,255,.9)}.holdon-white.holdon-overlay .sk-rect>div{background-color:#cecece}",n.head.appendChild(o),i[t]=function(e,t,n){internalApi.pushCommand(e,t,n)},o=n.createElement(v),m=n.getElementsByTagName(v)[0],o.async=1,o.src=l+"/v-"+getCacheDate()+".js",m.parentNode.insertBefore(o,m);
        *   }
        * })(window, document, 'script', 'https://inviton-cdn.azureedge.net/clientside-api/js/api-loader', 'invitonApi');
        *
        * invitonApi('merch', 'renderMerchList', {
        *       language: 'auto', //sk, en, cs, de, pl, lv, auto [determines based on browser]
        *       eventIds: [10091],
        *       targetElement: document.getElementById('invitonApiWrap'),
        *       merchSettings: {
        *           detailRenderTagret: 'popup' // popup, inline (default)
        *      }
        * })
        * ```
        */
        renderMerchList(args: TicketFormMerchRendererArgs) {
            api('merch', 'renderMerchList', args);
        }
    },
    /**
     * Clientside renderers for the scheduling module
     */
    eventSchedule: {
        /**
         * Renders the inviton event schedule widget for given args
         * @param args Mandatory data arguments for the renderer. These are of [[`ScheduleRendererArgs`]] type.
         * 
         * @example <caption>Sample usage</caption>
         *
         *
         * ```js
         * invitonApi('eventSchedule', 'render', {
         *   eventId: 10500,
         *   language: 'en',
         *   venueMode: 'location',
         *   targetElement: document.getElementById('invitonApiWrap')
         * })
         * ```
         */
        render(args: ScheduleRendererArgs): void {
            api('eventSchedule', 'render', args);
        },

        /**
         * Renders person's public profile for given args
         * @param args Mandatory data arguments for the renderer.
         *
         * @internal <caption>This method is for api internal use and should be not used directly and is not guaranteed to work. Use the render method instead</caption>
         * @example <caption>Sample usage</caption>
         *
         *
         * ```js
         * invitonApi('eventSchedule', 'renderPersonProfile', {
         *   eventId: 10500,
         *   personId: 1313145,
         *   language: 'en',
         *   venueMode: 'location',
         *   targetElement: document.getElementById('invitonApiWrap')
         * })
         * ```
         */
        renderPersonProfile(args: SchedulePersonRendererArgs) {
            api('eventSchedule', 'renderPersonProfile', args);
        },

        /**
         * Renders the list of persons for given args
         * @param args Mandatory data arguments for the renderer
         *
         * @internal <caption>This method is for api internal use and should be not used directly and is not guaranteed to work. Use the render method instead</caption>
         * @example <caption>Sample usage</caption>
         *
         *
         * ```js
         * invitonApi('eventSchedule', 'renderPersonList', {
         *   eventId: 10500,
         *   language: 'en',
         *   venueMode: 'location',
         *   targetElement: document.getElementById('invitonApiWrap')
         * })
         * ```
         */
        renderPersonList(args: SchedulePeopleRendererArgs) {
            api('eventSchedule', 'renderPersonList', args);
        },

        /**
         * Renders the item detail for given args
         * @param args Mandatory data arguments for the renderer
         *
         * @internal <caption>This method is for api internal use and should be not used directly and is not guaranteed to work. Use the render method instead</caption>
         * @example <caption>Sample usage</caption>
         *
         *
         * ```js
         * invitonApi('eventSchedule', 'renderItemDetail', {
         *   eventId: 10500,
         *   scheduleItemId: 16,
         *   language: 'en',
         *   venueMode: 'location',
         *   targetElement: document.getElementById('invitonApiWrap')
         * })
         * ```
         */
        renderItemDetail(args: ScheduleItemRendererArgs) {
            api('eventSchedule', 'renderItemDetail', args);
        },

        /**
         * Renders the schedule list for given args
         * @param args Mandatory data arguments for the renderer
         *
         * @internal <caption>This method is for api internal use and should be not used directly and is not guaranteed to work. Use the render method instead</caption>
         * @example <caption>Sample usage</caption>
         *
         *
         * ```js
         * invitonApi('eventSchedule', 'renderScheduleList', {
         *   eventId: 10500,
         *   language: 'en',
         *   venueMode: 'location',
         *   targetElement: document.getElementById('invitonApiWrap')
         * })
         * ```
         */
        renderScheduleList(args: ScheduleListRendererArgs) {
            api('eventSchedule', 'renderScheduleList', args);
        },

        /**
        * Renders exhibitor list for given args
        * @param args Mandatory data arguments for the renderer
        *
        * @internal <caption>This method is for api internal use and should be not used directly and is not guaranteed to work. Use the render method instead</caption>
        * @example <caption>Sample usage</caption>
        *
        *
        * ```js
        * invitonApi('eventSchedule', 'renderScheduleList', {
        *   eventId: 10500,
        *   language: 'en',
        *   venueMode: 'location',
        *   targetElement: document.getElementById('invitonApiWrap')
        * })
        * ```
        */
        renderExhibitors(args: ScheduleRendererArgs) {
            api('eventSchedule', 'renderExhibitors', args);
        }
    },

    /**
     * Interactivity on event (surveys, questions), note this is just a subset of exported functions
     */
    eventInteraction: {
        /**
         * Renders interaction based on given ID
         */
        renderForEventId(args: EventInteractionsListArgs) {
            api('eventInteraction', 'renderForEventId', args);
        },

        /**
         * Obtains full EventInteraction API, most of the useful methods should be found in the "clientRenderer" field. ..note it's not documented and most methods are very low-level
         */
        async getApi(): Promise<any> {
            await loadEventInteractions();
            return rootInviton().eventInteraction;
        }
    },

    /**
     * Clientside event list renderer (renders list of events based on filtering criteria)
     */
    eventList: {
        /**
         * Renders event list based on given parameters
         */
        renderEventList(args: EventListRenderArgs): void {
            api('eventList', 'renderEventList', args);
        }
    },

    /**
     * Clientside event page renderer (renders simple event landing page)
     */
    eventDetail: {
        /**
         * Renders simple event's landing page containing event's name, description, location and ticket-selling widget
         */
        renderEventDetail(args: EventDetailRenderArgs) {
            api('eventDetail', 'renderEventDetail', args);
        }
    },

    /**
     * Renderer for reservation system module
     */
    reservationSystem: {
        /**
         * Renders reservation system widget
         */
        render(args: ReservationSystemApiArgs) {
            api('reservationSystem', 'render', args);
        }
    },

    /**
     * Low-level API handling things around forms, not needed to be used by external implementators unless there is a good reasong to
     */
    async getInvitonLLAPI(): Promise<InvitonLLAPI> {
        await loadTicketForm();
        return rootInviton().invitonLLAPI;
    },

    /**
     * Dialog utils, displays modal dialog
     */
    async getDialogUtils(): Promise<DialogUtils> {
        await loadTicketForm();
        return rootInviton().dialogUtils;
    },

    /**
     * Simple DOM manipulation library mostly compatible with jQuery API
     */
    async getInviDom(): Promise<InviDomStatic> {
        await loadTicketForm();
        return rootInviton().inviDom;
    }
};

