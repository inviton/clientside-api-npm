import type { IDateWrapper } from "./date-wrapper"
import type { EventPersonRole } from "./enums/eventPersonRole"
import type { EventScheduleType } from "./enums/eventScheduleType"
import type { EventScheduleVisibility } from "./enums/eventScheduleVisibility"
import type { ILocalizedString } from "./ticket-form"
import type { TicketNumberDTO } from "./ticket-number-dto"



export interface EventScheduleListModel {
    Id: number
    EventId: number
    IsActive: boolean
    NameLocalized: ILocalizedString
    DescriptionLocalized: ILocalizedString
    Type: EventScheduleType
    Visibility: EventScheduleVisibility
    IsPublished: boolean
    StartTime: IDateWrapper
    EndTime: IDateWrapper
    MaxAudience: number
    VideoUrl: string
    NotesInternal: string
    NotesStaff: string
    ParentEventScheduleItemId: number
    LocationId: number
    ImageUrl: string
    Persons: EventScheduleListPersonModel[]
}

export interface EventScheduleListPersonModel {
    Id: number
    EventSchedulePersonId: number
    TicketNumberId: number
    Role: EventPersonRole
}

export interface IEventScheduleResourcePack {
    exhibitor: string
    schedule_program: string
    schedule_full_program: string
    schedule_speakers: string
    schedule_exhibitors: string
    search_placeholder: string
    schedule_more: string
    schedule_less: string
}

export interface EventScheduleParsedPersonData {
    fullName: string
    subtitle: string
    imageUrl: string
    imageUrlFull?: string
}

export interface ScheduleTeplates {
    outerWrap?: string
    exhibitorsWrap?: string
    exhibitorWrap?: string
    exhibitorItem?: string
    exhibitorLinks?: string
    exhibitorGroupWrap?: string
    exhibitorListWrap?: string
    linkFb?: string
    linkInstagram?: string
    linkLinked?: string
    linkReddit?: string
    linkTwitter?: string
    linkYoutube?: string
    linkHomepage?: string
    image?: string
    title?: string
    navButton?: string
    navButtonDate?: string
    navTimelineButton?: string
    navSearchBar?: string
    navButtonWrap?: string
    pageWrap?: string
    scheduleWrap?: string
    scheduleListWrap?: string
    scheduleItem?: string
    scheduleItemLocationButton?: string
    scheduleItemPersonButton?: string
    scheduleItemLite?: string
    scheduleItemMicro?: string
    scheduleItemType?: string
    scheduleItemGroupWrap?: string
    schedulePeopleGroupWrap?: string
    scheduleSameTimeWrapStart?: string
    scheduleSameTimeWrapEnd?: string
    scheduleHourWrapStart?: string
    scheduleHourWrapEnd?: string
    scheduleItemDetail?: string
    schedulePersonProfile?: string
    schedulePersonPreview?: string
    scheduleNavbar?: string
    scheduleNavbarSubmenuItem?: string
    scheduleFilterbar?: string
    scheduleDays?: string
    scheduleDay?: string
    scheduleFilters?: string
    scheduleFilterPlace?: string
    scheduleFilterItemType?: string
    scheduleFilterSubmenuItem?: string
    scheduleUsefulHeader?: string
}



/**
 * Data arguments for the Inviton Event schedule renderer.
 */
export interface ScheduleRendererArgs {

    /**
    * Target element where the schedule will be rendered
    */
    targetElement: HTMLElement,

    /**
     * Language of the interface. Supported are [en,de,sk] - this determines language based on the user's browser regional settings
     */
    language: string,

    /**
    * @category SomeCategory
    * EventId for which the schedule should be rendered
    */
    eventId: number,

    /**
    * Custom resource list allows specifying custom values for resources [for supported keys, check scheduleResources class]
    */
    resources?: IEventScheduleResourcePack,

    /**
    * Custom template set of the ticket selector widget [for default templates, check scheduleTeplates class]
    */
    templates?: ScheduleTeplates,

    /**
    * Switch for how much detail should be rendered in schedule item. Supported values [full, lite. micro], default 'full'
    */
    layout?: ScheduleItemLayout

    /**
    * Switch determining if list of subsessions should be rendered instead of items description. 
    * Supported values [subsessions, description], default 'subsessions'
    */
    parentSessionMode?: ScheduleParentSessionMode

    /**
     * Switch determining if images are preloaded and loading indicator is shown
     */
    imagePreloader?: boolean

    /**
     * Determines header offset for auto-scroll
     */
    headerOffset?: () => number | number

    /**
     * Determines autoscroll behavior once someone clicks the router link 
     */
    routerAutoscrollMode?: 'animated' | 'standard' | 'none'

    /**
     * Determines if tooltip is shown on hover on person shorted name in the schedule item details 
     */
    personFullnameTooltip?: boolean

    /**
     * Determines the tooltip mode for 
     */
    personSubtitleTooltip?: 'none' | 'full' | 'subtitle'

    /**
     * Custom URL for schedule list. e.g. "program" or "megafest.eu/lineup"
      */
    scheduleListUrl?: string

    /**
     * Custom URL for schedule item detail. e.g. "concerts"
     */
    scheduleItemUrl?: string

    /**
     * Custom URL for people list. e.g. "speakers" or "megafest.eu/artists" 
     */
    personListUrl?: string

    /**
     * Custom URL for person profile. e.g. "speaker" or "megafest.eu/artist"
     */
    personDetailsUrl?: string

    /**
     * Switch turning off menu bar
     */
    renderMenu?: boolean

    /**
     * If other locale should be used for sort functions than the one used for rendering [e.g. rule should be O P R S Š even for EN locale] 
     */
    sortLanguage?: string

    /**
    * Event callback raised when form related error occurs. If overriden, the default behavior will also be overriden.
    * @event
    * @param args
    *
    * @example <caption>Sample usage</caption>
    *
    *
     * ```js
     * //Api loader reference. Needs to be specified only once per page
     * (function (i, n, v, l, t, o, m) {
     *   if (!i['InvitonApiObject']) {
     *     var cq=[],ia={showLoading:function(d){function f(p,q){h+='<div class="'+p+'">'+(q?'</div>':'')}function g(p){f('rect'+p,!0)}var h='';f('holdon-content'),f('sk-rect');for(var j=1;6>j;j++)g(j);h+='</div></div>';var k=document.createElement('div');k.setAttribute('class','holdon-white holdon-overlay holdon-element'),k.innerHTML=h,d.appendChild(k)},pushCommand:function(d,f,g){null!=g&&null!=g.targetElement&&!1!=g.blockElem&&ia.showLoading(g.targetElement),cq.push([d,f,g])},getQueue:function(){return cq}},gcd=function(){var d=new Date,f=d.getMinutes();return 1==Math.abs(f%2)&&(d=new Date(d.getTime()-6e4)),d.setSeconds(0),d.setMilliseconds(0),d.getTime()};i.InvitonApiObject=ia,o=n.createElement('style'),o.innerHTML='.holdon-overlay{position:absolute;left:0;top:0;bottom:0;right:0;background:#000;background:rgba(0,0,0,.48);z-index:999;cursor:wait}.holdon-content{width:50px;height:57px;position:absolute;top:50%;left:50%;margin:-21px 0 0 -25px}.sk-rect{width:50px;height:40px;text-align:center;font-size:10px}.sk-rect>div{background-color:#b3b3b3;height:100%;width:6px;display:inline-block;-webkit-animation:sk-rect-anim 1.2s infinite ease-in-out;animation:sk-rect-anim 1.2s infinite ease-in-out;margin-left:2px}.sk-rect .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rect .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rect .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rect .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rect-anim{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-rect-anim{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.holdon-white.holdon-overlay{background:rgba(255,255,255,.9)}.holdon-white.holdon-overlay .sk-rect>div{background-color:#cecece}',n.head.appendChild(o),i[t]=function(d,f,g){ia.pushCommand(d,f,g)},o=n.createElement(v),m=n.getElementsByTagName(v)[0],o.async=1,o.src=l+'?v='+gcd(),m.parentNode.insertBefore(o,m);
     *   }
     * })(window, document, 'script', 'https://inviton-cdn.azureedge.net/clientside-api/js/api-loader', 'invitonApi');
     *
     * //Event schedule widget render method
     * invitonApi('eventSchedule', 'render', {
     *   eventId: 10500,
     *   language: 'en',
     *   onRouteBound: function(args) {
     *      console.log('current route data:' + JSON.stringify(args));
     *   },
     *   targetElement: document.getElementById('invitonApiWrap')
     * })
     * ```
     */
    onRouteBound?: (args: ScheduleRouterParsedRouteExtended) => void

    /**
     * Determines if how venue name is generated.
     * 
     * full = VenueName + LocationName
     * venue = VenueName only
     * location = LocationName only
     */
    venueFormat?: 'full' | 'location' | 'venue'

    /**
    * Determines if how person name is generated in the schedule list
    *
    * compact = first letter of name + surname (John Doe becomes J.Doe)
    * full = person full name (John Doe => John Doe)
    * name = first name of the person (John Doe becomes John)
    * surname = surname (John Doe becomes Doe)
    */
    schedulePersonFormat?: 'compact' | 'full' | 'name' | 'surname'

    /**
     * Determines if when schedulePersonFormat==compact space is inserted after the first name dot
     */
    schedulePersonFormatCompactSpaceAfterDot?: boolean

    /**
     * Custom method for formatting date
     * ```js
     * invitonApi('eventSchedule', 'render', {
     *   eventId: 10500,
     *   language: 'en',
     *   venueMode: 'location',
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   formatDate: function(date) {
     *        return date.getDate() + "." + (date.getMonth() + 1) + ".";
     *   }
     * })
     * ```
     */
    formatDate?: (date: IDateWrapper) => string

    /**
     * Definition of when the schedule should start for the day. Default 6
     */
    dayStartHour?: number

    /**
     * image to be used if speaker image is not set
     */
    blankProfilePictureUrl?: string
}

/**
 * Data for Schedule renderer, when rendering single item detail
 */
export interface ScheduleItemRendererArgs extends ScheduleRendererArgs {
    /**
     * Id of schedule item to be rendered
     */
    scheduleItemId: number
}

/**
 * Data for Schedule renderer, when rendering single preson profile
 */
export interface SchedulePersonRendererArgs extends ScheduleRendererArgs {
    /**
     *  Id of person whose profile is rendered 
     */
    personId: number
}

/**
 * Data for renderer of people list
 */
export interface SchedulePeopleRendererArgs extends ScheduleRendererArgs {
    /**
     * Groupping of people list. Options [none. role], default none
     */
    groupPeopleBy?: SchedulePeopleGrouping,

    /**
     * Determines how to sort people. Default is surname
     */
    sortPeopleBy?: 'fullname' | 'surname' | 'none'

    /**
     * Custom function for grouping people 
     */
    groupPeopleByFunction?: (items: TicketNumberDTO[]) => SchedulePeopleGroup[]
}


/**
 * Data for renderer of Schedule item list
 */
export interface ScheduleListRendererArgs extends ScheduleRendererArgs {
    /**
     * Groupping of schedule item list. Options ['firstLetter', 'day', 'startTime', 'location'], default 'day'
     */
    groupBy?: ScheduleGrouping,

    /**
     * Custom function for grouping schedule items
     */
    groupByFunction?: (items: EventScheduleListModel[]) => ScheduleModelGroup[]

    /**
     * Sorting of schedule item list. Options ['firstLetter', 'startTime'], default 'startTime'
     */
    sortBy?: ScheduleSorting,

    /**
    * Custom function for sorting schedule items
    */
    sortByFunction?: (items: EventScheduleListModel[]) => ScheduleModelGroup[]
}

export interface ScheduleRouterParsedRouteExtended extends ScheduleRouterParsedRoute {
    fullName?: string
}

export interface ScheduleModelGroup {
    groupName: string,
    items: EventScheduleListModel[]
}

export interface SchedulePeopleGroup {
    groupName: string,
    items: SchedulePersonDetails[]
}

export interface SchedulePersonDetails {
    ticketNumber: TicketNumberDTO,
    data: EventScheduleParsedPersonData,
    id: number
}

export const enum SchedulePeopleGrouping {
    role = 'role',
    none = 'none'
}

export const enum ScheduleGrouping {
    firstLetter = 'firstLetter',
    day = 'day',
    startTime = 'startTime',
    location = 'location'
}

export const enum ScheduleSorting {
    firstLetter = 'firstLetter',
    startTime = 'startTime'
}

export const enum ScheduleItemLayout {
    Full = 'full',
    Lite = 'lite',
    Micro = 'micro'
}

export const enum ScheduleParentSessionMode {
    Subsessions = "subsessions",
    Description = "description",
    Full = 'full'
}

export interface ScheduleRouterParsedRoute extends ScheduleRouterFilterDefinition {
    target: ScheduleRouterNavigationTarget
}

export interface ScheduleRouterFilterDefinition {
    personIds?: number[]
    locationIds?: number[]
    scheduleItemIds?: number[]
    dates?: number[]
    locationFulltext?: string
    personFulltext?: string
    scheduleFulltext?: string
}

export const enum ScheduleRouterNavigationTarget {
    Unknown = 0,
    ScheduleList = 1,
    ScheduleDetails = 2,
    PersonList = 3,
    PersonProfile = 4,
    ExhibitorList = 5
}

export interface ScheduleRouterUrlArgs extends ScheduleRouterParsedRoute {
    scheduleListUrl?: string
    scheduleItemUrl?: string
    personListUrl?: string
    personDetailsUrl?: string
}


export interface ScheduleRouterNavigationArgs {
    element: HTMLElement
    onRouteChange(args: ScheduleRouterRouteChangedArgs): void
}

export interface ScheduleRouterRouteChangedArgs {
    parsedRoute: ScheduleRouterParsedRoute
}

export interface ScheduleRouterInitArgs {
    paramPrefix: string
    onRouteChange(args: ScheduleRouterRouteChangedArgs): void
}

export const enum ScheduleRouterQueryParam {
    PERSON_ID = 'sp',
    SCHEDULE_ID = 'si',
    CURRENT_TARGET = 'st',
    LOCATION_ID = 'sl',
    DATE = 'sd',
    FILTER_LOCATION_FULLTEXT = 'slf',
    FILTER_PERSON_FULLTEXT = 'spf',
    FILTER_SCHEDULE_FULLTEXT = 'sif',
}

export const SLOVAKIATECH_EVENT_ID = 10524;