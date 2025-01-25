import type { TicketSelectorRenderArgsBase } from "./ticket-form";
import type { IDateWrapper } from "./date-wrapper"

export type EventListRenderArgs = TicketSelectorRenderArgsBase & {
    /**
     * Config object of the ticket selector widget
     * @category Commonly used properties
     */
    eventList?: EventListRenderSettings
}

export interface EventListRenderSettings {
    /**
     * Name of the instance installation
     */
    instanceDomain: string

    data?: EventListResponse

    onRenderComplete?: () => void

    buttonIcon?: string


    buttonCssClass?: string

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

    defaultLogoUrl?: string

    noEventMessage?: string

    generateEventUrl?(item?: EventListDisplayModel, parentData?: EventListResponse): string

    venueId?: number

    promoterId?: number

    templates?: EventListTemplates

    venueFilter?: (arr: EventListDisplayModel[]) => EventListDisplayModel[]

    maxItemCount?: number

    showMoreMessage?: string

    includeUpperNote?: boolean
}

export interface EventListTemplates {
    outerWrap?: string
    eventListItem?: string
}



export interface EventListResponse {
    SliderItems: SliderItem[];
    Events: EventListDisplayModel[];
}

export interface SliderItem {
    ImageUrl: string;
    Delay: number;
    MasterSpeed: number;
    SlotAmount: number;
    Transition: string;
    NameText: SliderFieldText;
    DateText: SliderFieldText;
    DescriptionText: SliderFieldText;
    Button: SliderFieldLink;
    ShowName: boolean;
    ShowDate: boolean;
    ShowDescription: boolean;
    ShowButton: boolean;
}

export interface SliderFieldText {
    X: number;
    Y: number;
    Speed: number;
    Start: number;
    Easing: string;
    CssClass: string;
    BackgroundColor: string;
    FontColor: string;
    Text: string;
}

export interface SliderFieldLink {
    X: number;
    Y: number;
    Speed: number;
    Start: number;
    Easing: string;
    CssClass: string;
    BackgroundColor: string;
    FontColor: string;
    Url: string;
}

export interface EventListDisplayModel {
    Id: number;
    Name: string;
    StartTimeLocal: IDateWrapper;
    StartTimeUTC: IDateWrapper;
    CategoryId: number;
    Url: string;
    LogoUrl: string;
    BuyTicketsText: string;
    IsotopeClass: string;
    DateISO: string;
    VenueId: number;
    VenueName: string;
    VenueLatitude: string;
    VenueLongitude: string;
    VenueCity: string;
    IsFinished: boolean;
    CustomStartTimeText: string;
    IsRecommended: boolean;
}