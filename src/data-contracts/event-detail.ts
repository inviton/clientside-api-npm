import type { TicketingTicketDateProcessed } from "./ticket-form";
import type { TicketFormSubmitSuccessEventArgs } from "./ticket-form";
import type { PaymentResultMessageFormatArgs } from "./ticket-form";
import type { TicketSelectorRenderArgsBase } from "./ticket-form";

export interface EventDetailRenderArgs extends TicketSelectorRenderArgsBase {
    /**
     * Config object of the ticket selector widget
     * @category Commonly used properties
     */
    eventDetail?: EventDetailRenderSettings
}

export interface EventDetailRenderSettings {
    /**
    * Target element where the schedule will be rendered
    */
    targetElement: HTMLElement,

    /**
     * Language of the interface. Supported are [en,de,sk] - this determines language based on the user's browser regional settings
     */
    language: string,


    eventId: number


    buttonCssClass?: string

    containerCssClass?: string

    headerOffset?: () => number

    templateColorMode?: 'inviton' | 'disabled'

    /**
     * Custom methods usable in templates
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', { 
     *   eventIds: [10500],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   ticketSelector: {
     *     methods: {
     *         getBodyInfo: function (ticketItem, ticketingResponse) {
     *             var groupingContext = ticketingResponse.GroupingContext || {};
     *             if (groupingContext.name == 'Free') {
     *                 return '<h3>This are free tickets you can use at will, hurry up, not many are remaining</h3>';
     *             } else {
     *                 return '<h3>Ordinary paid tickets, nice choice for anybody</h3>'
     *             }
     *         },
     *         getTicketSuffix: function(ticketItem, ticketingResponse) {
     *             if (ticketItem.Name.indexOf('Free') > -1) {
     *                 return '!! GREAT VALUE !!'
     *             } else {
     *                 return '';
     *             }
     *         }
     *     },
     *     templates: {
     *         body: '<div data-inv-role="its-selector-root" class="its-wrap{{wrapCss}}"><div data-inv-role="its-selector-target"><div class="its-items-wrap">{{func_getBodyInfo}} {{ITEMS}}</div><div class="its-submit"><div data-inv-role="its-summary-wrap"></div>{{SUBMIT_BUTTON}}</div><a href="https://www.inviton.eu" target="_blank" class="its-powered-by"><img style="height: 20px" src="https://inviton-cdn.azureedge.net/assets/img/ticketing_by_inviton.png"></a></div><div data-inv-role="its-form-target"></div></div>',
     *         ticketName: '<div class="its-name">{{ticketName}} - UBER TICKET {{func_getTicketSuffix}}</div>'
     *     }
     *   }
     * })
     * ```
     */
    methods?: any

    iconFactory?: (iconType: string) => string

    defaultLogoUrl?: string

    eventLogoWrapperBackgroundStyle?: string

    eventLogoHeaderBackgroundStyle?: string

    templates?: EventDetailTeplates

    onBeforeFormRender?: (data: Array<TicketingTicketDateProcessed>) => void

    onReservationSuccess?: (args: TicketFormSubmitSuccessEventArgs) => void

    onPurchaseSuccess?: (args: PaymentResultMessageFormatArgs) => void
}

export interface EventDetailTeplates {
    outerWrap?: string
    header?: string
    eventName?: string
    tickets?: string
    description?: string
    map?: string
    promoter?: string
    externalUrlButton?: string
}
