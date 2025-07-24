
export interface InviDomStatic {
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @see {@link https://api.jquery.com/jQuery/#jQuery-selector-context}
     */
    (selector: string | Element | Array<Element> | InviDom): InviDom;
    /**
     * Stops event propagation in safe manner
     * @param e
     */
    stopEventPropagation(e: any): boolean;
    /**
    * Attach an event handler function once the window resizes
    *
    * @param handler A function to execute when the event is triggered.
    */
    onWindowResize(handler: (eventObject: InviDomEvent) => any): InviDom;
}

export interface InviDomEvent extends Event {
    /**
     * Element raising the event
     */
    element: HTMLElement;
    /**
     * Custom data attached to the event
     */
    customData: any;
}
/**
 *  members of InviDom (those on inviDom themsef)
 */
export interface InviDom {
    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @see {@link https://api.jquery.com/jQuery/#jQuery-selector-context}
     */
    (selector: string | Element | Array<Element> | InviDom): InviDom;
    /**
     * Stops event propagation in safe manner
     * @param e
     */
    stopEventPropagation(e: any): boolean;
    /**
    * Attach an event handler once the window resizes
    *
    * @param handler A to execute when the event is triggered.
    */
    onWindowResize(handler: (eventObject: InviDomEvent) => any): InviDom;
}
/**
 * InviDom is a lightweight internal DOM manipulation library targeting to be drop-in replacement for jQuery. As not all containing sites use jQuery nowadays,
 * InviDom was created to provide abstract of DOM manipulation methods which mimics the jQuery API while keeping the size footprint small
 */
export interface InviDom {
    /**
     * The number of elements in the InviDom object.
     */
    length: number;
    /**
     * boolean indicating this is a InviDom object.
     */
    inviDom: boolean;
    [index: number]: HTMLElement;
    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the interface attribute of each matched element.
     */
    addClass(className: string): InviDom;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param cssProperties An object of CSS properties and values that the animation will move toward.
     * @param duration Number determining how long the animation will run.
     * @param callback A to call once the animation is complete, called once per matched element.
     */
    animate(cssProperties: Object, duration?: number, callback?: () => void): any;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param appendedElem DOM element, HTML string, or InviDom object to insert at the end of each element in the set of matched elements.
     */
    append(appendedElem: InviDom | Element | string): InviDom;
    /**
     * Insert every element in the set of matched elements to the end of the target.
     *
     * @param target A selector, element, or InviDom object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/appendTo/}
     */
    appendTo(target: InviDom | Element | string): InviDom;
    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     */
    attr(attributeName: string): string;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param value A value to set for the attribute. If this is `null`, the attribute will be deleted.
     */
    attr(attributeName: string, value: string | number | boolean | null): InviDom;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributes An object of attribute-value pairs to set.
     */
    attr(attributes: Object): InviDom;
    /**
     * Bind an event handler to the "click" JavaScript event
     *
     * @param handler A to execute each time the event is triggered.
     */
    click(handler: (eventObject: Event) => any): InviDom;
    /**
     * Bind an event handler to the "change" JavaScript event
     *
     * @param handler A to execute each time the event is triggered.
     */
    change(handler: (eventObject: Event) => any): InviDom;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    closest(selector: string): InviDom;
    /**
     * Get the value of style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     */
    css(propertyName: string): string;
    /**
     * Get the value of style properties for the first element in the set of matched elements.
     * Results in an object of property-value pairs.
     *
     * @param propertyNames An array of one or more CSS properties.
     */
    css(propertyName: string, value: string | number): InviDom;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
     */
    css(propertyName: string, value: (index: number, value: string) => string | number): InviDom;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of CSS property-value pairs to set.
     */
    css(properties: Object): InviDom;
    /**
     * Iterate over a InviDom object, executing a for each matched element.
     *
     * @param func A to execute for each matched element. Can stop the loop by returning false.
     */
    each(func: (index?: number, elem?: Element) => any): InviDom;
    /**
     * Insert every element in the set of matched elements before the target.
     *
     * @param referenceNode target A selector, element, array of elements
     */
    insertAfter(referenceNode: Element | InviDom): InviDom;
    /**
     * Reduce the set of matched elements to the first in the set.
     */
    first(): InviDom;
    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    find(selector: string): InviDom;
    /**
     * Get the visible descendants of each element in the current set of matched elements, filtered by a selector
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    findVisible(selector: string): InviDom;
    /**
     * Get the numeric representation of the current value of the first element in the set of matched elements.
     *
     * @param selector A string containing a selector expression to match elements against.
     */
    getNumericVal(defaultValue: number): number;
    /**
     * Determines if any of the set of matched elements has attribute set.
     *
     * @param attributeName The name of the attribute to get.
     */
    hasAttribute(attributeName: string): boolean;
    /**
     * Determines if any of the set of matched elements has specified class
     *
     * @param className interface to-be checked
     */
    hasClass(className: string): boolean;
    /**
     * Determines the heigth of the first element in the currenctly selected array
     */
    height(): number;
    /**
     * Hide the matched elements.
     */
    hide(): InviDom;
    /**
     * Get the HTML contents of the first element in the set of matched elements.
     */
    html(): string;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     */
    html(htmlString: string): InviDom;
    /**
     * Determines if element is visible
     */
    isVisible(): boolean;
    /**
     * Bind an event handler to the "load" JavaScript event.
     *
     * @param handler A to execute when the event is triggered.
     */
    load(handler: (eventObject: Event) => any): InviDom;
    /**
   * Attach an event handler for one or more events to the selected elements.
   *
   * @param event Event type, such as "click" or "change".
   * @param handler A to execute when the event is triggered.
   */
    on(event: string, handler: (eventObject: InviDomEvent) => any): InviDom;
    /**
     * Get the parent of each element in the current set of matched elements
     */
    parent(): InviDom;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param content1 DOM element, HTML string, or InviDom object to insert at the beginning of each element in the set of matched elements.
     */
    prepend(content1: InviDom | Element | string): InviDom;
    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     *
     * @param target A selector, element, or InviDom object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
     */
    prependTo(target: InviDom | Element | string): InviDom;
    /**
     * Get the value of a property for the first element in the set of matched elements.
     *
     * @param propertyName The name of the property to get.
     */
    prop(propertyName: string): boolean;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     */
    prop(propertyName: string, value: string | boolean): InviDom;
    /**
     * Remove the set of matched elements from the DOM.
     *
     */
    remove(): InviDom;
    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the interface attribute of each matched element.
     */
    removeClass(className?: string): InviDom;
    /**
     * Display the matched elements.
     */
    show(): InviDom;
    /**
    * Get the text contents of first element in the set of matched elements
    */
    text(): string;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
     */
    text(text: string | number | boolean): InviDom;
    /**
     * Attempts to trigger event on the matched elements
     *
     * @param eventName Name of the event to-be triggered
     */
    tryTrigger(eventName: string): InviDom;
    /**
     * Attempts to trigger event on the matched elements
     *
     * @param eventName Name of the event to-be triggered
     * @param customData Custom data for the event
     */
    tryTrigger(eventName: string, customData?: any): InviDom;
    /**
     * Attempts to trigger changed event
     */
    tryTriggerChanged(): InviDom;
    /**
     * Attempts to trigger changed event
     *
     * @param customData Custom data for the event
     */
    tryTriggerChanged(customData?: any): InviDom;
    /**
     * Attempts to trigger clicked event
     */
    tryTriggerClicked(): InviDom;
    /**
     * Attempts to trigger clicked event
     *
     * @param customData Custom data for the event
     */
    tryTriggerClicked(customData?: any): InviDom;
    /**
     * Display or hide the matched elements.
     *
     * @param showOrHide A Boolean indicating whether to show or hide the elements.
     */
    toggle(showOrHide: boolean): InviDom;
    /**
     * Changes element visibility Animated by using Velocity.js
     * @param showOrHide A Boolean indicating whether to show or hide the elements.
     * @param duration Duration of the animation in ms
     * @param callback Callback exeting once animation is complete
     */
    toggleAnimated(showOrHide: boolean, duration?: number, callback?: () => void): any;
    /**
     * Waits for transition end
     * @param callback Callback once transition is done
     * @param oneTimeOnly Determines is handler should be detached after the transition ends
     * @param oneTimeOnly Fallback time for browsers not supporting this
     */
    waitForTransitionEnd(callback: () => void, oneTimeOnly: boolean, fallbackTime: number): any;
    /**
     * Get the current value of the first element in the set of matched elements.
     */
    val(): any;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text, an array of strings or number corresponding to the value of each matched element to set as selected/checked.
     */
    val(value: string | string[] | number): InviDom;
    /**
     * Determines width of the first element in the currenctly selected array
     */
    width(): number;
}

export const enum OperationResult {
    Success = 0,
    Error = 1,
    Timeout = 2,
    NotAvailable = 3,
    BrowserNotCompatible = 4
}
export interface ObjectWithLength {
    length: number;
}
export interface InviDomFindable {
    find(selector: string): InviDom;
}
export interface LoadScriptAsyncArgs {
    src: string;
    timeout?: number;
    objectName?: string;
    objectLoaded?(): boolean;
    callback(data: LoadScriptAsyncCallbackArgs): void;
}
export interface LoadScriptAsyncCallbackArgs {
    result: OperationResult;
}
export interface TryRaiseLoadingEventArgs {
    elem: HTMLElement;
}
export interface AnalyticsSettings {
    enabled?: boolean;
    preventInit?: boolean;
}
export interface dialogClosedArgs {
    /**
     * Associated action name
     */
    action: string;
    /**
     * Button causing the dialog close
     */
    callingButton?: Element;
    /**
     * Index of the current modal
     */
    modalIndex?: number;
}
export interface dialogButton {
    /**
     * Action the button is bound-to
     */
    action?: 'confirm' | 'cancel' | 'terciary' | string;
    /**
     * Special css interface the button should have
     */
    cssClass?: string;
    /**
     * Once set, clicking on the button will also close the dialog
     */
    close?: boolean;
    /**
     * Determies if the text should be HTML-escaped (default true)
     */
    escape?: boolean;
    /**
     * If the button should be an anchor button, this is the link it will redirect to
     */
    href?: string;
    /**
     * Button text
     */
    text: string;
    /**
     * Initial visibility of the button
     */
    visible?: boolean;
}
export interface dialogArgsBase {
    /**
     * Determines if modal open interface should be appended to the body tag
     */
    addModalOpenCss?: boolean;
    /**
     * If set to true, dialog backdrop doesn't cause the dialog to close
     */
    backdropStatic?: boolean;
    /**
     * If to false, modal will have no bottom padding
     */
    bottomPadding?: boolean;
    /**
     * Dialog's content minimum height
     */
    contentMinHeight?: number;
    /**
     * Determines if the buttons are visible when dialog is shown, or hidden [defaults to true]
     */
    buttonsVisible?: boolean;
    /**
     * Determines if the upper-close button should be rendered  [defaults to true]
     */
    closeButton?: boolean;
    /**
     * If set, the modal dialog will cover the full height of the window
     */
    fullHeight?: boolean;
    /**
     * HTML string (or plain text) containing the text (body) of the dialog
     */
    messageHtml: string;
    /**
     * A that is executed before the dialog is hidden. One can stop the dialog hide by returning false
     */
    onBeforeHidden?(args: dialogClosedArgs): boolean;
    /**
     * Event executed once the modal is added to the DOM
     * @param args
     * @param rootContext
     */
    onBeforeShown?(args: dialogArgs, rootContext: InviDom, handle?: dialogMessageHandle): any;
    /**
     * Event executed once message is fully shown [finished animating]
     * @param args
     * @param rootContext
     */
    onShown?(args: dialogArgs, rootContext: InviDom): any;
    /**
     * Size of the modal.
     * Normal - max-width:700px
     * Larger - max-width:800px
     */
    size?: 'tiny' | 'small' | 'normal' | 'larger' | 'large' | 'extra-large';
    /**
     * Determines if modal should be stacked (true) or if previously open modal should be closed (false) .. default false
     */
    stackMessage?: boolean;
    /**
     * HTML string (or plain text) containing the title of the dialog
     */
    titleHtml: string;
    /**
     * CSS interface of the modal wrapper
     */
    wrapCss?: string;
}
export interface dialogArgs extends dialogArgsBase {
    /**
     * Dialog buttons
     */
    buttons?: Array<dialogButton>;
    /**
     * A callback that is executed once the message closes
     */
    callback?(data: dialogClosedArgs): any;
}
export interface dialogHideMessageArgs {
    /**
     * Index of the current modal
     */
    modalIndex?: number;
    /**
     * Callback once the closing is complete
     */
    callback?: (args: dialogClosedArgs) => any;
}
export interface dialogMessageHandle {
    /**
     * Root context of the message
     */
    context: InviDom;
    /**
     * Shows loading overlay on the modal
     */
    showLoading(args?: {
        wholeModal?: boolean;
    }): any;
    /**
     * Shows message at the top of the modal
     */
    showInfoMessage(msg: string, type: 'success' | 'error'): any;
    /**
     * Shows dialog footer buttons
     */
    showButtons(): any;
    /**
     * Hides dialog footer buttons
     */
    hideButtons(): any;
    /**
     * Hides currently shown message
     */
    hideInfoMessage(): any;
    /**
     * Hides loading overlay on the modal
     */
    hideLoading(): any;
    /**
     * Hides current message
     */
    hideMessage(): void;
}
export interface dialogToastMessageArgs {
    /**
     * HTML message to be displayed
     */
    messageHtml: string;
    /**
     * Layout of the toast message
     */
    layout?: dialogToastMessageLayout;
    /**
     * Duration how long should the toast message be visible
     */
    duration?: number;
}
export const enum dialogConfirmResult {
    confirm = 0,
    cancel = 1
}
export const enum dialogToastMessageLayout {
    none = 0,
    success = 1,
    error = 2
}
export const enum dialogConstants {
    contentRootClass = "invmodal-contentroot"
}
export interface dialogConfirmClosedArgs {
    result: dialogConfirmResult;
}
export interface dialogConfirmArgs extends dialogArgsBase {
    /**
     * Caption of the confirm button
     */
    captionYes: string;
    /**
     * Caption of the cancel button
     */
    captionNo: string;
    /**
     * A callback that is executed once the message closes
     */
    callback?(data: dialogConfirmClosedArgs): any;
}

export const enum EventSettings {
    None = 0,
    OneEmailPerEvent = 1,
    AutoGuestLogin = 2,
    EmailRequired = 4,
    NoPdfTicketMode = 8,
    RequireUserLogin = 16,
    InvoicingEnabled = 32,
    HasPreassignedTicketNumbers = 64,
    OrderDelayedMode = 128,
    DoNotGenerateAppleWallet = 256,
    PlanningModuleEnabled = 512
}

export interface PaymentFormPaymentMethodModel {
    methodId: string;
    providerId: string;
    uuid: number;
    isBankTransfer: boolean;
    fee?: PaymentMethodFeeDefinition[];
}
export interface PaymentFormPaymentArgs extends ProcessPaymentRequestArgs {
    /**
     * Determines if the payment type is Wire transfer
     */
    isBankTransfer: boolean;
}
export interface OrderDetailsExtended extends OrderDetails {
    nameType: OrderNameType;
    errArr: Array<ReadCustomFieldFormError>;
}
export interface PaymentFormWireTableArgs {
    bankData: BankTransferData;
    currencySymbolISO: string;
}
export interface PaymentResultInitArgs {
    OrderId: number;
    OrderHash: string;
    TotalOrderPrice: number;
    Language: string;
    HasSSL: boolean;
    HttpPath: string;
    InstanceDomain: string;
    TargetSelector?: string;
    FacebookPixelId?: number;
    GoogleAnalyticsId?: string;
    CheckingIds?: string[];
    CurrencyISO: string;
    SupportEmail: string;
    Result: string;
    SandboxMode: boolean;
    TicketFlags: TicketSettings;
    EventSettings: EventSettings;
    ReponseFlags: PaymentResponseFlags;
    ExpeditionType: EventExpeditionProviderType;
    Items: Array<PaymentResultInitArgsItem>;
}
export interface PaymentResultMessageFormatArgs {
    message: string;
    type: PaymentResultMessageType;
    initArgs: PaymentResultInitArgs;
}
export const enum PaymentResultMessageType {
    Success = 0
}
export interface PaymentResultInitArgsItem {
    EventId: number;
    TicketId: number;
    TicketDateId: number;
    TicketName: string;
    Price: number;
    Quantity: number;
}
/**
 * Type of the payment process
 */
export const enum PaymentProcessType {
    /**
     * Online tickets paid using any of the online methods [payment card, paypal, skrill...]
     */
    Online = 0,
    /**
     * Offline bank wire transfer. Tickets are reserved and the buyer has to submit the bank  request to his/her bank
     */
    Wire = 1,
    /**
     * Free order. Either the ticket's price was 0, or the customer used a 100% discount code
     */
    Free = 2,
    /**
     * Cash-on-delivery method - the customer pays upon physical delivery of the ticket [by post, courier...]
     */
    CashOnDelivery = 3
}
export const enum PaymentResponseFlags {
    None = 0,
    IsVideo = 1,
    AttachCheckingIds = 2,
    NoTicketsMode = 4,
    MerchOnly = 8,
    CryptoPayment = 16
}
export interface ExpeditionTicketTypeData {
    Type: ExpeditionTicketType;
    Text: string;
}
export const enum ExpeditionTicketType {
    Online = "online",
    Printed = "printed"
}
export const enum ExpeditionMasterType {
    Online = "online",
    PrintedPaidOnline = "printedPaidOnline",
    CashOnDelivery = "cashOnDelivery"
}
export const enum OrderNameType {
    Person = 0,
    Company = 1
}
/**
 * Data about the payment process state
 */
export interface PaymentFormProcessCompleteNotification {
    /**
     * Type of the payment process
     */
    type: PaymentProcessType;
    /**
     * Determines if order is paid or not
     */
    paid: boolean;
    /**
     * Unique ID of the order
     */
    orderId: number;
    /**
     * Access token allowing access to the order without login [applicable only for orders with paid=true]
     */
    orderToken: string;
    /**
     * Total price of the order
     */
    totalPrice: number;
    /**
     * Determines if counter should be shown
     */
    showCountdown?: boolean;
    /**
     * Currency ISO code
     */
    currency: string;
    /**
     * Items ordered
     */
    items?: Array<PaymentResultInitArgsItem>;
    /**
     * Data that were used for the order request [applicable only for offline payments]
     */
    requestArgs: PaymentFormPaymentArgs;
    /**
     * Determines if API runs in sandbox mode
     */
    sandboxMode: boolean;
}
export interface PromoCodeAppliedItem {
    lookupId: string;
    oldPrice: number;
    newPrice: number;
    code: string;
}
export interface priceCalculatorFeeSettings {
    fee: number;
    minimumValue: number;
}

export interface TicketFormUtilsInitArgs {
    context: TicketFormContext;
    instance: TicketFormInstance;
}
export interface LanguageInitializationArgs {
    customResources?: any;
    callback?: (result: OperationResult) => void;
}
export interface PreInitArgs extends LanguageInitializationArgs {
    initForms?: boolean;
}
export interface ApiOperationResponseData extends AjaxErrorLegacy {
}
export interface InitTicketFormArgs {
    element: HTMLElement;
    initForms?: boolean;
    analytics?: AnalyticsSettings;
    callback: (result: OperationResult, message?: string) => void;
}
/**
 * Type of the submission. This is a hint to the server how to process the request. The request is validated afterwards
 */
export const enum TicketFormSubmitType {
    /**
     * Paid tickets for paid events
     */
    Paid = 0,
    /**
     * Free tickets for zero-priced events
     */
    ZeroPrice = 1
}
/**
 * Data contaning the order summary
 */
export interface TicketFormSubmitSuccessEventArgs {
    /**
     * Type of the submission
     */
    type: TicketFormSubmitType;
    /**
     * IDs of the reserved tickets
     */
    ticketNumbers: Array<EventReservationTicketNumber>;
    /**
     * Data that were used to submit the reservation request
     */
    formData: EventReservationSubmitRequestArgs;
    /**
     * Access token to the Order - allows getting order data without being logged-in
     */
    orderHash: string;
    /**
     * Context of the request
     */
    context: TicketFormContext;
}

export interface TicketFormShoppingCartState {
    email: string;
    language: string;
    instanceDomain: string;
    ticketingData: TicketingResponse;
    currency: string;
    cartItems: TicketFormShoppingCartItem[];
    cartExpiry: number;
    discountSystem: number;
}
export interface TicketFormShoppingCartApi {
    render(args: TicketFormCartRenderArgs): void;
    renderCartIconForSettings(inputArgs: TicketFormCartSettings, targetElement: HTMLElement | string | InviDom, contextType: TicketFormCartRenderArgsContextType, getResource: (key: string) => string, language: string, instance: TicketFormInstance): void;
    renderCartIcon(args: TicketFormCartRenderArgs, getResource: (key: string) => string, language: string, instance: TicketFormInstance): void;
    renderCartContents(): void;
    getCurrentState(): TicketFormShoppingCartState;
    addToCart(addedArgs: TicketFormShoppingCartAddRequest): void;
    validateNewItem(addedArgs: TicketFormShoppingCartAddRequest, callback: (success: boolean) => void): void;
    cartIsExpired(cartData?: TicketFormShoppingCartState): boolean;
}
export interface TicketFormShoppingCartLookupIdModel {
    lookupId: string;
    price: number;
}
export interface TicketFormShoppingCartItem {
    name: string;
    lookupIds: TicketFormShoppingCartLookupIdModel[];
    imageUrl: string;
    vat: number;
    ticketId: number;
    ticketDateId: number;
}
export interface TicketFormShoppingCartValidationRequest {
    email: string;
    cartSettings: TicketFormCartRenderArgs;
    ticketingData: TicketingResponse;
    cartExpiry: number;
    cartItems: TicketFormShoppingCartItem[];
    getResource: (resKey: any) => string;
}
export type TicketFormCartRenderArgsContextType = 'selector' | 'ticketForm' | 'paymentForm';
export interface TicketFormShoppingCartAddRequest extends TicketFormShoppingCartValidationRequest {
    showDialog: boolean;
    replaceCurrentState: boolean;
    language: string;
    ticketFormInstance: TicketFormInstance;
    addedItems: TicketFormShoppingCartItem[];
    currentContextType: TicketFormCartRenderArgsContextType;
    contextRoot: HTMLElement | string | InviDom;
    cartSettings: TicketFormCartSettings;
    getResource: (resKey: any) => string;
    continueShoppingClicked?: () => void;
    goToCartClicked?: () => void;
}
export interface TicketFormCartRenderArgs {
    paymentFormContext?: InviDom | HTMLElement | string;
    currentContextType?: TicketFormCartRenderArgsContextType;
    ticketFormInstance?: TicketFormInstance;
    itemAddedRenderer?: TicketFormCartItemAddedRenderer;
    cartContentsRenderer?: TicketFormCartContentsRenderer;
    contextRoot?: InviDom | HTMLElement | string;
    icon?: TicketFormCartRenderIconArgs;
    methods?: any;
    templates?: TicketFormCartTemplates;
    getResource?: (resKey: any) => string;
}
export interface TicketFormCartContentsRenderArgs {
    targetElement: HTMLElement | string | InviDom;
    cartSettings: TicketFormCartRenderArgs;
    ticketFormInstance: TicketFormInstance;
    getResource: (key: string) => string;
    language: string;
}
export interface TicketFormCartRenderIconExtendedArgs extends TicketFormCartRenderIconArgs {
    methods: any;
    language: string;
    templates: TicketFormCartTemplates;
    ticketFormInstance?: TicketFormInstance;
    cartSettings?: TicketFormCartRenderArgs;
    paymentFormContext: InviDom | HTMLElement | string;
    getResource: (key: string) => string;
    shoppingCartApi: TicketFormShoppingCartApi;
}
export interface TicketFormCartIconRenderer {
    render: (args: TicketFormCartRenderIconArgs) => void;
}
export interface TicketFormCartItemAddedRenderer {
    getHtml(args: TicketFormShoppingCartAddRequest): string;
}
export interface TicketFormCartContentsRenderer {
    render(args: TicketFormCartContentsRenderArgs): void;
}
export interface TicketFormCartRenderIconArgs {
    autoWrap: boolean;
    renderer?: TicketFormCartIconRenderer;
    renderMode: 'innerHtml' | 'appendTo' | 'prependTo' | 'insertBefore' | 'insertAfter';
    iconTarget: InviDom | HTMLElement | string;
    preferFontAwesome: boolean;
}
export interface TicketFormCartSettings extends TicketFormCartRenderArgs {
    enabled?: boolean;
}
export interface TicketFormCartPaymentFormRenderArgs {
    ticketFormInstance?: TicketFormInstance;
    renderContext: InviDom | HTMLElement | string;
}
export interface TicketFormCartTemplates {
    cartContentsRoot: string;
    addedMessage: string;
    cartContentsMessage: string;
    cartItem: string;
    iconWrap: string;
    iconBadge: string;
    iconElementFillColor: string;
    iconElementFontAwesome: string;
    iconElement: string;
}

/**
 *  interface containing the text resources and it's underlying methods for the API needs
 */
export interface invitonResources {
    /**
     * Fallback language if resource is not found on requested resource pack
     */
    fallback: string;
    /**
     * Ensures language resource pack is loaded
     *
     * @param language Language which resources should be ensured
     * @param callback Callback executed after the language is ensured or operation fails
     */
    ensureLanguageLoaded(language: string, callback: (result?: OperationResult) => any): void;
    /**
     * Loads language resource pack
     *
     * @param language Language which resources should be loaded
     * @param callback Callback executed after the language is loaded or operation fails
     */
    lazyLoadLanguage(language: string, callback: (result?: OperationResult) => any): void;
    /**
     * Get resource for given language
     *
     * @param language Requested language
     * @param resKey Name of the resource
     */
    getResource(language: string, resKey: string): any;
    /**
     * Updates existing resources with new values [e.g. extends current resource pack with given data]
     *
     * @param language Language under which the new resource data belong
     * @param resPack Object containing the resources
     *
     */
    setResources(language: string, resPack: any): void;
    /**
     * Obtain value from the resource pack [dot separated supported (e.g. invitonLLAPI.error, etc.)]
     *
     * @param language Language of the desired resource
     * @param resKey Name of the resource
     */
    _getItem(language: string, resKey: string): any;
}

export const enum CustomFieldType {
    Text = 0,
    Selection = 1,
    SportFields = 2,
    Country = 3,
    CompetitorNumber = 4,
    TicketNumberImage = 5,
    Email = 6,
    Number = 7,
    Date = 8,
    SelectionMultiple = 9,
    Separator = 10,
    Textarea = 11,
    PromoterNote = 12,
    Switch = 13,
    FileUpload = 14,
    JavascriptFormula = 15
}

export const enum Language {
    Slovak = 0,
    English = 1,
    Czech = 2,
    German = 3,
    Latvian = 4,
    Polish = 5
}

export interface ILocalizedString {
    /**
     * Value in Slovak language, if no specified, Czech and then English is used as fallback. If still blank, any non-blank value is used as fallback, or null
     */
    Slovak: string;
    /**
     * Value in English language, if no specified, any non-blank value is used as fallback, or null
     */
    English: string;
    /**
     * Value in Czech language, if no specified, Slovak and then English is used as fallback. If still blank, any non-blank value is used as fallback, or null
     */
    Czech: string;
    /**
     * Value in German language, if no specified, English is used as fallback. If still blank, any non-blank value is used as fallback, or null
     */
    German: string;
    /**
     * Value in Latvian language, if no specified, English is used as fallback. If still blank, any non-blank value is used as fallback, or null
     */
    Latvian: string;
    /**
     * Value in Polish language, if no specified, English is used as fallback. If still blank, any non-blank value is used as fallback, or null
     */
    Polish: string;
}

export interface domainHelper {
    /**
     * Get domain path for cookie storage.
     */
    getCookieDomain(): string;
    /**
     * Get domain from given URL string
     *
     * @param url URL from which the domain should be extracted
     * @param includeScheme  Determines if the scheme (http:// or https://) should be included [defaults false]
     * @param stripLeadingWWW  Strips leading www if present [defaults false]
     */
    getDomainFromUrl(url: string, includeScheme?: boolean, stripLeadingWWW?: boolean): string;
    /**
     * Get current domain
     *
     * @param includeScheme  Determines if the scheme (http:// or https://) should be included  [defaults false]
     * @param stripLeadingWWW  Strips leading www if present  [defaults false]
     */
    getDomain(includeScheme?: boolean, stripLeadingWWW?: boolean): string;
    /**
     * Get current domain base (e.g. https://www.inviton.sk/one/two becomes https://www.inviton.sk)
     */
    getDomainForHttpLinks(): string;
}
export interface invCookie {
    /**
     * Sets cookie value
     *
     * @param name  Name of the cookie
     * @param value Cookie value
     * @param expiration When the cookie should expire, set as a past date in order to delete the cookie
     */
    set(name: string, value: string, expiration?: Date): void;
    /**
     * Obtains cookie value
     *
     * @param name  Name of the cookie
     */
    read(name: string): string;
    /**
     * Removes cookie
     *
     * @param name  Name of the cookie
     */
    remove(name: string): void;
    allowedCookieCategory(category: string): boolean;
}
export interface invitonDate extends Date {
    isInvitonSerializedDate(str: string): boolean;
    deserialize(str: string): Date;
    serialize(dte: Date): string;
}

export interface selectExtenderValueAndOptions {
    selectedOption: HTMLOptionElement;
    selectedValue: string;
}
export interface selectExtender {
    /**
      * Base CSS placeholder class
      */
    placeholderClass: string;
    /**
     * Binds placeholder to the given SELECT
     *
     * @param elem SELECT to-be extended
     * @param placeholder text of the placeholder
     */
    bindPlaceholder(elem: HTMLElement, placeholder: string): void;
    /**
     * HTML string containing the placeholder option tag
     *
     * @param placeholderText text of the placeholder
     */
    getPlaceholderOptionHtml(placeholderText: string): string;
    /**
     * Obtains value of the extended SELECT
     *
     * @param elem SELECT whose value should be obtained
     */
    getValue(elem: HTMLElement): string;
    /**
     * Obtains value and selected option element of the extended SELECT
     *
     * @param elem SELECT whose value should be obtained
     */
    getValueAndOption(elem: HTMLElement): selectExtenderValueAndOptions;
    /**
     * Binds the onchange handler for the placeholder extension
     *
     * @param elem SELECT element
     */
    bindOnChange(elem: HTMLElement): void;
}
export interface cfSerializer {
    deserialize(valueString: string): string;
    serialize(value: string, customField: any): string;
}
export interface textValuePair {
    text: string;
    value: string;
}
export interface invUtils {
    /**
     * Determines if current site is an inviton domain, or the scripts are embedded as an SDK
     */
    isInvitonDomain(): boolean;
    /**
     * Gets if current site is run inside an iframe
     */
    isInIframe(): boolean;
    /**
     * Determines if current device runs iOS
     */
    isIOS(): boolean;
    /**
     * Determines if current device runs Android
     */
    isAndroid(): boolean;
    /**
     * Determines if given variable is a function
     *
     * @param functionToCheck Possible function
     */
    isFunction(functionToCheck: any): boolean;
    /**
     * Determines if given variable is a number
     *
     * @param numberToCheck Possible function
     */
    isNumber(numberToCheck: any): boolean;
    /**
     * Obtains locale-specific currency symbol based on the currency ISO code
     *
     * @param locale Desired locale
     * @param currencyISO Currency code in ISO string format to-be obtained
     */
    getCurrencySymbol(locale: string, currencyISO: string): string;
    /**
     * Parses date from webservice into Javascript Date object
     *
     * @param dte String date representation from the server that should be parsed
     */
    parseWsDate(dte: string | any): Date;
    /**
     * Gets server uri base for inviton use
     */
    getServerUri(): string;
    /**
     * Gets parameter from the current URL query string
     *
     * @param paramName Name of the URL parameter for obtaining
     */
    getURLParameter(paramName: string): string;
    /**
     * Works in similar way to jQuery extend
     */
    extendObject<T>(target: T, obj1: T, obj2?: T, obj3?: T, obj4?: T, obj5?: T): T;
    /**
     * Determines if the label for event better suits "registration" instead of "purchase". This is true for events such as sport events, conferences, etc, where ppl are more used to word registration
     *
     * @param category EventCategory
     * @param ticketPrice Total price of the ticket
     */
    isRegistrationLabel(category: number, ticketPrice: number): boolean;
    /**
     * Obtains current major version of Bootstrap CSS engine
     */
    getBoostrapMajorVersion(): number;
    /**
     * Determines width of the scrollbar
     */
    getScrollbarWidth(): number;
    /**
     * Animated scrolls to given element
     *
     * @param element HTMLElement or InviDom object to which page should scroll
     * @param offset Offset of the scroll, negative scrolls a bit up (-80 scrolls up 80px), positive scrolls down (100, scrolls additional 100px down)
     */
    scrollToElement(element: HTMLElement | InviDom, offset?: number): void;
    /**
     * Animated scrolls to top
     */
    scrollToTop(): void;
    /**
     * Animted scrolls element to given position
     *
     * @param element HTMLElement or InviDom object which should scroll (usually document.body)
     * @param offset Offset of the scroll, negative scrolls a bit up (-80 scrolls up 80px), positive scrolls down (100, scrolls additional 100px down)
     */
    scrollElement(element: HTMLElement | InviDom, scrollPos: number, offset?: number): void;
    /**
     * Obtains top-most calling element (if exists) by navigating up the call-stack
     */
    getTopMostCallerTarget(currentCaller?: any, currentLevel?: any): HTMLElement;
    /**
     * Generates random string
     *
     * @param length Desired length of the random string
     */
    randomString(length: number): string;
    /**
     * Posts Inviton action message to the topmost window listener
     * @param actionName Unique name of the action
     * @param data Accompanying action data
     */
    postActionMessage(actionName: string, data: any): void;
    /**
     * Returns locale as it should be
     * @param language
     */
    getLocale(language: string): string;
    /**
     * Safely logs into console (was mostly due to older IE...is it still needed??)
     *
     * @param message Message to-be logged into the console
     */
    log(message: string): void;
    /**
     * Obtains current Inviton API Url
     * @param invitonDomain - When specified, URL is constructed based on the given URL instead of current page's URL
     */
    getApiUrl(invitonDomain?: string): string;
    ensureDevMode(server?: string): void;
    /**
     * Escapes string into HTML-safe string
     * @param str - String that needs to be HTML-escaped
     */
    htmlEscape(str: string): string;
    /**
     * Encodes into html attribute
     */
    attributeEncode(s: string, preserveCR?: boolean): string;
    /**
     * Determines if current device is a touch-enabled device (mobile, tablet, desktop with touchscreen, etc.)
     */
    isTouchDevice(): boolean;
    /**
     * Determines if device should be treated as mobile phone
     */
    treatAsMobileDevice(): boolean;
    /**
     * Determines if native HTML input type=date is supported by the browser
     */
    isInputDateSupported(): boolean;
    /**
     * Determines if native HTML input type=datetime-local is supported by the browser
     */
    isInputDateTimeSupported(): boolean;
    /**
     * Pads number with leading zeros
     *
     * @param num Number to-be padded
     * @param size How many digits should the resulting string have
     */
    padNumber(num: number, size: number): string;
    /**
     * Determines if flag-enum contains specified flag
     *
     * @param value Value of the flag-enum
     * @param flag Flag searched
     */
    enumHasFlag(value: number, flag: number): boolean;
    /**
     * Copies given text to the clipboard using the most cross-browser compatible approach
     *
     * @param text Value to-be copied into the clipboard
     */
    copyToClipboard(text: string): void;
    /**
     * Converts date object to the write date format
     *
     * @param value Date or Date-string to-be converted
     * @param includeTime Flag indicating if also time should be included in output
     */
    dateToWire(value: Date | string, includeTime: boolean): string;
    getDateString(value: Date | string, locale: string, includeDate: boolean, includeTime: boolean): string;
    /**
     * Returns default language is language not set, thus ensures any language is set
     *
     * @param language Language value
     */
    getLanguageCode(language: string): string;
    /**
     * Stores given object into the localStorage
     *
     * @param key Key under which should the object be stored
     * @param value Object that is to be stored
     */
    setStoreObject(key: string, value: any): void;
    /**
     * Returns enum value from string language code
     *
     * @param langCode 2-letter language code [sk, en, cs...]
     */
    getLanguageEnum(langCode: string): number;
    /**
     * Obtains object from the localStorage
     *
     * @param key Key under which should the object be stored
     */
    getStoreObject(key: string): any;
    /**
     * Sorts array by given property
     *
     * @param arr Array that should be sorted dynamically
     * @param propName Property name (or returning the sort key), the array should be sorted by
     */
    sortArray<T>(arr: Array<T>, propName: string | string[] | ((item: T) => string | number)): Array<T>;
}

export interface TicketFormContext {
    elem: InviDom;
    find(selector: string): InviDom;
}
/**
 * Settings of the form's error handling generals
 */
export interface TicketFormErrorSettings {
    /**
     * Determines if error message if shown to the user
     */
    showMessage?: boolean;
    /**
     * Determines if CSS interface should be applied to the invalid element
     */
    setClass?: boolean;
    /**
     * CSS interface that is applied to the invalid element in case of not being overriden by the @see {@link setClass} switch
     */
    inputClass?: string;
    /**
     * CSS interface applied to the error message element in case of not being overriden by the @see {@link showMessage} switch
     */
    messageClass?: string;
}
/**
 * Settings of the form's success handling generals
 */
export interface TicketFormSuccessSettings {
    /**
     * On success, form content is cleared so that ofther form participant could be added
     */
    clearForm?: boolean;
    /**
     * Determines if success message if shown to the user
     */
    showMessage?: boolean;
}
export interface TicketFormDebugSettings {
    enabled?: boolean;
    forceDev?: boolean;
}
export interface PaymentFormUtilsInitArgs {
    instance: TicketFormInstance;
    context: TicketFormContext;
    contextData: TicketingResponseWithContextData;
    ticketNumbers: Array<EventReservationTicketNumber>;
    guestEmail: string;
    reservationExpiry?: number;
    showCountdown?: boolean;
    showBackButton?: boolean;
}
/**
 *
 */
export interface TicketFormPaymentFormSettings {
    /** @hidden */
    enabled?: boolean;
    /** @hidden */
    targetSelector?: string;
    /**
     * Switch determining if the discount code input should be rendered or not. Set to false only if you have a reason to
     */
    renderPromoCode?: boolean;
    /**
     * Switch determining if the discount code input should be rendered or not. Set to false only if you have a reason to
     */
    renderItemSummary?: boolean;
    /**
     * Switch determining if the donation input should be rendered or not. Set to false only if you have a reason to
     */
    renderDonation?: boolean;
    /**
     * Switch determining if the countdown indicating how much time does the buyer have to complete the order should be rendered or not. Set to false only if you have a reason to
     */
    renderCountdown?: boolean;
    /**
     * Default value for the donation field
     */
    defaultDonation?: number;
    /** @hidden */
    renderTargetEmail?: boolean;
    /**
     * Custom handler for promo-code application. This could be used for programming your own API logic that determines if the user is eligible for discount
     *
     * @param args
     */
    onPromoCodeApplyClicked?(args: PaymentFormUtilsInitArgs): any;
    /**
     * Callback event method raised right before the modal with payment result is hidden. Could be used for some custom purchase tracking or other
     * @event
     * @param args
     */
    onBeforePaymentResultHidden?(args: dialogClosedArgs): boolean;
    /**
     * Callback event method raised once the payment result is shown to the buyer
     * @event
     * @param result
     */
    onPaymentResultShown?(result: OperationResult, args: PaymentResultInitArgs): void;
}
/**
 * Definition of the plugin
 */
export interface TicketFormPluginArgs {
    /**
     * Name of the plugin in camel case. If the plugin is defined as "InvitonPluginSalesForce", plugin name should be "salesForce"
     */
    pluginName: string;
    /**
     * Initialization args for the plugin
     */
    args: any;
}
/**
 * Plugin of ticketForm. Has to be defined in global namespace as InvitonPlugin{pluginName} ... so e.g. plugin called 'salesTracking' should be defined as InvitonPluginSalesTracking
 */
export interface TicketFormPlugin {
    /**
    * Event callback raised when form related error occurs. If overriden, the default behavior will also be overriden.
    * @event
    * @param context
    * @param errArr
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [9332],
    *   targetElement: document.getElementById('invitonApiWrap'),
    *   onError: function(context, errArr) {
    *       this._onErrorBase(context, errArr);              //Internal of the api accessible by the event handler
    *       this._onErrorScrollToError(context, errArr);     //Internal of the api accessible by the event handler
    *       alert('help, I have an error!!...there are ' + errArr.length + ' errors...');
    *   }
        * })
    * ```
    */
    onError(context: InviDom, errArr: Array<ReadCustomFieldFormError>): void;
    /**
     * executed before the ticket selector is rendered.
     * @event
     * @param renderArgs Data for the ticket selector renderer
     * @param renderer Renderer instance
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [10500],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   ticketSelector: {
     *      onTicketSelectorRendered: function(renderArgs, renderer) {
     *          console.log(renderArgs);
     *          console.log(renderer);
     *      }
     *   }
            * })
     * ```
     */
    onBeforeTicketSelectorRender?(renderArgs: any, renderer: any, ticketingData: TicketingResponse): boolean;
    /**
     * Event callback raised before the order form is rendered. One can stop the form rendering by returning false from the method
     * @event
     * @param initArgs API initialization args
     * @param requestData Data used for the order form render
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [9332],
    *   targetElement: document.getElementById('invitonApiWrap'),
    *   onBeforeFormRender: function(initArgs, requestData) {
    *       if ((new Date()).getMonth == 2) {
    *          alert('No ticket buying in March, sorry...);
    *          return false;
    *       }
    *   }
        * })
    * ```
    */
    onBeforeFormRender(initArgs: TicketFormInitializerInitArgs, requestData: Array<TicketingTicketDateProcessed>): boolean;
    /**
     * Event callback raised once the back button is clicked on the order form
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onFormBackButtonClicked: function() {
     *       console.log('Someone clicked the form back button....');
     *   }
         * })
     * ```
     */
    onFormBackButtonClicked(caller?: string): void;
    /**
     * Event callback raised once the back button is clicked on the payment method selection form. The back button click can be reverted by returning false from the method
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPaymentFormBackButtonClicked: function() {
     *       if (!confirm('Are you realy sure??')) {
     *           return false;
     *       }
     *   }
         * })
     * ```
     */
    onPaymentFormBackButtonClicked(): boolean;
    /**
     * Event callback raised once the payment form cancel is complete and TicketForm is about to be shown
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPaymentFormCancelComplete: function() {
     *       console.log('just about to show ticket form again');
     *   }
         * })
     * ```
     */
    onPaymentFormCancelComplete(): boolean
    /**
     * Callback event which fires once paymentProcess is complete (free ticket is sent, online ticket is paid, bank-transfer order is submitted, or CashOnDelivery order is submitted)
     * IMPORTANT NOTE - in order to work for online payments [type==PaymentProcessType.Online], plugin has to be defined as a global one
     * @event
     * @param data
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi.global = {
     *     plugins: [{pluginName: 'myplugin', args: {}}]
     * };
     *
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap')
     * })
     * ```
     */
    onPaymentProcessComplete?(data: PaymentFormProcessCompleteNotification): void;
    /**
     * Event callback raised every time the price changed
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPriceChanged: function (data) {
     *          alert(`New price is: ${data.NewPrice} EUR.`);
     *   },
     * })
     * ```
     */
    onPriceChanged(data: PriceChangeArgs): void;
    /**
     * Method which allows post-process of payment result message
     * IMPORTANT NOTE - in order to work for online payments [type==PaymentProcessType.Online], plugin has to be defined as a global one
     * @event
     * @param args
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi.global = {
     *     plugins: [{pluginName: 'myplugin', args: {}}]
     * };
     *
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap')
     * })
     * ```
     */
    postProcessPaymentResultMessage?(args: PaymentResultMessageFormatArgs): string;
    /**
     * Event callback raised once ticket reservation is successful [this happens once the order form is submitted]. Next step after this is mostly the payment method selection. One can stop the process be returning false from this method.
     * @event
     * @param args Data containing for reservation details
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onFormReservationSuccess: function(args) {
     *       console.log('This order contains exactly ' + args.ticketNumbers.length + ' items')
     *   }
         * })
     * ```
     */
    onFormReservationSuccess(args: TicketFormSubmitSuccessEventArgs): boolean;
    /**
     * Event callback raised once the payment option selection form has finished rendering
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPaymentFormRendered: function() {
     *       console.log('Yeah, so close to the payment...$$$$$, here we go')
     *   }
         * })
     * ```
     */
    onPaymentFormRendered(args: PaymentFormUtilsInitArgs): void;
    /**
     * Event callback raised before the order form is validated before submittsion. Can be reverted by returning false
     * @event
     * @param context Current validation context
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onBeforeFormValidation: function(context) {
     *       if (new Date().getTime() == 23423) {
     *          alert('sorry, wrong time');
     *          return false;
     *       }
     *   }
         * })
     * ```
     */
    onBeforeFormValidation(context: TicketFormContext): boolean;
    /**
     * Event callback raised before the order form is submitted for reservation. Very similar to @see {@link onFormValidated}, but while @see {@link onFormValidated} callback is raised only if the data are valid, this callback is raised no matter what. Can be reverted by returning false
     * @event
     * @param formData Data that are about to be submitted to the server, or the error data. Determined by the status switch [might be 'ok' or 'error']
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onBeforeFormSubmit: function(formData) {
     *       if (formData.result == 'ok' && formData.donationAmount < 10) {
     *          alert('sorry, but your "voluntary" donation has to be at least 10 EUR or more');
     *          return false;
     *       }
     *   }
         * })
     * ```
     */
    onBeforeFormSubmit(formData: ReadCustomFieldFormSuccessResponse | ReadCustomFieldFormErrorResponse): boolean;
    /**
    * Event callback raised before the VALIDATED order form is submitted for reservation. Very similar to @see {@link onBeforeFormSubmit}, but this callback is raised only if the form data are valid. Progress can be reverted be reverted by returning false
    * @event
    * @param formData Data that are about to be submitted to the server, or the error data. Determined by the status switch [might be 'ok' or 'error']
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [9332],
    *   targetElement: document.getElementById('invitonApiWrap'),
    *   onFormValidated: function(formData) {
    *       if (formData.donationAmount < 10) {
    *          alert('sorry, but your "voluntary" donation has to be at least 10 EUR or more');
    *          return false;
    *       }
    *   }
     * })
    * ```
    */
    onFormValidated(formData: ReadCustomFieldFormSuccessResponse): boolean;
}
/**
 * Renderer settings
 */
export interface TicketFormRenderSettings {
    /**
     * ROOT template for the render. Has to contain all the data-inv-* fields and all the {{}} fields specified in the sample
     *
     * @example <caption>Sample, default value</caption>
     *
     *
     * ```html
     * <div data-inv-role="form" class="inv-reg-form" data-inv-successmsg="{{successMsg}}">
     *   <div data-inv-role="errMsg,successMsg" class="inv-reg-msg"></div>
     *   <div class="inv-reg-inputs" data-inv-role="cftarget">{{content}}</div>
     *   <div class="cf-container inv-footer-buttons"><div class="inv-footer-buttons-inner">{{submitButtons}}</div>
     * </div>
     * ```
     */
    baseTemplate?: string;
    /**
     * Render mode of the forms. Migh be inviton internal form engine (default) or bootstrap.
     */
    renderMode?: CustomFieldRenderMode;
    /**
     * What elements of the form are rendered using the material design look
     */
    materialDesign?: MaterialDesignMode;
    /**
     * Not implemented...
     */
    designStrictness?: DesignStrictness;
    /**
     * Determines if field label is rendered
     */
    showLabel?: boolean;
    /**
     * Determines if label is rendered as the placeholder of the form input
     */
    labelAsPlaceholder?: boolean;
    /**
     * Additional CSS interface applied to the form input
     */
    fieldsClass?: string;
    /**
     * If price is rendered into the submit button's label. Leave true, otherwise the customer will have no information about the payment amount
     */
    renderPriceIntoSubmitButton?: boolean;
    /**
     * Determines if the form should be wrapped in a "container" interface in case of Bootstrap render mode
     */
    bootstrapWrapInContainer?: boolean;
    /** @hidden */
    columnClass?: string;
}
/**
 * Template set for the order and payment form. Keep in mind when updaing, that the templating engine is driven by the data-inv-* attributes as well as {{value_placeholder}} parameter attributes. These have to be kept in the modified tempaltes as well
 */
export interface TicketFormRootTemplates {
    /**
     * Price-tag that is injected into the submit button. This informs the buyer on how much he/she will pay
     */
    submitButtonPrice?: string;
    /**
     * Template for case when the event is already sold-out
     */
    soldOut?: string;
    /**
     * Template for case when the event is not published yet/anymore
     */
    notPublished?: string;
    /**
     * Template for error case when some of the ordered items are not available anymore [one or more of the requested tickets are out-of-sale or sold out already]
     */
    someUnavailable?: string;
    /**
     * Radio button template
     */
    radioButton?: string;
    /**
     * Checkbox template
     */
    checkbox?: string;
    /**
     * Payment form templates
     */
    paymentForm?: TicketFormPaymentFormTemplates;
    /**
     * Button templates
     */
    buttons?: TicketFormButtonTemplates;
}
/**
 * Settings for the aggregated tickets
 */
export interface TicketFormAggregationSettings {
    /**
     * Determines whether aggregations are enabled. By default this is server-driven and should not be set to false unless there is a very good reason to
     */
    enabled?: boolean;
    /**
     * ROOT template. If null, instance.renderSettings.baseTemplate is used
     */
    templateFormElement?: string;
    /**
     * Label of the template
     */
    templateLabel?: string;
    templateTicketPrice?: string;
    /**
     * Determines maximum count that can be ordered
     */
    maxCount?: number;
}
/**
 * Template set for the payment form. Keep in mind when updaing, that the templating engine is driven by the data-inv-* attributes as well as {{value_placeholder}} parameter attributes. These have to be kept in the modified tempaltes as well
 */
export interface TicketFormPaymentFormTemplates {
    /**
     * Template for the promo code input row
     */
    promoCode: string;
    /**
     * Template for the donation input row
     */
    donation: string;
    /**
     * Template for the radio button on the payment form [expedition and payment method selection]. If null, root template's radio button template is used
     */
    paymentFormRadio: string;
    /**
     * Payment callback result template. This is the template that is shown to the user once the payment process is complete
     */
    callbackForm: string;
    /**
     * Wrapper of the top countdown. This is the wrapper of the countdown indicating how much time does the user still have to submit the order
     */
    topCounterWrap: string;
    /**
     * The top counter itself. This is the countdown indicating how much time does the user still have to submit the order
     */
    topCounter: string;
    /**
     * Template of the "The tickets will be sent to abc@email.com" message
     */
    emailConfirm: string;
    /**
     * Template of the message that is shown to the user once the countdown is over and order is expired
     */
    orderExpired: string;
    /**
     * Suffix of the expedition type
     */
    expeditionTypeSuffix: string;
    /**
     * Template of add discount button
     */
    addDiscountButton: string;
    /**
     *  Template of remove discount button
     */
    removeDiscountButton: string;
    /**
     * Template of no public discount button
     */
    noPublicDiscount: string;
    /**
     * Template of table payment summary row
     */
    paymentSummaryTableRow: string;
    /**
     *  Template of table payment summary headers
     */
    paymentSummaryTableHeaders: string;
    /**
     * Template of table payment summary
     */
    paymentSummaryTable: string;
    /**
     * Template of table payment wrap
     */
    paymentSummaryWrap: string;
}
/**
 * Button templates
 */
export interface TicketFormButtonTemplates {
    /**
     * Template for the submit button, has to keep the data-inv-* attributes if modified
     */
    submit: string;
    /**
    * Template for the back button, has to keep the data-inv-* attributes if modified
    */
    back: string;
}
/**
 * Initialization args
 */
export interface TicketFormInitializerInitArgs {
    /**
     * API instance
     */
    instance: TicketFormInstance;
}
/**
 * Default value for the form order field
 */
export interface TicketFormCustomFieldDefaultValue {
    /**
     * ID of the form field
     */
    definitionId: number;
    /**
     * Default value of the form field
     */
    value: string;
}
export interface TicketFormAdditionalData {
    reservationType?: any;
    parentTicketNumberId?: any;
    seatingData?: SeatingReservationData;
    aggregations?: any;
}
export interface SeatingReservationData {
    ReservedItems: Array<SeatingReservationItem>;
    SectorName: string;
    SecurityToken: string;
}
export interface SeatingReservationItem {
    Id: number;
    TicketId?: number;
    TicketDateId: number;
}
export interface PriceChangeArgs {
    NewPrice: number,
    Origin?: "ticketSelector" | "paymentForm",
}
export interface TicketFormInstance {
    /**
     * If specified, text of the submit button will be hardcoded to this value
     */
    submitButtonText?: string;
    /**
     * Additional CSS interface that is appended to the submit button. Advanced templating can be achieved by using the @see {@link templates} property
     */
    submitButtonClass?: string;
    /**
     * Additional CSS interface that is appended to the back button. Advanced templating can be achieved by using the @see {@link templates} property
     */
    backButtonClass?: string;
    /**
     * Additional CSS interface that is appended to the apply button [e.g. Apply promo code button]. Advanced templating can be achieved by using the @see {@link templates} property
     */
    applyButtonClass?: string;
    /**
     * If the form contains country selection dropdown, this parameter can be used to set the default country, use the ISO 3166-1 Aplha-3 code [e.g. DEU, SVK, ITA, ESP...]
     */
    defaultCountry?: string;
    /**
     * If set to true, API operates in virtual sandbox mode and no tickets are purchased / sent
     */
    sandboxMode?: boolean;
    /** @hidden */
    handleHistory?: boolean;
    /**
     * Hard-coded affiliate code. This can be used to track the affiliate partner, who arranged the purchase. If not specified, it is obtained from the "invaff" query string parameter
     */
    affiliateCode?: string;
    /** @hidden */
    bindLaddaButton?: boolean;
    /** @hidden */
    formBackButton?: boolean;
    /**
     * If specified, text of the back button will be hardcoded to this value
     */
    formBackButtonText?: string;
    /** @hidden */
    forcePoweredBy?: boolean;
    /**
     * If specified, full form is blocked while fetching/submitting data instead of just the buttons spinner
     */
    useElementBlockerOnFetch?: boolean;
    /**
     * If specified, text of the back button on the payment selection form will be hardcoded to this value
     */
    paymentBackButtonText?: string;
    /** @hidden */
    paymentCallbackUrl?: string;
    /**
     * Callback event which fires once paymentProcess is complete (free ticket is sent, online ticket is paid, bank-transfer order is submitted, or CashOnDelivery order is submitted)
     * IMPORTANT NOTE - in order to work for online payments [type==PaymentProcessType.Online], this has to be defined as a global handler
     * @event
     * @param data
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi.global = {
     *     onPaymentProcessComplete: function(data) {
     *         console.log('Payment complete with data: ' + JSON.stringify(data));
     *     }
     * };
     *
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap')
     * })
     * ```
     */
    onPaymentProcessComplete?(data: PaymentFormProcessCompleteNotification): void;
    /**
     * Method which allows post-process of payment result message
     * IMPORTANT NOTE - in order to work for online payments [type==PaymentProcessType.Online], plugin has to be defined as a global one
     * @event
     * @param args
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi.global = {
     *     plugins: [{pluginName: 'myplugin', args: {}}]
     * };
     *
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap')
     * })
     * ```
     */
    postProcessPaymentResultMessage?(args: PaymentResultMessageFormatArgs): string;
    /**
     * Default value for the email field on the order form
     */
    defaultUserEmail?: string;
    /**
     * Language of the interface. Supported are [en,de,sk,cs,pl,lv] or auto - this determines language based on the user's browser regional settings
     */
    language?: string;
    /**
     * Default values for the order form
     */
    defaultValues?: Array<TicketFormCustomFieldDefaultValue> | Array<Array<TicketFormCustomFieldDefaultValue>>;
    /**
     * List of plugins
     */
    plugins?: Array<TicketFormPluginArgs>;
    /**
     * Configuration object for the error handling. Allows to set CSS classes and more. Advanced templating can be achieved by using the @see {@link templates} property. Other behavioral changes can be achieved by overriding the @see {@link onError} event method.
     */
    error?: TicketFormErrorSettings;
    /**
     * Configuration object for the success handler
     */
    success?: TicketFormSuccessSettings;
    /**
    * Event callback raised when form related error occurs. If overriden, the default behavior will also be overriden.
    * @event
    * @param context
    * @param errArr
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [9332],
    *   targetElement: document.getElementById('invitonApiWrap'),
    *   onError: function(context, errArr) {
    *       this._onErrorBase(context, errArr);              //Internal of the api accessible by the event handler
    *       this._onErrorScrollToError(context, errArr);     //Internal of the api accessible by the event handler
    *       alert('help, I have an error!!...there are ' + errArr.length + ' errors...');
    *   }
        * })
    * ```
    */
    onError?(context: InviDom, errArr: Array<ReadCustomFieldFormError>): void;
    /** @hidden */
    onInitComplete?(): void;
    /**
     * Event callback raised before the order form is rendered. One can stop the form rendering by returning false from the method
     * @event
     * @param initArgs API initialization args
     * @param requestData Data used for the order form render
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [9332],
    *   targetElement: document.getElementById('invitonApiWrap'),
    *   onBeforeFormRender: function(initArgs, requestData) {
    *       if ((new Date()).getMonth == 2) {
    *          alert('No ticket buying in March, sorry...);
    *          return false;
    *       }
    *   }
        * })
    * ```
    */
    onBeforeFormRender?(initArgs: TicketFormInitializerInitArgs, requestData: Array<TicketingTicketDateProcessed>): boolean;
    /**
     * Event callback raised once the back button is clicked on the order form
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onFormBackButtonClicked: function() {
     *       console.log('Someone clicked the form back button....');
     *   }
         * })
     * ```
     */
    onFormBackButtonClicked?(caller?: string): void;
    /**
     * Event callback raised every time the price changed
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPriceChanged: function (data) {
     *          alert(`New price is: ${data.NewPrice} EUR.`);
     *   },
     * })
     * ```
     */
    onPriceChanged(data: PriceChangeArgs): void;
    /**
     * Event callback raised once the back button is clicked on the payment method selection form. The back button click can be reverted by returning false from the method
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPaymentFormBackButtonClicked: function() {
     *       if (!confirm('Are you realy sure??')) {
     *           return false;
     *       }
     *   }
         * })
     * ```
     */
    onPaymentFormBackButtonClicked?(): boolean;
    /**
     * Event callback raised once the payment form cancel is complete and TicketForm is about to be shown
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPaymentFormCancelComplete: function() {
     *       console.log('just about to show ticket form again');
     *   }
         * })
     * ```
     */
    onPaymentFormCancelComplete(): boolean
    /**
     * Event callback raised once ticket reservation is successful [this happens once the order form is submitted]. Next step after this is mostly the payment method selection. One can stop the process be returning false from this method.
     * @event
     * @param args Data containing for reservation details
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onFormReservationSuccess: function(args) {
     *       console.log('This order contains exactly ' + args.ticketNumbers.length + ' items')
     *   }
         * })
     * ```
     */
    onFormReservationSuccess?(args: TicketFormSubmitSuccessEventArgs): boolean;
    /**
     * Event callback raised once the payment option selection form has finished rendering
     * @event
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onPaymentFormRendered: function() {
     *       console.log('Yeah, so close to the payment...$$$$$, here we go')
     *   }
         * })
     * ```
     */
    onPaymentFormRendered?(args: PaymentFormUtilsInitArgs): void;
    /**
     * Event callback raised before the order form is validated before submittsion. Can be reverted by returning false
     * @event
     * @param context Current validation context
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onBeforeFormValidation: function(context) {
     *       if (new Date().getTime() == 23423) {
     *          alert('sorry, wrong time');
     *          return false;
     *       }
     *   }
         * })
     * ```
     */
    onBeforeFormValidation?(context: TicketFormContext): boolean;
    /**
     * Event callback raised before the order form is submitted for reservation. Very similar to @see {@link onFormValidated}, but while @see {@link onFormValidated} callback is raised only if the data are valid, this callback is raised no matter what. Can be reverted by returning false
     * @event
     * @param formData Data that are about to be submitted to the server, or the error data. Determined by the status switch [might be 'ok' or 'error']
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   onBeforeFormSubmit: function(formData) {
     *       if (formData.result == 'ok' && formData.donationAmount < 10) {
     *          alert('sorry, but your "voluntary" donation has to be at least 10 EUR or more');
     *          return false;
     *       }
     *   }
         * })
     * ```
     */
    onBeforeFormSubmit?(formData: ReadCustomFieldFormSuccessResponse | ReadCustomFieldFormErrorResponse): boolean;
    /**
    * Event callback raised before the VALIDATED order form is submitted for reservation. Very similar to @see {@link onBeforeFormSubmit}, but this callback is raised only if the form data are valid. Progress can be reverted be reverted by returning false
    * @event
    * @param formData Data that are about to be submitted to the server, or the error data. Determined by the status switch [might be 'ok' or 'error']
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [9332],
    *   targetElement: document.getElementById('invitonApiWrap'),
    *   onFormValidated: function(formData) {
    *       if (formData.donationAmount < 10) {
    *          alert('sorry, but your "voluntary" donation has to be at least 10 EUR or more');
    *          return false;
    *       }
    *   }
     * })
    * ```
    */
    onFormValidated?(formData: ReadCustomFieldFormSuccessResponse): boolean;
    /** @hidden */
    onNonIframeRequestBegin?(data: any): void;
    /** @hidden */
    onShoppingCartComplete?(): void;
    /** @hidden */
    onShoppingCartClosed?(): void;
    /**
     * If the hosting site has fixed header, overriding this can help with auto-scroll. The returned value should be the negative of the size of the fixed header plus the desired offset [10-20px]
     * @default -80
     */
    getFixedHeaderOffset?(): number;
    /**
     * Obtains custom fields and additional required data for ticketing render. Also contains information such as whether events' tickets are on sale and other required information
     * @param args Request args for the API call
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketForm', 'getTicketingData', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('buttonContainer'),
     *   onSuccess: (data) {
     *       data.TicketDates.forEach((item) {
     *           $('<button onclick="showFormForId(' + item.Id +', 1)"></button><br />').text(item.Name).appendTo('body');
     *       });
     *   }
     * })
     *
     * showFormForId(ticketDateId, count) {
     *   invitonApi('ticketForm', 'renderForm', {
     *     language: 'sk', //sk, en, cs, de, lv, pl, auto [determines based on browser]
     *     ticketDates: [{
     *         ticketDateId: ticketDateId,
     *         ticketCount: count
     *      }],
     *       onFormRendered: (result, message) {
     *           if (result != 0) {
     *               //Handler if the form is not loaded
     *           }
     *       },
     *       onPaymentProcessComplete: (paymentData) {
     *           if (paymentData.type == 1) {
     *               //Handler for wire transfer
     *           }
     *       },
     *       context: document.getElementById('invitonApiWrap') //Target HTML element where this should be rendered
     *   });
     * }
     * ```
     */
    getTicketingData?(args: GetTicketingDataRequestArgs): void;
    /** @hidden */
    getTicketFormAdditionalData?(formData: Array<TicketingTicketDateProcessed>): TicketFormAdditionalData;
    /**
     * Deprecated, use @see {@link onError} callback method instead. Formats error message for display
     * @deprecated
     * @param errMsg Error message to-be reformated
     */
    formatErrorMessage?(errMsg: string): string;
    /**
     * Allows post-processing of the data used for the order form render
     *
     * @param formData Order fields list
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   postProcessFormData: function(formData) {
     *       formData[0].CustomFields[0].NameLocalized = {English: 'My custom field name'}
     *   }
      * })
     * ```
     */
    postProcessFormData?(formData: Array<TicketingTicketDateProcessed>): void;
    /** @hidden */
    debug?: TicketFormDebugSettings;
    /**
     * Settings for the payment form
     */
    paymentForm?: TicketFormPaymentFormSettings;
    /**
     * Config for analytics
     */
    analytics?: AnalyticsSettings;
    /**
     * Renderer settings
     */
    renderSettings?: TicketFormRenderSettings;
    /**
     * Settings for the Event [and portal's] terms&Conditions
     */
    terms?: TicketFormTermsSettings;
    /**
     * Shopping cart settings, by default the shopping cart mode is disabled
     */
    shoppingCart?: TicketFormCartSettings;
    /**
     * Template set for the order / payment form elements. If looking for the ticket selector and seating templates, you can find them in their approperiate classes
     */
    templates?: TicketFormRootTemplates;
    /**
     * Settings for the aggregated tickets
     */
    aggregations?: TicketFormAggregationSettings;
    /**
     * Obtains resource for given resource key in current interface language. [for supported keys, check the default resource file located at https://www.inviton.eu/assets/scripts/api/resources/ticketForm-resources-en.js]
     * @param resName Resource key that should be obtained
     */
    getResource?(resName: any): any;
    /**
     * Custom resource list allows specifying custom values for resources
     * [for supported keys, check the default resource file located at https://www.inviton.eu/assets/scripts/api/resources/ticketForm-resources-en.js]
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [9332],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   customResources: {
     *       sk: {
     *           buyTickets: 'Kúpiť lístky',
     *           pieces: 'ks'
     *       },
     *       en: {
     *           buyTickets: 'Buy tickets',
     *           pieces: 'pcs'
     *       }
     *   }
     * })
     * ```
     */
    customResources?: {
        [index: string]: string;
    };
    /**
     * Internal use only... For zero-priced forms allows specification of guests. This is helpful when a person comes with some guests whose name we don't know. In order to make the registration faster, guest count is specified by the admin and the corresponding guests are created
     */
    maxGuests?: number;
    /**
     * If set to true, engine validates if person with same name and surname does not already exist in the attendee list
     */
    validateAlreadyAdded?: boolean;
    /**
     * Determines if auto-scroll should be performed once active section changes
     */
    autoScroll?: boolean;
    /**
     * Defines if we have consent to collect analytics data
     */
    enableAnalytics?: boolean;
    /**
     * @hidden
     * Order token for order resume
     */
    resumeOrderToken?: string;
    /**
     * Performs animated scroll to the element
     *
     * @param elem Element to scroll-to
     */
    scrollToElement?(elem: InviDom): void;
}
export interface ticketFormInitDocumentArgs extends TicketFormInstance {
    initForms?: boolean;
    callback: (result: OperationResult) => void;
}
export interface ticketFormInitElementArgs extends ticketFormInitDocumentArgs {
    element: HTMLElement;
}
export interface TicketFormInitArgs extends TicketFormInstance {
    /** @hidden */
    initForms?: boolean;
    /** @hidden */
    onFormRendered?: (result: OperationResult, message?: string, renderArgs?: TicketFormRenderArgs, instance?: TicketFormInstance) => void;
}
/**
 * Data args for the order / payment form renderer
 */
export interface TicketFormRenderArgs extends TicketFormInitArgs {
    /**
     * Target element where the form will be rendered
     * @category Mandatory properties
     */
    context: HTMLElement;
    /**
     * Array of the tickets that are about to be reserved. You may specify multiple ticket types onto one form as well as their count. Mandatory
     * @category Mandatory properties
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   context: document.getElementById('invitonApiWrap'),
     *   ticketDates: [{
     *      ticketDateId: 11542,
     *      ticketCount: 2
     *   },{
     *      ticketDateId: 11543,
     *      ticketCount: 1
     *   }]
     * })
     * ```
     */
    ticketDates: Array<TicketFormRenderTicketDate>;
}
export interface TicketFormRenderTicketDate {
    ticketDateId: number;
    ticketCount: number;
}
interface TicketFormInstanceFor extends TicketFormInstance {
    /**
     * Applicable for HTML-attribute based usage. Initializes all ticketForm forms found on the document
     *
     * @param args Render arguments - all-around settings and customizations supported by the API
     */
    initDocumentForms(args: TicketFormInitArgs): TicketFormInstance;
    /**
     * Applicable for HTML-attribute based usage. Initializes ticketForm for given element, this includes data load and for render
     *
     * @param args Render arguments - all-around settings and customizations supported by the API
     */
    initElement(args: ticketFormInitElementArgs): TicketFormInstance;
    /**
     * Code-based way to render form (no attributes needed). Renders form based on the parameters provided
     *
     * @param args Parameters based on which the form should be rendered
     */
    renderForm(args: TicketFormRenderArgs): TicketFormInstance;
    /**
     * Submits ticketForm found in given context
     *
     * @param context Context where the form resides
     */
    submitTicketForm(context: TicketFormUtilsInitArgs): void;
    handlePaymentResult(args: PaymentResultInitArgs): void;
}
interface settingsInner {
    getCdnPath(): string;
}

export const enum CustomFieldMapping {
    None = 0,
    Name = 1,
    Surname = 2,
    Gender = 3,
    Address = 4,
    City = 5,
    Country = 6,
    Age = 7,
    BirthDate = 8,
    CompetitorNumber = 9,
    Team = 10,
    Category = 11,
    HolderEmail = 12,
    Phone = 13,
    Company = 14,
    JobTitle = 15,
    ZIP = 16,
    CompanyId = 17,
    TaxId = 18,
    VatId = 19
}

export const enum CustomFieldTarget {
    TicketNumber = 0,
    Order = 1
}

export const enum CustomFieldFlags {
    None = 0,
    DuplicityForbidden = 1
}

export const enum EventTermsType {
    TermsAndConditions = 0,
    GDPR = 1,
    MarketingConsent = 2
}

export const enum EventClientsidePluginType {
    GopassDiscountMapping = 0
}

export const enum ExpeditionSupportedType {
    Online = 1,
    PrintedTicket = 2,
    Merch = 4
}

export const enum FeePaymentType {
    Promoter = 0,
    Customer = 1,
    DonationWithNoMinFee = 2
}

export const enum FeeTarget {
    TicketNumber = 0,
    Order = 1
}

export const enum EventDisplayType {
    Calendar = 0,
    Ticket = 1,
    SeatReservation = 2,
    OnlineVideoStream = 3,
    ExternalEvent = 4
}

export interface RenderCustomFieldsArgs extends ConditionalDisplayArgs {
    context: InviDom | HTMLElement | string;
    contextData: TicketingResponseWithContextData;
    language: string;
    ticketDates: Array<TicketingTicketDateProcessed>;
    eventTerms?: Array<TicketingDataEventTerms>;
    termsSettings?: TicketFormTermsSettings;
    renderSeparator?: boolean;
    targetElement?: InviDom | HTMLElement | string;
    emailText?: string;
    emailIndex?: number;
    guestlistToken?: string;
    defaultMailTemplate?: number;
    renderGuestEmail?: boolean;
    sendEmail?: boolean;
    designMode?: boolean;
    staticOwnerEmail?: string;
    renderMode?: CustomFieldRenderMode;
    materialMode?: MaterialDesignMode;
    designStrictness?: DesignStrictness;
    bootstrapWrapInContainer?: boolean;
    renderLabel?: boolean;
    renderPlaceholder?: boolean;
    columnMaxWidth?: string;
    labelAsPlaceholder?: boolean;
    inputClass?: string;
    nonBootstrapClass?: string;
    invitonDomain: string;
    nullUser: boolean;
    reservationType: ReservationType;
    parentTicketNumberId?: string;
    seatingData?: any;
    aggregations?: any;
    postProcessInputHtml?(data: any): string;
    maxGuests?: number;
    defaultCountry?: string;
}
/**
 * Data obtained from the order form
 */
export interface ReadCustomFieldFormSuccessResponse {
    /**
    * Operation result might be 'ok' or 'error'
    */
    result?: string;
    /**
     * Root context of the order form
     */
    context: InviDom;
    /**
     * Contex data of the order form
     */
    contextData: TicketingResponseWithContextData;
    /**
     * Filled-in data that will be used for the server submission
     */
    ticketDateForms: Array<TicketDateReservationRequestArgs>;
    /** @hidden */
    requestTicketDates: Array<any>;
    /**
     * Instance language
     */
    language: string;
    /**
     * Determines if confirmation email should be sent to the buyer
     */
    sendEmail: boolean;
    /**
     * Determined if the order is a zero-priced one (no payment form needed)
     */
    isZeroPrice: boolean;
    /** @hidden */
    invitonDomain: string;
    /**
     * How much more cash has the buyer donated
     */
    donationAmount?: number;
    /**
     * Affiliate code collected by the engine
     */
    affiliateCode: string;
    /**
     * TicketNumber lookup ids previously in shopping cart
     */
    previousLookupIds: Array<string>;
    /** @hidden */
    aggregations: any;
    /** @hidden */
    seatingData: any;
    /** @hidden */
    reservationType: any;
    /** @hidden */
    guestlistToken: string;
    /** @hidden */
    defaultMailTemplate?: number;
    /** @hidden */
    parentTicketNumberId: string;
}
export interface PerformFormSubmitRequestArgs extends ReadCustomFieldFormSuccessResponse {
    saveAutoFillData?: boolean;
}
/**
 * Error response from the form reading
 */
export interface ReadCustomFieldFormErrorResponse {
    /**
     * Operation result might be 'ok' or 'error'
     */
    result: string;
    /**
     * Array of form validation errors
     */
    errArr: Array<ReadCustomFieldFormError>;
}
/**
 * Data of the form validation error
 */
export interface ReadCustomFieldFormError {
    /**
     * HTML Element in containing the error field
     */
    Element?: HTMLElement;
    /**
     * Unique selector that can be applied to select the element by DOM library [jQuery, native JS, InviDom]
     */
    UniqueSelector?: string;
    /**
     * Name of the field in the language of the interface
     */
    FieldName?: string;
    /**
     * Inviton's TicketDateId of the field in scope
     */
    TicketDateId?: number;
    /**
     * Error message, localized in the language of the interface
     */
    Message: string;
}
/**
 * Form data
 */
export interface CustomFieldFormValue {
    /**
     * ID of the form field
     */
    DefinitionId: number;
    /**
     * Value of the field in string form
     */
    FieldValue: string;
    /**
     * Type of the custom field / order field
     */
    FieldType: CustomFieldType;
}
export interface AgreedEventTerm {
    Id: number;
}
export interface TicketDateReservationRequestArgs {
    TicketDateId: number;
    TicketId: number;
    TicketCount: number;
    AgreedTerms: Array<AgreedEventTerm>;
    Items: Array<TicketDateReservationRequestItem>;
}
export interface TicketDateReservationRequestItem {
    /**
     * Data obtained from the order form
     */
    CustomFields: Array<CustomFieldFormValue>;
    /** @hidden */
    SportValue: any;
    /**
     * Email of the buyer
     */
    GuestEmail: string;
}
export interface ResolvedAutofillMap {
    [index: string]: boolean;
}
export interface GetFieldInputArgs {
    fieldName: string;
    role?: string;
    designMode?: boolean;
    ticketDateId: number | Array<number>;
    renderArgs: RenderCustomFieldsArgs;
    autofillMap: ResolvedAutofillMap;
    conditionalDisplay: ConditionalDisplayData;
    customField: CustomFieldDefinitionExtendedDTO;
}
export interface ReadCustomFieldFormRequestArgs {
    context?: InviDom | HTMLElement | string;
    sendEmail?: boolean;
}
export interface ElementValidationResult {
    valid: boolean;
    error: ReadCustomFieldFormError;
}
export interface CustomFieldDictionary {
    [index: number]: CustomFieldDefinitionDTO;
}
export interface TicketingTicketDateProcessedDictionary {
    [index: number]: TicketingTicketDateProcessed;
}
export interface CustomFieldTargetOrderMap {
    [index: number]: Array<number>;
}
export const enum EventReservationStatus {
    FillCustomFields = 0,
    Reserved = 1,
    PurchasedForFree = 2,
    UserNotLoggedIn = 3,
    ZeroPrice = 4
}
export const enum ReservationType {
    Standard = 0,
    AggregatedChildren = 1
}
export interface EventReservationResponse {
    ReservationSeconds?: number;
    ZeroPrice: boolean;
    OrderDelayedMode: boolean;
    Status: EventReservationStatus;
    CustomFields: CustomFieldDefinitionDTO[];
    TicketNumbers: EventReservationTicketNumber[];
    TicketNumberLookupIds: string[];
    OrderHash: string;
}
export interface EventReservationSubmitRequestArgs {
    context: InviDom;
    contextData: TicketingResponseWithContextData;
    ticketDateForms: Array<TicketDateReservationRequestArgs>;
    requestTicketDates: Array<TicketingTicketDateProcessed>;
    previousLookupIds: Array<string>;
    invitonDomain: string;
    guestlistToken: string;
    affiliateCode: string;
    sendEmail: boolean;
    isZeroPrice: boolean;
    reservationType: ReservationType;
    defaultMailTemplate?: number;
    language: string;
    nullUser?: boolean;
    includePreviousLookupIds?: boolean;
    parentTicketNumberId: string;
    aggregations: Array<TicketNumberAggregation>;
    seatingData: any;
    onZeroPrice?(response: EventReservationResponse): any;
    onReserved?(response: EventReservationResponse): any;
    onError?(errArr?: Array<ReadCustomFieldFormError>): any;
    validateAlreadyAdded?: boolean;
    passwordToken?: string;
}
export interface TicketNumberAggregation {
    TicketId: number;
    TicketDateId: number;
    Price: number;
    Count: number;
}
export interface CancelReservationRequestArgs {
    /**
     * TicketNumber Lookup IDs to-be unreserved
     */
    lookupIds: Array<string>;
    /**
     * Inviton domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
    /**
     * Current interface language, only supported Inviton languages will be accepted
     */
    language: string;
    /**
     * Success callback
     */
    onSuccess(): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface OrderIsPaidRequestArgs {
    /**
     * Order ID to check if paid
     */
    orderId: number;
    /**
     * Determines if PaymentId should be also queried
     */
    obtainPaymentId: boolean;
    /**
     * Inviton domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
    /**
     * Desired langauge of the request
     */
    language?: string;
    /**
     * Success callback
     */
    onSuccess(resp: OrderIsPaidResponse): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface OrderIsPaidResponse {
    /**
     * Determines if order is paid
     */
    IsPaid: boolean;
    /**
     * PaymentID of the transaction
     */
    PaymentId: string;
}
export interface HasCachedTicketingDataRequestArgs {
    /**
     * TicketDateIds to check if are cached
     */
    ticketDateIds?: Array<number>;
    /**
     * EventIds to check if are cached
     */
    eventIds?: Array<number>;
}
export interface BankTransferData {
    OrderId: string;
    TotalPrice: number;
    AccountNumber: string;
    AccountSuffix: string;
    BankName: string;
    BankAddress: string;
    IBAN: string;
    Swift: string;
    ShowIban: boolean;
    BeneficiaryName: string;
    ReservationDuration: number;
}
export interface CashOnDeliveryData {
    OrderId: string;
    TotalPrice: number;
}
export interface GatewaySubmissionArgs {
    ProcessedRequestResult: string;
    SubmissionType: GatewaySubmissionType;
    BankTransferData?: BankTransferData;
    CashOnDeliveryData?: CashOnDeliveryData;
}
export const enum GatewaySubmissionType {
    HttpPost = 0,
    HttpGet = 1,
    DisplayBankModal = 2,
    DisplayCashOnDeliveryModal = 3
}
export interface OrderDetails {
    name: string;
    address: string;
    city: string;
    country: string;
    zip: string;
    companyId: string;
    taxId: string;
    vatId: string;
    phone: string;
}
export interface ExternalBindingData {
    type: ExternalBindingType;
    token?: string;
    purchaseUrl?: string;
    clientId: string;
}
export const enum ExternalBindingType {
    Gopass = 0
}
export interface ProcessPaymentRequestArgs {
    /**
     * LookupIds to-be reserved
     */
    lookupIds: Array<string>;
    /**
     * Payment Method Id
     */
    paymentMethodId: string;
    /**
     * Payment Provider Id
     */
    paymentProviderId: string;
    /**
     * Expedition method Id
     */
    expeditionId?: number;
    /**
     * Expedition pickup point where supported
     */
    expeditionPickupPoint?: string;
    /**
     * Additional query string parameters
     */
    queryString?: string;
    /**
     * Optional donation by the buyer
     */
    donationAmount?: number;
    /**
     * Optional donation for the service provider
     */
    providerDonation?: number;
    /**
     * Email of guest-logged user
     */
    guestEmail?: string;
    externalBinding?: ExternalBindingData;
    /**
     * Inviton domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
    /**
     * Current interface language, only supported Inviton languages will be accepted
     */
    language: string;
    /**
     * Detailed order buyer data
     */
    orderDetails?: OrderDetails;
    /**
     * In case if invoicing data differs from the buyer data
     */
    orderDetailsInvoicing?: OrderDetails;
    /**
     * Success callback
     */
    onSuccess(data: GatewaySubmissionArgs): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface ProcessFreeOrderRequestArgs {
    /**
     * LookupIds to-be reserved
     */
    lookupIds: Array<string>;
    /**
     * Email of guest-logged user
     */
    guestEmail?: string;
    /**
     * Inviton domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
    /**
     * Current interface language, only supported Inviton languages will be accepted
     */
    language: string;
    /**
     * Success callback
     */
    onSuccess(data: ProcessFreeOrderResponse): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface ProcessFreeOrderResponse {
    OrderId: number;
    OrderHash: string;
}
export interface PromoCodeApplyRequestArgs {
    /**
     * LookupIds in scope
     */
    lookupIds: Array<string>;
    /**
     * Discount code
     */
    code: string;
    /**
     * Type of the promo code to-be applied
     */
    codeType?: string;
    /**
     * Optional exact ID of the promo code obtained from the getPromoCodeTypes service call
     */
    promoCodeId?: number;
    /**
     * Surname of the applier if codeType==1 [ISIC discount]
     */
    surname?: string;
    /**
     * Filled-in dynamic promo code fields if codeType==2 [external webservice call]
     */
    fields?: Array<any>;
    /**
     * Inviton domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
    /**
     * Current interface language, only supported Inviton languages will be accepted
     */
    language: string;
    /**
     * Success callback
     */
    onSuccess(data: PromoCodeApplyResponse): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface PromoCodeApplyRevertRequestArgs {
    /**
     * LookupId
     */
    lookupId: string;
    /**
     * Inviton domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
    /**
     * Current interface language, only supported Inviton languages will be accepted
     */
    language: string;
    /**
     * Success callback
     */
    onSuccess(): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface PromoCodeApplyResponse {
    ErrorMessages: string[];
    AppliedItems: PromoCodeApplyResponseItem[];
}
export interface PromoCodeApplyResponseItem {
    OldPrice: number;
    NewPrice: number;
    TicketNumberLookupId: string;
}
export interface GetTicketingDataRequestArgsBase {
    /**
     * TicketDateIds for which the CF array and additional data should be loaded. If both ticketDateIds and eventIds present, it's loaded based on ticketDateIds
     */
    ticketDateIds?: Array<number>;
    /**
     * EventIds for which the CF array and additional data should be loaded. If both ticketDateIds and eventIds present, it's loaded based on ticketDateIds
     */
    eventIds?: Array<number>;
    /**
     * Current interface language, only supported Inviton languages will be accepted
     */
    language?: string;
    /**
     * Switch to determine if also all applicable payment options should be returned
     */
    paymentOptions?: boolean;
    /**
     * Switch to determine if extended details for each ticket should be returned
     */
    extendedDetails: boolean;
    accessPassword?: string;
    passwordToken?: string;
}
export interface GetTicketingDataRequestArgs extends GetTicketingDataRequestArgsBase {
    /**
     * Determines if obtained data from API call should be cached for later re-use
     * @hidden
     */
    cacheResult?: boolean;
    /**
     * Determines if event ids of the request should be cached
     * @hidden
     */
    cacheEventIds?: boolean;
    /**
     * Determines if cache should be bypassed and new server request should be made
     */
    bypassCache?: boolean;
    /**
     * Inviton domain on which the request should be performed, not mandatory
     * @hidden
     */
    invitonDomain?: string;
    /**
     * How many times should it retry before firing error callback
     * @hidden
     */
    retryCount?: number;
    /**
     * Success callback
     */
    onSuccess(data: TicketingResponse): void;
    /**
     * Optional that post-processes data once loaded
     * @param data
     */
    postProcessData?(data: TicketingResponse): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface ConditionalDisplayData {
    observables: ConditionalDisplayObservablesIndexer;
    slaveFields: ConditionalDisplaySlaveFieldsIndexer;
    groups: Array<ConditionalDisplayGroup>;
}
export interface ConditionalDisplayObservablesIndexer {
    [index: number]: boolean;
}
export interface ConditionalDisplaySlaveFieldsIndexer {
    [index: number]: ConditionalDisplaySlaveField;
}
export interface ConditionalDisplaySlaveField {
    masterFields: Array<ConditionalDisplayMasterField>;
    group: ConditionalDisplayGroup;
}
export interface ConditionalDisplayMasterField {
    Id: number;
    Value: string;
}
export interface ConditionalDisplayGroup {
    startingId: number;
    endingId: number;
    getMasterValueHash(): string;
}
export interface ConditionalDisplayOperation {
    field: InviDom;
    show: boolean;
    group: ConditionalDisplayGroup;
}
export interface ConditionalDisplayArgs {
    groupSlaveFields?: boolean;
    dynamicFieldVisibilityChanging?(data: ConditionalDisplayOperation): boolean;
    showFunction?(elem: HTMLElement): any;
    hideFunction?(elem: HTMLElement): any;
}
/**
* Person Name Args for verification if ticket already exists in DB
*/
export interface TicketNumberExistsByPersonNameArgs {
    TicketId: number;
    Name: string;
    Surname: string;
}
/**
* Args for verification if ticket already exists in DB
*/
export interface TicketNumberExistsArgs {
    /**
     * Inviton domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
    /**
     * Language of the request
     */
    language?: string;
    /**
     * TicketNumberId - number of real ticket
     */
    TicketNumberId?: number;
    /**
     * PersonName - data about the person registraded to ticket
     */
    PersonName: TicketNumberExistsByPersonNameArgs;
    /**
     * Success callback
     */
    onSuccess(data: TicketNumberDuplicateValidationProviderResponse): void;
    /**
     * A callback that is executed if the request fails.
     */
    onError?(err: AjaxErrorLegacy): void;
}
export interface TicketNumberDuplicateValidationProviderResponse {
    /**
     * Determines if given TicketNumber possibly already exists in the system
     */
    Exists: boolean;
    /**
     * If is the possible TiccketNumber member of a Guestlist, show it's name
     */
    GuestlistName: string;
}
/**
 * Object containing ticketing data
 */
export interface TicketingResponseBase {
    /**
     * Determines if current instance uses HTTPS
     */
    HasSSL: boolean;
    /**
     * VAT amount
     */
    VAT: number;
    /**
     * Base domain of the instance where the event belongs [e.g. inviton.sk, inviton.eu, ...]
     */
    InstanceDomain: string;
    /**
     * Event's currency in ISO 4217 code [https://en.wikipedia.org/wiki/ISO_4217]
     */
    CurrencySymbolISO: string;
    /**
     * Indicates if the event has enabled voluntary donations by the buyer
     */
    DonationsEnabled: boolean;
    /**
     * Google Analytics id of the event promoter
     */
    GoogleAnalyticsId?: string;
    /**
     * Facebook Pixel id of the event promoter
     */
    FacebookPixelId?: number;
    /**
     * Event category
     */
    EventCategory: number;
    /**
     * Additional settings flags for the event
     */
    EventSettings: EventSettings;
    /**
     * Indicates whether ticket is active, or inactive
     */
    TicketDates: Array<TicketingTicketDate>;
    /**
     * Possible payment methods for the event
     */
    PaymentMethods: Array<TicketingPaymentMethod>;
    /**
     * Terms, the buyer has to agreee on
     */
    EventTerms: Array<TicketingDataEventTerms>;
    /**
     * Additional expedition methods the buyer can choose from
     */
    EventExpeditions: Array<TicketingDataExpeditionMethod>;
    /**
     * Terms, the buyer has to agreee on
     */
    PaymentSettings?: TicketingDataPaymentSettings;
    /**
     * Aggregation relationships - which tickets are buyable only if another ticket is part of the order
     */
    Aggregations?: TicketingDataAggregation;
    /**
     * JS, CSS & TicketForm overrides for current dataset
     */
    CustomAssets?: EventCustomAssets;
    /**
     * Clientside plugins
     */
    ClientsidePlugins: Array<EventClientsidePlugin>;
    /**
     * JS, CSS & TicketForm overrides for current dataset
     */
    CaptchaRequired: boolean;
    /**
     * Determines if event is password protected
     */
    PasswordProtected: boolean;
    /**
     * Custom token for password unlock
     */
    PasswordToken: string;
    /**
     * Access password
     */
    AccessPassword: string;
    /**
     * Hash of the promoter data
     */
    PromoterHash: string;
    /**
    * Custom submit button text
    */
    SubmitButtonText: string;
    /**
    * Event-admin indicated error message
    */
    ErrorMessage: string;
}
export interface EventClientsidePlugin {
    Type: EventClientsidePluginType;
    FullName: string;
    Path: string;
}
export interface EventCustomAssets {
    JavascriptLiteral: string;
    JavascriptUrl: string;
    CssUrl: string;
    CssLiteral: string;
    TicketFormOverride: string;
}
export interface TicketingResponseWithContextData extends TicketingResponseBase {
    PaymentForm: TicketFormPaymentFormSettings;
    RegisterCaption: string;
    TotalOrderPrice: number;
    CurrentDomain: string;
}
/**
 * Object containing ticketing data
 */
export interface TicketingResponse extends TicketingResponseBase {
    /**
     * Mapping of Custom Fields to Tickets
     */
    CustomFieldMapping: CustomFieldTicketMapping;
}
export const enum InvitonErrorCodeLegacy {
    NotSpecified = 0,
    NullUser = 100,
    Unauthorized = 101,
    MandatoryFieldEmpty = 200,
    NotEnoughFreeTickets = 10000001,
    SeatingReservationValidation = 10000002,
    OneEmailPerEventValidation = 10000003,
    ReservationExpired = 10000004,
    CaptchaValidationFailed = 10000005
}
export const enum TicketSettings {
    None = 0,
    DontSendTicketNumber = 1,
    KioskMode = 2,
    OneEmailPerTicket = 8,
    OnlineTicket = 16,
    PrintedTicket = 32
}
export const enum TicketSaleMode {
    /**
    * Default sale mode as tickets
    */
    Standard = 0,
    /**
    * Eshop mode..
    */
    Eshop = 1
}
export const enum TicketEshopRole {
    Root = 0,
    AttributedItem = 1
}
export const enum TicketEshopInventoryMode {
    ByAttributes = 0,
    DontTrackInventory = 1,
    ByRoot = 2
}
/**
 * Object containing data for one ticket item
 */
export interface TicketingTicketDate {
    /**
     * Inviton TicketDateId [could be for example obtained in the EditEvent section of the Inviton portal] of the requested item
     */
    Id: number;
    /**
     * Inviton TicketId [could be for example obtained in the EditEvent section of the Inviton portal] of the requested item
     */
    TicketId: number;
    /**
     * Inviton EventId [could be for example obtained in the EditEvent section of the Inviton portal] of the requested item
     */
    EventId: number;
    /**
     * Ticket price
     */
    Price: number;
    CurrencySymbolISO: string;
    /**
     * Event display type
     */
    DisplayType: EventDisplayType;
    /**
     * Indicates how many tickets are approximately remaining, might return 999999 if capacity should not be displayed and tickets are still on-sale
     */
    Remaining: number;
    /**
     * Flags enum indicating additional Ticket settings
     */
    Settings: TicketSettings;
    /**
     * Determines sale mode of the ticket
     */
    SaleMode: TicketSaleMode;
    /**
     * Indicates whether ticket is active, or inactive
     */
    OnSale: boolean;
    /**
     * Gallery of images relative to the ticket
     */
    ImageUrls: string[];
    /**
     * Sort order of the current ticket
     */
    SortOrder: number;
    /**
     * Name of the ticket
     */
    Name: string;
    /**
     * Localized name of the ticket
     */
    NameLocalized: string;
    /**
     * Description of the ticket, serves for providing additional details about the ticket
     */
    Description: string;
    /**
     * Indicates when the event starts
     */
    StartTime: string | Date;
    /**
     * Indicates when the event ends
     */
    EndTime: string | Date;
    StartTimePublish: string | Date;
    EndTimePublish: string | Date;
    /**
     * Publicly available discount codes
     */
    PublicPromoCodes: TicketingPublicPromoCode[];
    /**
     * Indicates whether description should be shown
     */
    ShowDescription: boolean;
    /**
     * Indicates whether zero price should be shown
     */
    ShowZeroPrice: boolean;
    /**
     * Minimum ticket amount buyer can order
     */
    OrderLimitMin: number;
    /**
     * Maximum ticket amount buyer can order
     */
    OrderLimitMax: number;
    /**
     * Definition of discount rules
     */
    DiscountDefinition: TicketDiscountDefinition;
    /**
     * Eshop mode related settings if applicable
     */
    EshopDefinition: TicketEshopDefinition;
    /**
     * Custom variables applicable for the event
     */
    Variables: TicketingVariable[];
    /**
     * Shipping settings of the item
     */
    ShippingDefinition: TicketEshopShippingDefinition;
    /**
    * Allow Bank Transfer
    */
    AllowBankTransfer: boolean;
}
export interface TicketingPublicPromoCode {
    /**
     * Indicates whether description should be shown
     */
    Code: string;
    /**
     * Indicates whether description should be shown
     */
    TitleLocalized: string;
    /**
     * Indicates whether description should be shown
     */
    DiscountType: PromoDiscountType;
    /**
     * Indicates whether description should be shown
     */
    DiscountAmount: number;
}
export interface TicketingVariable {
    Id: string;
    Value: string;
}
export interface TicketEshopDefinition {
    Role: TicketEshopRole;
    InventoryMode: TicketEshopInventoryMode;
    RootId: number;
    RootAttributes: TicketEshopAttribute[];
    AssignedAttributes: TicketEshopAssignedAttribute[];
    AttributedSale: boolean;
    SKU: string;
}
export interface TicketEshopShippingDefinition {
    ShippingEnabled: boolean;
    Weight: number;
    Length: number;
    Width: number;
    Height: number;
}
export interface TicketEshopAttribute {
    UUID: string;
    Required: boolean;
    SortOrder: number;
    Name: ILocalizedString;
    Values: TicketEshopAttributeValue[];
}
export interface TicketEshopAttributeValue {
    UUID: string;
    Text: ILocalizedString;
}
export interface TicketEshopAssignedAttribute {
    AttributeUUID: string;
    AttributeValueUUID: string;
}
export const enum TicketDiscountDefinitionType {
    FixedDiscount = 0,
    QuantityInvokedDiscount = 1,
    PromoText = 2,
    CustomScript = 3
}
export const enum TicketDiscountType {
    FreeTickets = 0,
    Percentual = 1,
    Nominal = 2,
    TextOnly = 3,
    CustomScript = 4
}
export const enum PromoDiscountType {
    Percentual = 0,
    Nominal = 1
}
export interface TicketDiscountDefinition {
    DefinitionType: TicketDiscountDefinitionType;
    DiscountType: TicketDiscountType;
    DiscountText?: ILocalizedString;
    CustomScript?: string;
    QuantityRequired: number;
    DiscountAmount: number;
    DateTo?: string;
    DateToUTC?: string;
}
/**
 * Object containing data for one ticket item
 */
export interface TicketingTicketDateProcessed extends TicketingTicketDate {
    /**
     * How many items of this type should be ordered/rendered
     */
    RowCount: number;
    /**
     * Order form fields
     */
    CustomFields: Array<CustomFieldDefinitionDTO>;
}
/**
 * Aggregation relationships - which tickets are buyable only if another ticket is part of the order
 */
export interface TicketingDataAggregation {
    Mapping: Array<TicketingDataAggregationMap>;
    Children: Array<TicketingTicketDate>;
}
/**
 * Aggregation mapping - which ticket is dependant on which
 */
export interface TicketingDataAggregationMap {
    /**
     * Id of the master TicketDate
     */
    ParentId: number;
    /**
     * Id of the slave TicketDate
     */
    ChildId: number;
}
/**
 * Object containing data about the possible payment method - how the buyer can pay for the event
 */
export interface TicketingPaymentMethod {
    /**
     * Payment method Id
     */
    Id: string;
    /**
     * Id of underlying Payment method's provider
     */
    ProviderId: string;
    /**
     * Localized name of the current payment method
     */
    Name: string;
    /**
     * URL for payment method icon
     */
    LogoUrl: string;
    /**
     * Unique ID of the payment method in the Inviton system registry
     */
    UUID: number;
    /**
     * Additional fees that apply when choosing this method
     */
    Fee?: Array<PaymentMethodFeeDefinition>;
}
export interface PaymentMethodFeeDefinition {
    Fee: number;
    MinValue: number;
    Type: TicketingPaymentMethodFeeType;
}
export const enum TicketingPaymentMethodFeeType {
    Percentual = 0,
    Nominal = 1
}
/**
 * Object containing data about the event terms, which buyer must agree with before continuing with the payment process
 */
export interface TicketingDataEventTerms {
    /**
     * DB Id of the EventTerms
     */
    Id: number;
    /**
     * Name of the terms unit (e.g. "Main terms of the provider", or similar, translates to "I agree with Main terms...")
     */
    Name: string;
    /**
     * URL pointing to the document where the terms are declared (might be some data storage, or promoter homepage)
     */
    Url: string;
    /**
     * Determines if agreement is mandatory
     */
    Mandatory: boolean;
    /**
     * Determines what purpose do the terms serve
     */
    Type: EventTermsType;
}
export const enum EventExpeditionProviderType {
    Online = 0,
    PrintedPaidOnlineGLS = 10000,
    PrintedPaidOnlineSlovenskaPosta = 10001,
    PrintedPaidOnlinePacketa = 10002,
    CashOnDeliverySlovenskaPosta = 20000
}
/**
 * Object containing data about additional expedition types. These allow for other expedition processes such as printed tickets, cash-on-delivery tickets and more
 */
export interface TicketingDataExpeditionMethod {
    /**
     * Id of the ExpeditionType
     */
    Id: number;
    /**
     * Price, this is added to the final price of the order
     */
    Price: number;
    /**
     * URL of the expedtion method
     */
    IconUrl: string;
    /**
     * SortOrder
     */
    SortOrder: number;
    /**
     * Type of the expedition provider
     */
    Type: EventExpeditionProviderType;
    /**
     * Localized name of the provider
     */
    NameLocalized: ILocalizedString;
    SupportedCountries?: Array<string>;
    SupportedType?: ExpeditionSupportedType;
    ApiKey?: string;
}
/**
 * Object containing ticket => custom field mapping (e.g. which ticket contains which custom fields)
 */
export interface CustomFieldTicketMapping {
    /**
     * List of mappings of which CustomField definition belongs to which TicketId
     */
    TicketFieldMappings: Array<TicketCustomFieldMap>;
    /**
     * CustomField definitions
     */
    CustomFields: Array<CustomFieldDefinitionDTO>;
}
/**
 * Mapping of which CustomField definition belongs to which TicketId
 */
export interface TicketCustomFieldMap {
    /**
     * Id of the Ticket
     */
    TicketId: number;
    /**
     * Id of the CustomField definition
     */
    DefinitionId: number;
}
export interface TicketingDataPaymentSettings {
    FeePaymentType: FeePaymentType;
    FeeTarget: FeeTarget;
    Fee: number;
    MinimumFeeValue: number;
    CreditCardFee?: number;
    MinimumCreditCardFeeValue?: number;
    OnlineFee?: number;
    MinimumOnlineFeeValue?: number;
    BankTransferFee?: number;
    MinimumBankTransferFeeValue?: number;
    BankTransferReservationDays?: number;
}
/**
 * Settings for EventTerms
 */
export interface TicketFormTermsSettings {
    /**
     * Determines if terms should be rendered [defaults true]. BY SETTING FALSE YOU AKNOWLEDGE THAT ANY LEGAL ISSUES RESULTING FROM DISABLING IS LIABILITY OF THE IMPLEMENTATOR
     */
    enabled?: boolean;
    /**
     * Determines if inviton portal terms and condition should be rendered. BY SETTING FALSE YOU AKNOWLEDGE THAT ANY LEGAL ISSUES RESULTING FROM DISABLING IS LIABILITY OF THE IMPLEMENTATOR
     */
    invitonTerms?: boolean;
    /**
     * Determines if mandatory terms are grouped into one single checkbox
     */
    groupTerms?: boolean;
    /**
     * Determines if terms are pre-checked by default BY SETTING FALSE YOU AKNOWLEDGE THAT ANY LEGAL ISSUES RESULTING FROM DISABLING IS LIABILITY OF THE IMPLEMENTATOR
     */
    defaultChecked?: boolean;
}
export interface CustomFieldDefinitionDTO {
    /**
     * Id of the field
     */
    Id: number;
    /** @hidden */
    Name?: string;
    /**
     * What the field maps to
     */
    MappingType?: CustomFieldMapping;
    /**
     * Type of the field input (how the value is entered)
     */
    FieldType?: CustomFieldType;
    /**
     * Whether the field targets whole order, or the requested ticket
     */
    Target?: CustomFieldTarget;
    /** @hidden */
    AssignmentType?: number;
    /** @hidden */
    ExtendedData1?: string;
    /**
     * Determines whether field needs to be filled, or can remain blank
     */
    Mandatory?: boolean;
    /**
     * Name of the field
     */
    NameLocalized?: ILocalizedString;
    /**
     * Subtitle of the field, rendered as a hint below the input
     */
    Subtitle?: ILocalizedString;
    /**
     * Dropdown options in case if field is a Selection, or SelectionMultiple type
     */
    SelectionValues?: Array<CustomFieldChoiceValueDTO>;
    /** @hidden */
    Flags?: CustomFieldFlags;
    /** @hidden */
    PublicVisible?: boolean;
    /** @hidden */
    IsSystem?: boolean;
    /** @hidden */
    UserEditable?: boolean;
}
export interface CustomFieldDefinitionExtendedDTO extends CustomFieldDefinitionDTO {
    AdditionalAttributes?: string;
    IsGuestEmailField?: boolean;
    Max?: number;
}
export interface CustomFieldChoiceValueDTO {
    Value: string;
    TextLocalized: ILocalizedString;
    SortOrder: number;
    ExpressionJSON: string;
}
/**
 * Reserved ticket model
 */
export interface EventReservationTicketNumber {
    /**
     * Id of the ticket for lookup in the Inviton systems
     */
    LookupId: string;
    /**
     * Id of the ticket definition
     */
    TicketId: number;
    /**
     * TicketDateId of the item
     */
    TicketDateId: number;
    /**
     * Purchase price of the item
     */
    PurchasePrice: number;
}
export const enum CustomFieldRenderMode {
    /**
     * Automatically determines based on the environment
     */
    Auto = "auto",
    /**
     * Bootstrap - renders the form using bootstrap row-column grid system
     */
    Bootstrap = "bootstrap",
    /**
     * Inviton mode (default) - form is rendered using the custom inviton responsive engine
     */
    Inviton = "inviton",
    /**
     * Material - renders the form by using the custom material design renderer
     */
    Material = "material",
    /**
     * Material - renders the form by using the custom material design renderer, however labels stays inside not in the border
     */
    MaterialInset = "material-inset",
    /**
     * Not implemented, override the inviton mode to achieve desired results
     */
    Custom = "custom"
}
/**
 * What elements of the form are rendered using the material design
 */
export const enum MaterialDesignMode {
    /**
     * None of the elements
     */
    None = "none",
    /**
     * Radio boxes and checkboxes (default)
     */
    RadioCheckbox = "radioCheckbox",
    /**
     * Everything (not implemented)
     */
    Full = "full"
}
export const enum DesignStrictness {
    None = "none",
    EnforceCheckables = "enforce-checkables"
}



/**
 * Interface for the AJAX setting that will configure the AJAX request
 */
export interface AjaxDefinitionLegacy<T> {
    /**
     * Specifies the content type for content negotiation with the server
     */
    contentType?: string;
    /**
     * Data to be sent to the server.
     */
    data?: string | Object;
    /**
     * A callback that is executed if the request fails.
     */
    error?(err: AjaxErrorLegacy): void;
    /**
     * A callback that is executed if the request succeeds.
     */
    success?(data: T, xhr: XMLHttpRequest): void;
    /**
     * Timeout (in milliseconds) for the request.
     */
    timeout?: number;
    /**
     * Additional HTTP Headers to-be sent
     */
    headers?: Array<AjaxHeaderLegacy>;
    /**
     * Settings for automated UI-blocking interface
     */
    blockUi?: AjaxBlockUiDefinitionLegacy;
    /**
     * The type of request to make ("POST" or "GET"), default is "GET". Note: Other HTTP request methods, such as PUT and DELETE, can also be used here, but they are not supported by all browsers.
     */
    type?: string;
}
export interface AjaxDefinitionWithUrlLegacy<T> extends AjaxDefinitionLegacy<T> {
    /**
     * A string containing the URL to which the request is sent.
     */
    url: string;
}
export interface AjaxDefinitionWithApiMethodNameLegacy<T> extends AjaxDefinitionLegacy<T> {
    /**
     * Name of the inviton API method to call
     */
    apiMethod: string;
    /**
     * Optional Inviton system domain on which the request should be performed, not mandatory
     */
    invitonDomain?: string;
}
export interface AjaxHeaderLegacy {
    name: string;
    value: string;
}
export interface AjaxBlockUiDefinitionLegacy {
    enabled: boolean | string;
    blockArgument: boolean | string;
    block?(data: AjaxBlockUiArgsLegacy): void;
    unblock?(data: AjaxBlockUiArgsLegacy): void;
}
export interface AjaxBlockUiArgsLegacy {
    callingElement: HTMLElement;
    blockArgument: boolean | string;
}
export interface AjaxUrlBuilderLegacy {
    buildUrl(args: AjaxUrlBuilderArgsLegacy): string;
}
export interface AjaxUrlBuilderArgsLegacy {
    endpoint: string;
    invitonDomain: string;
}
/**
 * Error data of the AJAX request
 */
export interface AjaxErrorLegacy {
    /**
     * Determines if the request was authorized by the Inviton server
     */
    authorized: boolean;
    /**
     * Response data of the AJAX request
     */
    responseData?: any;
    /**
     * Error data of the AJAX request
     */
    errorData?: any;
    /**
     * Unique Inviton error code
     */
    invitonCode: InvitonErrorCodeLegacy;
    /**
     * HTTP status code
     */
    httpCode: number;
    /**
     * Text of the error response from the server
     */
    responseText: string;
    /**
     * XHR object that was used for the AJAX request
     */
    xhr: XMLHttpRequest;
}

export interface laddaLite {
    showSpin(target: HTMLElement | InviDom): void;
    hideSpin(target: HTMLElement | InviDom): void;
}

export const enum ElementBlockerSkin {
    dark = "",
    white = "holdon-white"
}
export interface ElementBlocker {
    showLoading(elemOrBool: InviDom | HTMLElement | string | boolean, cssClass?: string | ElementBlockerSkin): void;
    getBlockerHtml(cssClass?: string | ElementBlockerSkin): any;
    hideLoading(elemOrBool?: InviDom | HTMLElement | string): void;
}

interface IDialogRenderer {
    showMessage(args: dialogArgs): any;
    hideMessage(args: dialogHideMessageArgs): any;
    showToastMessage(args: dialogToastMessageArgs): any;
    toggleFullHeight(fullHeight: boolean): any;
    showButtons(): any;
    hideButtons(): any;
    dialogIsOpen(): boolean;
    getCurrentModalContext(): InviDom;
    setButtonText(button: dialogButton): any;
}
export interface dialogUtils {
    /**
     * Determines if bootstrap rendenrer should be used as the default one
     */
    useBootstrap: boolean;
    /**
     * Standard animation duration
     */
    animationDuration: number;
    /**
     * Custom renderer for the inviton dialogs
     */
    customRenderer: IDialogRenderer;
    /**
     * Displays message dialog based on given arguments
     *
     * @param args Data for the dialog display
     */
    showMessage(args: dialogArgs): dialogMessageHandle;
    /**
     * Displays toast message on the top
     *
     * @param args Data for the toast display
     */
    showToastMessage(args: dialogToastMessageArgs): void;
    /**
     * Show confirm dialog
     *
     * @param args Data for the dialog display
     */
    showConfirm(args: dialogConfirmArgs): dialogMessageHandle;
    /**
     * Displays error message that once clicked on OK, will reload the page
     * @param titleHtml
     * @param messageHtml
     */
    showWindowReloadingErrorMessage(titleHtml: string, messageHtml: string): void;
    /**
     * Hides current active dialog
     *
     * @param callback Callback that is launched when dialog closing is complete
     */
    hideMessage(args?: dialogHideMessageArgs): void;
    /**
     * Shows dialog footer buttons
     */
    showButtons(): void;
    /**
     * Hides dialog footer buttons
     */
    hideButtons(): void;
    /**
     * Sets or unsets the current modal as full-height
     * @param fullHeight
     */
    toggleFullHeight(fullHeight: boolean): void;
    /**
     * Sets title of currently open dialog
     * @param titleHtml Title to-be set
     */
    setActiveDialogTitle(titleHtml: string): void;
    /**
     * Delays the clickability of given button
     *
     * @param buttonElem Button, whose clickability should be delayed
     * @param delayAmount Time (in seconds) how long should the button be non-clickable
     */
    delayButtonClickable(buttonElem: InviDom, delayAmount?: number): void;
    /**
     * Delays the clickability of dialog's confirm button
     *
     * @param delayAmount Time (in seconds) how long should the button be non-clickable
     */
    delayConfirmButtonClickable(delayAmount?: number): void;
    /**
     * Delays the clickability of all dialog's buttons
     *
     * @param delayAmount Time (in seconds) how long should the button be non-clickable
     */
    delayAllButtonsClickable(delayAmount?: number): void;
    /**
     * Determines if modal dialog is currently open
     */
    dialogIsOpen(): boolean;
    /**
     * Obtains context of the currently open modal dialog
     */
    getCurrentModalContext(): InviDom;
    /**
     * Changes text of an existing button
     *
     * @param button
     */
    setButtonText(button: dialogButton): void;
}
/**
 * Supported skins for the loading indicator
 */
export const enum loadingIndicatorSkin {
    dark = "",
    white = "holdon-white"
}

export interface TicketDiscountHandlerArgs {
    Items: TicketDiscountHandlerItem[];
    Language: string;
    CurrencySymbolISO: string;
}
export interface TicketDiscountHandlerItem {
    TicketId: number;
    TicketDateId: number;
    DiscountDefinition: TicketDiscountDefinition;
    TicketPrice: number;
    Count: number;
}
export const enum TicketDiscountTextType {
    Short = 0,
    Long = 1,
    LongWithDate = 2
}
export interface TicketDiscountHandler {
    getDiscountText(definition: TicketDiscountDefinition, language: string, currencySymbolISO: string, long: boolean): string;
    getDiscountHtml(definition: TicketDiscountDefinition, language: string, currencySymbolISO: string, type: TicketDiscountTextType, cssClass?: string): string;
    getDiscountDateText(definition: TicketDiscountDefinition, language: string): string;
    getTotalNominalDiscount(args: TicketDiscountHandlerArgs): number;
    getLocalCurrencyText(price: number, language: string, currencySymbolISO: string): string;
}

export let invitonCore: {
    cloneString: (str: string) => string;
    replaceAll: (str: string, old: string, newStr: string) => string;
    isNullOrEmpty: (obj: ObjectWithLength) => boolean;
    isInvitonIframe: () => boolean;
    toNumber: (obj: any, defaultValue?: number) => number;
    autoDetectLanguage: () => string;
    populateInstance: (args: any, instance: any, skipProperties?: Array<string>) => void;
    ensureViewportTag: () => void;
    getElementForRole: (context: InviDomFindable, role: string) => InviDom;
    getRenderTemplate: (instance: TicketFormInstance) => string;
    getLocalCurrencyText: (price: number, language: string, currencySymbolISO: string) => string;
    getLocalCurrencySymbol: (instance: TicketFormInstance, currencySymbolISO: string) => any;
    getErrorDialogTitle: (title: string) => string;
    getSuccessDialogTitle: (title: string) => string;
    getResource(resName: any, customResources: any, language: any): string;
    isReloadWindowError: (err: AjaxErrorLegacy) => boolean;
    getAjaxErrorMessage: (err: AjaxErrorLegacy, language: string) => string;
    raiseEvent: <T>(eventName: string, data?: T) => void;
    /**
     * Determines font awesome version
     */
    getFontAwesomeVersion: () => number;
    /**
     * Writes the error message after form submit results in error (either failed validation, or a server error)
     *
     * @param errArr Array of errors obtained during the form-read or for-submit operation
     */
    onValidationError: (errArr: Array<ReadCustomFieldFormError>, instance: TicketFormInstance, context: InviDom) => void;
    hasPlugins(instance: TicketFormInstance): boolean;
    getPluginInstance(plugin: TicketFormPluginArgs): TicketFormPlugin;
    isDebugMode(): boolean;
    getLastChangeTimestamp(): string;
    initPluginsFromResponse(instance: TicketFormInstance, data: TicketingResponse, callback: () => void): TicketFormPlugin;
    tryDeleteObjectProperty(obj: any, propName: string): void;
    handleCustomAssets: (tfInstance: TicketFormInstance, data: TicketingResponse, callback: () => void) => void;
    getDiscountAmount: (data: TicketingResponse, requestData: TicketingTicketDateProcessed[], aggregations: TicketNumberAggregation[], language: string) => number;
    initializeRecaptcha: (forceRefresh?: boolean, callback?: (token: string) => void) => void;
    getRecaptchaToken: (data: TicketingResponseBase, callback: (token: string) => void) => void;
    validateRecaptchaOnBackReload: () => void;
    loadScriptAsync: (args: LoadScriptAsyncArgs) => void;
    tryRaiseLoadingStartEvent: (args: TryRaiseLoadingEventArgs) => void;
    tryRaiseLoadingEndEvent: (args: TryRaiseLoadingEventArgs) => void;
    getBootstrapErrorMessage: (message: string) => string;
    getBootstrapSuccessMessage: (message: string) => string;
    getErrorMessage: (errMsg: string, renderMode: CustomFieldRenderMode) => string;
    navigateParentWindow: (redirUrl: string) => void;
    showSuccessMessageInline: (context: InviDom, instance: TicketFormInstance, message: string, title?: string) => void;
    showErrorMessage: (message: string, errorCaption?: string) => void;
    showErrorMessageInline: (context: InviDom, instance: TicketFormInstance, message: string) => void;
    findTicketDateById: (resp: TicketingResponseBase, id: number) => TicketingTicketDate;
    findTicketDateByTicketId: (resp: TicketingResponseBase, ticketId: number) => TicketingTicketDate;
    initLaddaButtonBinding: () => void;
    updateButtonPrice: (button: InviDom, data: TicketingResponse, totalPrice: number, language: string, showZeroPrice: boolean) => void;
    recalculatePopupPrice: (priceWithCurrency: string) => void;
    isDonation: (data: TicketingResponse, isDonation?: boolean) => boolean;
    determineCurrentDomain(clonedData: TicketingResponseBase, instance: TicketFormInstance): string;
    determineRegisterCaptionBase(currentElem: InviDom, instance: {
        submitButtonText?: string;
        getResource: (resKey: string) => string;
    }, totalOrderPrice: number, data: TicketingResponse): string;
    /**
     * Determines if registration label should be used instead of ticketing
     * @param data Current ticketing data
     */
    isRegistrationLabel: (data: TicketingResponse) => boolean;
    getButtonCaptionKey: (data: TicketingResponse, isDonation?: boolean) => string;
    replaceParametric: (template: string, instance: TicketFormInstance, replacer: (paramName: string) => string) => string;
};
interface HistoryStateChangeArgs {
    state: any;
    previousState: any;
    direction: string;
}
export let invitonHistory: {
    enabled: boolean;
    push: (state: any) => void;
    addHandler: (context: InviDom, handler: (data: HistoryStateChangeArgs) => any) => void;
    pop: () => void;
    removeCurrentState: (clearForward: any) => void;
    clearForward: () => void;
};

export interface invitonMemoryCache {
    getItem<T>(key: string): T;
    setItem<T>(key: string, value: T): void;
}

export interface FontloadDeterminator {
    getFontAwesomeVersion(): number;
}

export interface TemplateHelper {
    isFunctionalParameter(paramName: string): boolean;
    getFunctionParameterValue(paramName: string, methodsObj: any, args: any[]): string;
}

export interface TicketFormShoppingCartAccessor {
    getCurrentState(): TicketFormShoppingCartState;
    cartIsExpired(cartData?: TicketFormShoppingCartState): boolean;
    clearCart(): void;
    removeLookupId(lookupId: string): void;
}

export interface TicketFormAnalyticsInitArgs {
    FacebookPixelId?: number;
    GoogleAnalyticsId?: string;
}
export interface TicketFormAnalyticsTrackPurchaseArgs extends AnalyticsTrackPurchaseArgs {
    FacebookPixelId?: number;
    GoogleAnalyticsId?: string;
}

interface AnalyticsTrackPurchaseArgs {
    OrderId: number;
    TotalOrderPrice: number;
    CurrencyISO: string;
    Items: Array<AnalyticsTrackPurchaseItem>;
}
interface AnalyticsTrackPurchaseItem {
    TicketId: number;
    TicketDateId: number;
    TicketName: string;
    Price: number;
    Quantity: number;
}
interface AnalyticsInitArgs {
    PreventDoubleInit: boolean;
    FacebookSDK?: AnalyticsFacebookSdkSettings;
    GoogleAnalytics?: AnalyticsGoogleAnalyticsSettings;
    FacebookPixel?: AnalyticsFacebookPixelSettings;
}
interface AnalyticsFacebookSdkSettings {
    Enabled: boolean;
}
interface AnalyticsGoogleAnalyticsSettings {
    CustomLink?: string;
    TrackerId?: string;
    OtherTrackerId?: string;
    RequireEcommerce?: boolean;
}
interface AnalyticsFacebookPixelSettings {
    Id: number;
}


export interface ExpeditionMethodsHelper {
    checkPossibleExpedtions(ticketDateIds: number[], ticketingResponse: TicketingResponseBase): void;
    checkPossibleTicketExpedition(supportedExpeditionType: ExpeditionSupportedType, ticketDate: TicketingTicketDate): boolean;
}

export interface ReservationCountdownTimer {
    startReservationCounter(context: InviDom, instance: TicketFormInstance, cartState: TicketFormShoppingCartState, reservationExpiry: number, getResource: (key: string) => string): void;
    getCounterAndEmailConfirmTemplate(instance: TicketFormInstance, getResource: (key: string) => string, guestEmail: string): string;
}

export interface breakpointHandler {
    bindResizeHandler(): void;
    setBreakpoints(elem: Element): void;
}

export interface DatePickerRendererArgs {
    targetElement: HTMLElement;
    definition: DatePickerDefinition;
}
export interface DatePickerBindingArgs {
    inputElement: HTMLElement;
    closeOnChange?: boolean;
    definition: DatePickerDefinition;
}
export interface DatePickerDefinition {
    allowedDates?: Date[];
    getAllowedDates?: () => Date[];
    minDate?: Date;
    maxDate?: Date;
    submitString: string;
    language: string;
    highlightSelection?: boolean;
    selectedDate?: Date;
    monthSelector?: boolean;
    yearSelector?: boolean;
    onSubmit?: (date: Date) => void;
    onChanged?: (data: Date) => void;
}
export interface DatePickerHandle {
    setDate(date: Date): void;
    getDate(): Date;
}
export interface datePicker {
    bindToInput(args: DatePickerBindingArgs): void;
    render(args: DatePickerRendererArgs): DatePickerHandle;
    determineFormat(language: string): string;
}

export interface invitonAjaxFileUploadButton<T> {
    create<TResponseData>(elem: HTMLElement, args: ajaxFileUploadButtonArgs<TResponseData>): invitonAjaxFileUploadButton<TResponseData>;
}
export interface ajaxFileUploadButtonArgs<TResponseData> {
    formData: any;
    allowedTypes?: string;
    onSuccess?: (args?: ajaxFileUploadButtonSuccessArgs<TResponseData>) => void;
    onError?: (errArgs?: ajaxFileUploadButtonErrorArgs) => void;
    onSubmit?: (args?: ajaxFileUploadButtonOnSubmitArgs) => void;
    maxFileSize?: number;
    url: string;
    multiple?: boolean;
    dragDrop?: boolean;
    autoSubmit?: boolean;
    fileName?: string;
    maxFileCount?: number;
}
export interface ajaxFileUploadButtonSuccessArgs<T> {
    file: File;
    data: any;
    element: HTMLElement;
    response: T;
}
export interface ajaxFileUploadButtonErrorArgs {
    file: File;
    status: string;
    message: string;
    data: any;
    element: HTMLElement;
}
export interface ajaxFileUploadButtonOnSubmitArgs {
    file: File;
    element: HTMLElement;
    data: any;
}

interface ImageCropperInitArgs {
    container: string;
    language: string;
    imageCdnPath?: string;
    defaultSelectArr?: Array<number>;
    useDialogUtils?: boolean;
    strings?: ImageCropperResources;
    aspectRatio?: number;
    showDestinationSelector?: boolean;
    imageTarget?: 'default' | 'schedule';
    onBeginRequest: (args?: ImageCropperCallbackArgs) => void;
    onSuccess: (args?: ImageCropperCallbackArgs) => void;
    onError: (args?: ImageCropperCallbackArgs) => void;
}
interface ImageCropperShowArgs {
    element: HTMLElement;
    fileName: string;
}
interface ImageCropperResources {
    cropHeader: string;
    cropMessage: string;
    targetText: string;
    targetStandard: string;
    targetSchedule: string;
    buttonRotate: string;
    buttonCancel: string;
    buttonOK: string;
}
interface CropperData {
    /**
     * the offset left of the cropped area
     */
    x: number;
    /**
     * the offset top of the cropped area
     */
    y: number;
    /**
     * the width of the cropped area
     */
    width: number;
    /**
     * the height of the cropped area
     */
    height: number;
    /**
     * the rotated degrees of the image
     */
    rotate: number;
    /**
     * the scaling factor to apply on the abscissa of the image
     */
    scaleX: number;
    /**
     * the scaling factor to apply on the ordinate of the image
     */
    scaleY: number;
}


interface ImageCropperSelection extends CropperData {
    x2?: number;
    y2?: number;
}
interface ImageCropperCallbackArgs {
    elem: HTMLElement;
    fileName?: string;
    errorMessage?: string;
}


interface GetInputHtmlArgs {
    definition: CustomFieldDefinitionExtendedDTO;
    autofillMap?: ResolvedAutofillMap;
    language: string;
    additionalAttributes?: string;
    renderPlaceholder: boolean;
    placeholder?: string;
    inputClass?: string;
    ticketDateId?: number;
    observableAttribute?: string;
    defaultCountry?: string;
    fieldName?: string;
    renderLabel?: boolean;
    labelAsPlaceholder?: boolean;
    role?: string;
    tooltip?: string;
    maxLength?: number;
    selectPlaceholderHack: boolean;
    selectEmptyFirstRow: boolean;
    renderMode: CustomFieldRenderMode;
    materialMode: MaterialDesignMode;
}
/**
 * Obtains list of countries
 */
interface CountryData {
    id: string;
    twoLetters: string;
    text: string;
}

interface GetDefaultCountryArgs {
    defaultCountry?: string;
    language: string;
}

interface GroupedEventTermsCollection extends Array<GroupedEventTerms> {
    hasGDPR: boolean;
    hasMarketingConsent: boolean;
    sortItems(): void;
}
interface GroupedEventTermsCollection extends Array<GroupedEventTerms> {
    hasGDPR: boolean;
}
interface GroupedEventTerms {
    isSystemGroup: boolean;
    isMandatoryTermsGroup: boolean;
    mainGroupingKey: string;
    mandatory: boolean;
    type: EventTermsType;
    items: Array<TicketingDataEventTerms>;
}
interface TermsGrouping {
    groupingKey: string;
    isMandatoryGroup: boolean;
}

const enum inputType {
    radio = 0,
    checkbox = 1
}
interface inputArgs {
    value?: string;
    labelHtml: string;
    template: string;
    getResource: (key: string) => string;
    radioGroup?: string;
    uuid?: string;
    wrapCss?: string;
    inputCss?: string;
    labelCss?: string;
    type: inputType;
    mode?: CustomFieldRenderMode;
    materialMode: MaterialDesignMode;
    additionalInputAttributes?: {
        [index: string]: string;
    };
    additionalWrapAttributes?: {
        [index: string]: string;
    };
}
interface dropdownInputArgs {
    role?: string;
    options: dropdownInputOption[];
    label: string;
    subtitle?: string;
    mandatory?: boolean;
    renderMode?: CustomFieldRenderMode;
    materialMode?: MaterialDesignMode;
    inputClass: string;
}
interface dropdownInputOption {
    value: string;
    text: string;
    selected?: boolean;
}
interface textboxInputArgs {
    role?: string;
    label: string;
    subtitle?: string;
    mandatory?: boolean;
    type?: CustomFieldType;
    value?: string;
    renderMode?: CustomFieldRenderMode;
    materialMode?: MaterialDesignMode;
    inputClass: string;
}

export interface invitonLLAPI {
    isMaterialRenderMode(renderMode: CustomFieldRenderMode): boolean;
    readFormElement(elem: HTMLElement, index: number | string, itemObj: TicketDateReservationRequestItem, errArr: Array<ReadCustomFieldFormError>): void;
    unsuitableForMaterial(customField: CustomFieldDefinitionDTO, languageCode: string): boolean;
    getLocalizedStringValue(val: ILocalizedString, languageCode: string): string;
    /**
     * Returns possible default country based on the website location
     * @param args
     */
    getDefaultCountry(args: GetDefaultCountryArgs): string;
    getLabelledFieldInputHtml(args: GetFieldInputArgs): string;

    getCountryCodeArr(language: string): CountryData[];
    buildBasicCountryCodeArr(): Array<Array<string>>;
    /**
     * Obtains <option> tags for country selection
     * @param defaultCountry
     */
    getCountryCodeOptionsHtml(defaultCountry: string, language: string): string;
    /**
     * Generates HTML input based on given args
     * @param args
     */
    getInputHtml(args: GetInputHtmlArgs): string;
    /**
     * triggered after "check all" terms checkbox value changes
     */
    _onCheckAllTermsChanged(elem: HTMLElement): void;
    /**
     * Cancels pending TicketNumber reservation
     */
    cancelReservation(args: CancelReservationRequestArgs): void;
    /**
     * Checks if given order id is paid
     */
    orderIsPaid(args: OrderIsPaidRequestArgs): void;
    /**
     * Checks if ticketNumber already exists in DB
     */
    ticketNumberExists(args: TicketNumberExistsArgs): void;
    /**
     * Checks if given IDs are already loaded and cached locally
     */
    hasCachedTicketingData(args: HasCachedTicketingDataRequestArgs): boolean;
    /**
     * Puts given ticketing data to the local cache
     *
     * @param data TicketResponse data for caching, these will be picked up from the local cache instead of calling the API
     * @param cacheEventIds Determines if also event IDs should be cached
     */
    setTicketingData(data: TicketingResponse, cacheEventIds?: boolean): void;
    /**
     * Processes online payment request
     */
    processPaymentRequest(args: ProcessPaymentRequestArgs): void;
    /**
     * Processes FREE order
     */
    processFreeOrder(args: ProcessFreeOrderRequestArgs): void;
    /**
     * Apply promo code to one of the tickets represented by their lookup IDs
     */
    applyPromoCode(args: PromoCodeApplyRequestArgs): void;
    /**
     * Reverts promo code application for given LookupId
     */
    revertApplyPromoCode(args: PromoCodeApplyRevertRequestArgs): void;
    /**
     * Obtains custom fields and additional required data for ticketing render
     */
    getCachedTicketingData(args: GetTicketingDataRequestArgsBase): TicketingResponse;
    /**
     * Obtains custom fields and additional required data for ticketing render
     */
    getTicketingData(args: GetTicketingDataRequestArgs): void;
    /**
     * Obtains URL for ticketingData webservice call
     * @param args
     */
    getTicketingDataApiUrl(args: GetTicketingDataRequestArgs, apiEndpoint: string): string;
    showErrorMessage(message: string): void;
    /**
     * Determines if registration label should be used instead of ticketing
     * @param data Current ticketing data
     */
    isRegistrationLabel(data: TicketingResponse): boolean;
    getAutofillRememberTemplate(): string;
    getFormWrapperTemplate(renderMode: CustomFieldRenderMode, bootstrapWrapInContainer: boolean): string;
    getFormWrapperInnerFormTemplate(): string;
    getFormTemplate(renderMode: CustomFieldRenderMode): string;
    getFormElementTemplate(renderMode: CustomFieldRenderMode): string;
    getRenderEngineCssClass(renderMode: CustomFieldRenderMode, strictness?: DesignStrictness, appendMaterial?: boolean): string;
    setRenderModeClass(context: InviDom, renderMode: CustomFieldRenderMode): void;
    setInvitonModeBreakpoint(elem: HTMLElement): void;
    renderCustomFields(args: RenderCustomFieldsArgs): void;
    bindFormEventHandlers(context: InviDom, renderMode: CustomFieldRenderMode, invitonDomain: string, language: string): void;
    bindShims(context: InviDom, mode: CustomFieldRenderMode): void;
    bindInputPlugins(context: InviDom, invitonDomain: string, language: string): void;
    bindSelectPlaceholder(context: InviDom): void;
    bindImageUpload(elem: HTMLElement, ticketDateId: number, invitonDomain: string): void;
    bindDocumentUpload(elem: HTMLElement, ticketDateId: number, invitonDomain: string): void;
    onAfterImageUploaded(elem: InviDom, fileName: string): void;
    readForm(args: ReadCustomFieldFormRequestArgs): ReadCustomFieldFormSuccessResponse | ReadCustomFieldFormErrorResponse;
    submitForm(args: any): void;
    performFormSubmit(args: PerformFormSubmitRequestArgs): void;
    setCustomFieldValue(context: InviDom | HTMLElement | string, customField: CustomFieldDefinitionDTO, value: any): void;
    validateElement(elem: HTMLElement): ElementValidationResult;
    readTicketNumbers(): string[];
    templates: {
        form: string;
        formWrapper: string;
        formElement: string;
        radioButton: string;
        checkbox: string;
        formWrapperInnerForm: string;
        autofillRemember: string;
    }
    onRequestBegin(): void;
    onRequestComplete(): void;
    termsRenderer: {
        getMainGroupingKey(eventTerm: TicketingDataEventTerms): TermsGrouping;
        getTermsGroup(groupedTerms: GroupedEventTermsCollection, eventTerm: TicketingDataEventTerms, termsGrouping: TermsGrouping): GroupedEventTerms;
        getAgreeWord(termsGroup: GroupedEventTerms): string;
        getWithWord(termsGroup: GroupedEventTerms): string;
        buildIAgreePreffix(termsGroup: GroupedEventTerms, termsSettings: TicketFormTermsSettings): string;
        getTermsHtml(args: RenderCustomFieldsArgs): string;

    }
    inputUtils: {
        getInputHtml(args: inputArgs): string;
        getDropdownHtml(args: dropdownInputArgs): string;
        getTextInputHtml(args: textboxInputArgs): string;
    }
}

export interface TicketFormCartItemRenderArgs {
    args: any;
    getResource: (key: string) => string;
    cartSettings: TicketFormCartRenderArgs;
    item: TicketFormShoppingCartItem;
    templates: TicketFormCartTemplates;
    currencyISO: string;
    language: string;
    lookupId: string;
    price: number;
    hasImage: boolean;
    hasQuantity: boolean;
    hasRemoveButton: boolean;
    hasPrice: boolean;
}
export interface TicketFormCartContentsDialogArgs {
    getResource: (key: string) => string;
    cartSettings: TicketFormCartRenderArgs;
    ticketFormInstance: TicketFormInstance;
    titleHtml: string;
    messageHtml: string;
    render(modalRootElem: InviDom): void;
    buttons: dialogButton[];
    onButtonClicked: (buttonId: string, modalContentsElem: InviDom) => boolean;
}
export interface TicketFormCartRenderHelper {
    getTemplates(settings: TicketFormCartRenderArgs): TicketFormCartTemplates;
    getImageUrl(item: TicketFormShoppingCartItem): string;
    renderPaymentForm(args: TicketFormCartPaymentFormRenderArgs): void;
    getCartItemHtml(args: TicketFormCartItemRenderArgs): string;
    startCountDown(renderTarget: InviDom, onExpired: () => void): void;
    getCountdownOverlayTemplate(ticketFormInstance: TicketFormInstance, getResource: (key: string) => string): string;
    showCartContentsDialog(args: TicketFormCartContentsDialogArgs): void;
}

export interface TicketFormCartContentsDefaultRenderer extends TicketFormCartContentsRenderer {
    render(args: TicketFormCartContentsRenderArgs): void;
}

export interface TicketFormShoppingCartIconDefaultRenderer {
    render(args: TicketFormCartRenderIconExtendedArgs): void;
}

export interface TicketFormCartItemAddedDefaultRenderer extends TicketFormCartItemAddedRenderer {
    getHtml(args: TicketFormShoppingCartAddRequest): string;
    getInnerHtml(args: TicketFormShoppingCartAddRequest): string;
}

export interface NoTicketRenderHelper {
    renderNoTicketsMessage(targetElem: InviDom, data: TicketingResponseBase, getResource: (resKey: string) => string): void;
    getNoTicketsMessageHtml(data: TicketingResponseBase, getResource: (resKey: string) => string): string;
}

interface _ticketFormUtilsInner {
    bindForm(): void;
    submitForm(): void;
}
interface _ticketFormInitializerInner {
    /**
     * Code-way to render form (no attributes needed). Renders form based on the parameters provided
     *
     * @param args Parameters based on which the form should be rendered
     */
    renderForm(args: TicketFormRenderArgs): void;
    /**
     * Initializes ticketForm for given element, this includes data load and for render
     */
    initElement(args: InitTicketFormArgs): void;
    /**
     * Initializes all ticketForm forms found on the document
     *
     * @param args
     */
    initDocumentForms(args: PreInitArgs): void;
}
export interface ticketFormUtilsFactory {
    createInstance(args: any): _ticketFormUtilsInner;
    createInitializer(args: any): _ticketFormInitializerInner;
}

export interface TicketSelectorRenderArgsBase extends TicketFormInitArgs {
    /**
     * Determines if elemnt blocking animation should be performed. Don't turn off unless there's a reason to
     */
    blockElem?: boolean;
    /**
     * Target element where the ticket selector will be rendered
     * @category Mandatory properties
     */
    targetElement: HTMLElement;
    /**
     * Button that triggers the popup open process
     * @category Mandatory properties
     */
    popupOpenButton?: HTMLElement | HTMLElement[];
    /**
     * Config object of the ticket selector widget
     * @category Commonly used properties
     */
    ticketSelector?: TicketSelectorRenderSettings;
    /**
     *
     */
    accessPassword?: string;
    /**
     *
     */
    passwordToken?: string;
}
export const enum TicketSelectorType {
    Input = "input",
    Select = "select",
    NumericPicker = "numericPicker"
}
/**
 * Grouping ruleset
 */
export const enum TicketSelectorGrouping {
    /**
     * No grouping is applied
     */
    none = "none",
    /**
     * Tickets are grouped by the ticket name. This means that if there are multiple tickets with the same name, only the one with lowest price is enabled until it is sold-out
     */
    ticketName = "ticketName"
}
export const enum TicketSelectorSaleGroupingStrategy {
    minPrice = "minPrice",
    lowestDate = "lowestDate",
    highestDate = "highestDate"
}
export const enum TicketSelectorSaleGroupingResolution {
    grayOut = "grayOut",
    hide = "hide"
}
export interface TicketSelectorSelectionUpdatedArgs {
    totalPrice: number;
    selected: TicketSelectorRendererSelectedArgs;
}
export interface TicketSelectorRenderSettings {
    /**
     * Determines if all selected tickets within accordion are collected or just the ones falling within its context
     */
    accordionSelectionMode?: 'allItems' | 'grouped';
    /**
     * Determines if single submit control is rendered or inside each accordion item
     */
    accordionSubmitRenderMode?: 'eachItem' | 'single';
    /**
     * Callback event method raised when ticket is sold-out. returns HTML string that should be placed in the ticket section informing the user that this particular ticket is sold out.
     * Alternatively it can return blank string so that sold ticket is not rendered at all
     * @event
     */
    onSoldOut?(): string;
    /**
     * Custom accordion item body builder
     * @param item
     */
    accordionItemBuilder?(item: TicketByCaptionGrouping, htmlForDataset: string): string;
    /**
     * Custom date to string convertor. When using, keep in mind, that the value of UTC time is in fact the local time of the event venue
     */
    dateToString?(dte: Date, includeTime: boolean): string;
    /**
     * Determines if ticket count is selected by using the HTML select dropdown or a numeric HTML input element
     */
    ticketCountSelector?: TicketSelectorType;
    /**
     * Determines if Event's start time should be rendered in the ticket
     */
    showStartTime?: boolean;
    /** @hidden */
    summaryType?: string;
    /**
     * Determines if tooltip is rendered on the purchase button. Leave true unless there is a good reason to as this informs the less technically skilled buyer that he/she has to select the ticket count at first
     */
    renderTooltip?: boolean;
    /**
     * Determines if shopping cart font awesome icon is appended if FA available to the submit button
     */
    autoIcon?: boolean;
    /**
     * Determines flooring logic for the renderer
     */
    flooring?: TicketStartTimeFlooring;
    /**
     * Custom sort order specification. Value is either an array of property names from the {@link TicketingTicketDate} object or a custom sort function
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [10500],
             *   targetElement: document.getElementById('invitonApiWrap'),
     *   ticketSelector: {
     *    //sortOrder: ['NameLocalized', 'EventId'] -- other possible approach
     *      sortOrder: (a, b) {
     *          if(a.NameLocalized < b.NameLocalized) { return -1; }
     *          if(a.NameLocalized > b.NameLocalized) { return 1; }
     *          return 0;
     *      }
     *   }
            * })
     * ```
     */
    sortOrder?(a: any, b: any): number | string[];
    /**
     * Custom renderer. Allows to hook completly custom renderer so that whole process is completly customized
     */
    renderer?: ITicketSelectorRenderer;
    /**
     * Callback event method raised once the ticket selector loads ticketing data from the server. Ability to intercept the data and make modifications
     * @event
     * @param renderer Current renderer instance, could be stored into variable
     * @param renderArgs Data for the ticket selector renderer
     * @param renderer Renderer instance
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [10500],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   ticketSelector: {
     *      onTicketSelectorDataLoaded: function(ticketingResponse) {
     *          console.log(ticketingResponse);
     *      }
     *   }
            * })
     * ```
     */
    postProcessTicketingData?(data: TicketingResponse, renderArgs?: ITicketSelectorRendererRenderArgs, renderer?: ITicketSelectorRenderer): void;
    /**
     * executed before the ticket selector is rendered.
     * @event
     * @param renderArgs Data for the ticket selector renderer
     * @param renderer Renderer instance
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [10500],
     *   targetElement: document.getElementById('invitonApiWrap'),
     *   ticketSelector: {
     *      onTicketSelectorRendered: function(renderArgs, renderer) {
     *          console.log(renderArgs);
     *          console.log(renderer);
     *      }
     *   }
            * })
     * ```
     */
    onBeforeTicketSelectorRender?(renderArgs: ITicketSelectorRendererRenderArgs, renderer: ITicketSelectorRenderer, ticketingData: TicketingResponse): boolean;
    /**
     * with ability to post-process data once loaded
     * @event
     * @param renderer Current renderer instance, could be stored into variable
     *
     * @example <caption>Sample usage</caption>
     *
     *
     * ```js
     * invitonApi('ticketSelector', 'renderForIds', {
     *   eventIds: [10500],
             *   targetElement: document.getElementById('invitonApiWrap'),
     *   ticketSelector: {
     *      onTicketSelectorRendered: function(renderer) {
     *          alert('Howdy user, it seems like you are ready to buy some tickets');
     *      }
     *   }
            * })
     * ```
     */
    onTicketSelectorRendered?(renderer: ITicketSelectorRenderer): void;
    /**
    * Callback event method raised once error occurred during ticket selector widget render.
    * @event
    * @param statusText Text of the status
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [10500],
         *   targetElement: document.getElementById('invitonApiWrap'),
    *   ticketSelector: {
    *      onTicketSelectorRenderError: function(err) {
    *          alert('Failed due to ' + err.responseText + ' with Inviton err code of ' + err.invitonCode);
    *      }
    *   }
        * })
    * ```
    */
    onTicketSelectorRenderError?(err: AjaxErrorLegacy): void;
    /**
    * Callback event method raised once error occurred during ticket selector widget render.
    * @event
    * @param statusText Text of the status
    *
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * invitonApi('ticketSelector', 'renderForIds', {
    *   eventIds: [10500],
     *   targetElement: document.getElementById('invitonApiWrap'),
    *   ticketSelector: {
    *      onSelectionUpdated: function(args) {
    *          alert('New order amount is ' + args.totalPrice);
    *      }
    *   }
    * })
    * ```
    */
    onSelectionUpdated?(args: TicketSelectorSelectionUpdatedArgs): void;
    /**
     * Custom template set of the ticket selector widget
     */
    templates?: TicketSelectorTemplates;
    /**
     * Custom popup title when renderTarget is set to any of popups
     */
    popupTitle?: string;
    /**
     * Determines if after ticket type selection the form is rendered either inline [default] or inside a popup, popupForm indicates that ticket selector is inline while form is in popup
     */
    renderTarget?: 'inline' | 'popup' | 'popupForm';
    /**
     * Provides ability to group tickets into one. Effectively allowing start of selling next type of ticket only after the first one is sold out
     */
    groupBy?: TicketSelectorGrouping;
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
     *         getBodyInfo: (ticketItem, ticketingResponse) {
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
    methods?: any;
    /**
     * Specifies what determines the grouping order when GroupBy is specified
     */
    saleGroupingStrategy?: TicketSelectorSaleGroupingStrategy;
    /**
     * Determines how to deal with grouped items
     */
    saleGroupingResolution?: TicketSelectorSaleGroupingResolution;
    /**
     * If true, only 1 piece of 1 ticket type is selectable
     */
    singleSelectMode?: boolean;
    /**
     * Custom grouping logic for the initial renderer, specify "none" to disable grouping
     */
    renderGrouping?: (data: TicketingResponse) => TicketRenderCustomGrouping[];
    /**
     * Determines if time selector is always hidden in Calendar render mode
     */
    hideCalendarModeTimeSelector?: boolean;
    /**
     * Once back button is hit on the order form, this switch determines if the selected ticket counts are all reset to zero or not
     */
    resetOnBackButton?: boolean;
    /**
     * Enforces display type despite being set in the Event config
     */
    displayType?: TicketSelectorDisplayType;
}
export interface TicketSelectorRenderSettingsApiAccessor {
    ticketForm: TicketFormInstance;
}
export const enum TicketSelectorDisplayType {
    default = "default",
    calendar = "calendar"
}
export interface ticketSelectorRenderDataArgs extends TicketSelectorRenderArgsBase {
    data: TicketingResponse;
}
export interface TicketSelectorRenderIdsArgs extends TicketSelectorRenderArgsBase {
    /**
     * Array of TicketDateIds, less commonly used than the eventIds property
     * @category Mandatory properties
     */
    ticketDateIds?: Array<number>;
    /**
     * Array of EventIds for which the ticket selector widget should be rendered
     * @category Mandatory properties
     */
    eventIds?: Array<number>;
    /**
     * TODO: no sure if necessery
     */
    data?: TicketingResponse;
}
export interface ITicketSelectorRenderer {
    instance: TicketFormInstance;
    render: (args: ITicketSelectorRendererRenderArgs) => void;
}
export interface ITicketSelectorRendererRenderArgs {
    targetElement: HTMLElement;
    data: TicketingResponse;
    rendererArgs?: TicketSelectorRenderIdsArgs;
}
export interface TicketSelectorRendererSelectedItem {
    count: number;
    ticketDateId: number;
}
export interface TicketSelectorRendererSelectedArgs {
    items: Array<TicketSelectorRendererSelectedItem>;
    donation: number;
    totalPrice: number;
    totalCount: number;
}
export interface TicketByCaptionGrouping {
    name: string;
    ticketDates: Array<TicketingTicketDate>;
}
export interface TicketByDateGrouping {
    startTime: Date;
    ticketDates: Array<TicketingTicketDate>;
}
export interface TicketRenderCustomGrouping {
    name: string;
    ticketIds: Array<number>;
    ticketDateIds: Array<number>;
}
export const enum TicketStartTimeFlooring {
    FullDate = 0,
    Day = 1
}
export interface TicketSelectorTemplates {
    body: string;
    itemBody: string;
    ticketName: string;
    ticketDescription: string;
    ticketCount: string;
    ticketPrice: string;
    remaining: string;
    startTime: string;
    soldOut: string;
    inactive: string;
    ticketCountSelect: string;
    ticketCountInput: string;
    calendarWrap: string;
    selectTime: string;
    selectTimeButton: string;
    submitButton: string;
    vatInfo: string;
    securedByLogos: string;
    miniDateSelectorWrap: string;
    miniDateSelectorItem: string;
}

export interface DateLocalizationUtils {
    getFormatted: (dte: Date, day: "numeric" | "2-digit" | undefined, month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined, year?: "numeric" | "2-digit" | undefined) => string;
}

export interface dropdownModernRenderArgs {
    targetElement: HTMLElement;
    definition: dropdownModernDefinition;
}
export interface dropdownModernDefinition {
    items: Array<dropdownModernItem>;
    submitString: string;
    onClose?: (context: InviDom) => void;
    onSubmit?: (context: InviDom) => void;
    onRender?: void;
    dropmicId: string | number;
    showOnRender?: boolean;
    resultSelector: string;
}
export interface dropdownModernItem {
    innerHtml: string;
}
export interface dropdownModern {
    render(args: dropdownModernRenderArgs): void;
    setDropdownWrapHtml(args: dropdownModernRenderArgs): void;
    fillDropdown(args: dropdownModernRenderArgs): void;
}

export interface accordionRenderArgs {
    targetElement: HTMLElement;
    definition: accordionDefinition;
}
export interface accordionDefinition {
    cssClass?: string;
    items: Array<accordionSection>;
    accordionMode?: boolean;
    onHeaderClicked?: (args: accordionHeaderClickedResponse) => void;
}
export interface accordionSection {
    isOpen?: boolean;
    isCollapsible?: boolean;
    titleHtml: string;
    cssClass?: string;
    innerHtml: string;
}
export interface accordionSectionItem {
    cssClass?: string;
    innerHtml: string;
}
export interface accordionHeaderClickedResponse {
    willShow?: boolean;
    headerElem: InviDom;
    cancel: boolean;
}
export interface accordion {
    render(args: accordionRenderArgs): void;
    getAccordionHtml(args: accordionRenderArgs): string;
    bindAccordionScript(args: accordionRenderArgs): void;
}

interface ticketingDataRequestArgs {
    args: TicketSelectorRenderIdsArgs;
    onSuccess(data: TicketingResponse): void;
    onError?(err: AjaxErrorLegacy): void;
    renderArgs?: ITicketSelectorRendererRenderArgs;
    renderer?: ITicketSelectorRenderer;
}
export interface dataUtils {
    getTicketingDataArgs(r: ticketingDataRequestArgs): GetTicketingDataRequestArgs;
    getTicketDates(data: TicketingResponse): TicketingTicketDate[];
}

export interface BindTicketFormArgs {
    context: InviDom;
    data: TicketingResponse;
    selected: TicketSelectorRendererSelectedArgs;
    initArgs: TicketFormInstance;
    instance: TicketFormInstance;
    renderTarget: string;
    tickePopupTitle: string;
    randomId: number;
    autoScroll: boolean;
    onBackButton: () => void;
    accordionSubmitRenderMode: 'eachItem' | 'single';
    clearInputs(context: InviDom, data: TicketingResponse): void;
    getDonationValue(context: InviDom): number;
    getResource(key: string): string;
}

export interface TicketSelectorHelper {
    /**
     * Binds TicketForm
     * @param context
     * @param data
     * @param selected
     */
    bindTicketForm(args: BindTicketFormArgs): void;
    /**
     * Toggles wrap visibility
     * @param context Current context
     * @param selectorVisible If set, ticket selector will be visible
     * @param formVisible If set, ticketing form will be visible
     */
    toggleWrapVisibility(context: InviDom, selectorVisible: boolean, formVisible: boolean, renderTarget: string, accordionSubmitRenderMode: 'eachItem' | 'single'): void;
}

export interface TicketingResponseWithGroupingContext extends TicketingResponse {
    GroupingContext: TicketByCaptionGrouping;
}

interface SeatingRenderArgsBase extends TicketSelectorRenderArgsBase {
    seatingSettings?: SeatingRenderSettings;
}

export interface SeatingRenderDataArgs extends SeatingRenderArgsBase {
    data: SeatingEventData;
}
export interface SeatingRenderDataWithElemArrArgs extends SeatingRenderArgsBase {
    data: SeatingEventData;
    targetElementArr?: NodeList;
}
export interface SeatingRenderIdsArgs extends SeatingRenderArgsBase {
    ticketDateIds?: Array<number>;
    eventIds?: Array<number>;
}

export interface SeatingRenderSettings {
    onSoldOut?: () => string;
    dateToString?: (dte: Date) => string;
    cssClassRoot?: string;
    showSectorListOnImageMap?: boolean;
    showStartTime?: boolean;
    summaryType?: string;
    renderTooltip?: boolean;
    handleHistory?: boolean;
    useIscroll?: boolean;
    allScheduleOpen?: boolean;
    target: seatingSelectorTarget;
    uuid?: string;
    showFramePrice?: boolean;
    showFrameTicketName?: boolean;
    ensureViewport?: boolean;
    apiMode?: seatingSelectorApiMode;
    ticketType?: ticketType;
    renderer?: ISeatingRenderer;
    scheduleRenderer?: ISeatingScheduleRenderer;
    onDataLoaded?: (data: SeatingDataResponse) => void;
    onFormRendered?: (result: OperationResult) => void;
    onSeatingSectorsRendered?: (renderer: ISeatingRenderer) => void;
    onTicketSelectorRenderError?: (statusText: string) => void;
    onPosSelected?: (data: SeatingDataSelectedArgs) => void;
    onOnSiteSelected?: (data: SeatingDataSelectedArgs) => void;
    onSelectionCancelled?: () => void;
    templates?: SeatingTemplates;
    scheduleGroupingKey?: SeatingScheduleGrouping;
}
export interface SeatingDataSelectedArgs {
    selectedData: SeatingReservationData;
    formData?: ReadCustomFieldFormSuccessResponse;
}
export const enum SeatingScheduleGrouping {
    venueName = "venueName",
    venueCity = "venueCity",
    eventName = "eventName"
}
export const enum ticketType {
    Online = 1,
    OnSite = 2,
    OnHold = 4,
    Aggregated = 8,
    PromoterOnly = 16,
    Reservation = 32,
    POS = 64,
    Wristband = 128
}
export const enum seatingSelectorTarget {
    targetElemenet = 0,
    bodyFixed = 1,
    popupSelector = 2,
    popupSectorMap = 3,
    popupSchedule = 4,
    popupWhole = 5
}
export const enum seatingSelectorApiMode {
    standard = 0,
    pos = 1,
    onSite = 2
}
export interface ISeatingRenderer {
    getUUID: () => string;
    getTemplates: () => SeatingTemplates;
    render: (args: ISeatingRendererRenderArgs) => void;
}
export interface ISeatingScheduleRenderer {
    render: (args: ISeatingScheduleRendererRenderArgs) => void;
}
interface SeatingRenderSettingsApiAccessor {
    ticketForm: TicketFormInstance;
}
interface ISeatingRendererRenderArgs {
    targetElement: HTMLElement;
    data: SeatingEventData;
}
interface ISeatingScheduleRendererRenderArgs {
    targetElement: HTMLElement;
    data: SeatingDataResponse;
}
export interface seatingRenderDataArgs extends SeatingRenderArgsBase {
    data: SeatingEventData;
}
export interface seatingRenderDataWithElemArrArgs extends SeatingRenderArgsBase {
    data: SeatingEventData;
    targetElementArr?: NodeList;
}
export interface seatingRenderIdsArgs extends SeatingRenderArgsBase {
    ticketDateIds?: Array<number>;
    eventIds?: Array<number>;
}
export interface SeatingMapData {
    Id: number;
    EventId: number;
    EventName: string;
    ImageUrl: string;
    StartTime: string;
    CurrencyISO: string;
    ShowRemaining: boolean;
    ImageMappingJSON: string;
    FacebookPixelId?: number;
    GoogleAnalyticsId?: string;
    Mode: SeatingMapMode;
    Venue: SeatingMapVenue;
    CheapestTicket: SeatingMapDataCheapestTicket;
    Sectors: Array<SeatingSectorModel>;
    DiscountDefinitions?: Array<TicketDiscountDefinition>;
}
export interface SeatingMapDataCheapestTicket {
    Id: number;
    Price: number;
    VAT: number;
}
export interface SeatingMapVenue {
    Name: string;
    NameFull: string;
    City: string;
    Latitude: string;
    Longitude: string;
}
export const enum SeatingMapMode {
    Simple = 0,
    ImageMap = 1
}
export interface SeatingSectorModel {
    Id: number;
    Name: string;
    EventDateId: number;
    RemainingCount: number;
    TicketDateIds: Array<number>;
    ImageUrls: Array<string>;
}
export interface SeatingDataResponse {
    TicketingData: TicketingResponse;
    SeatingDataArr: Array<SeatingMapData>;
}
export interface SeatingEventData {
    TicketingData: TicketingResponse;
    SeatingData: SeatingMapData;
}

export interface SeatingTemplates {
    imageMapBody: string;
    seatingSelectionWrap: string;
    seatingSelectionPopup: string;
    seatingSectorImageMap: string;
    seatingSectorSectorListWrap: string;
    seatingSectorSectorListItem: string;
    seatingPopupConfirmButton: string;
    scheduleTitle: string;
    popupHeaderWithSubtitle: string;
}
export interface seatingDefaultRenderer extends SeatingRenderSettings, ISeatingRenderer {
    getUUID(): string;
    getTemplates(): SeatingTemplates;
    render(args: ISeatingRendererRenderArgs): void;
}
export interface seatingScheduleDefaultRenderer extends ISeatingScheduleRenderer {
    uuid: string;
    render(args: ISeatingScheduleRendererRenderArgs): void;
    templates: SeatingTemplates;
}
export const enum seatingMapSectorType {
    seating = 0,
    ticketWithoutSeating = 1
}

export interface SwiperConnectorLoadResult {
    loaded: boolean;
}
export interface SwiperConnector {
    ensureLoaded(callback: (resultArgs: SwiperConnectorLoadResult) => void): void;
}

export interface TicketFormMerchPriceMinMax {
    min: number;
    max: number;
}
export interface TicketFormMerchTemplates {
    merchItemListingWrap: string;
    merchItemImageOverlay: string;
    merchListWrap: string;
    merchDeatil: string;
    merchImageSwiper: string;
    merchImageSwiperInner: string;
    submitButton: string;
}
export interface TicketFormMerchTemplatesHelper {
    getTemplates(settings: TicketSelectorRenderIdsArgs): TicketFormMerchTemplates;
}
export interface TicketFormMerchHelper {
    getChildTickets(item: TicketingTicketDate, data: TicketingResponse): TicketingTicketDate[];
    getItemRemainingCount(item: TicketingTicketDate, data: TicketingResponse): number;
    getItemPriceMinMax(item: TicketingTicketDate, data: TicketingResponse): TicketFormMerchPriceMinMax;
    getItemPriceRangeText(item: TicketingTicketDate, data: TicketingResponse, language: string, getResource: (resKey: any) => string): string;
}
export type DetailRenderType = 'popup' | 'inline';
export interface TicketFormMerchItemRendererRenderArgs {
    targetElement: HTMLElement;
    data: TicketingResponse;
    templates: TicketFormMerchTemplates;
    initArgs: TicketSelectorRenderIdsArgs;
    detailRenderTagret: DetailRenderType;
    language: string;
    itemId: number;
    getResource: (resKey: any) => string;
    onRenderComplete?: () => void;
}
interface TicketFormMerchDropdownOperationData {
    attributeUUID: string;
    index: number;
    value: string;
}
export interface TicketFormMerchItemDetailRenderer extends TicketSelectorRenderSettings {
    api: TicketSelectorRenderSettingsApiAccessor;
    getResourceCorrect(key: string, args: TicketSelectorRenderIdsArgs): string;
    bindSwiper(): void;
    bindCart(args: TicketFormMerchItemRendererRenderArgs): void;
    bindAttributedSale(args: TicketFormMerchItemRendererRenderArgs): void;
    getContextAttributeDropdowns(context: InviDom): InviDom;
    parseDropdownRole(dropdownElem: InviDom): TicketFormMerchDropdownOperationData;
    getSelectedAttributes(context: InviDom, stopIndex?: number): TicketEshopAssignedAttribute[];
    getChildTickets(args: TicketFormMerchItemRendererRenderArgs, rootItem: TicketingTicketDate): TicketingTicketDate[];
    onAttributedValueChanged(sender: InviDom, context: InviDom, args: TicketFormMerchItemRendererRenderArgs, rootItem: TicketingTicketDate): void;
    getAttributeSelectedTicket(context: InviDom, args: TicketFormMerchItemRendererRenderArgs, rootItem: TicketingTicketDate): TicketingTicketDate;
    getSelected(context: InviDom, args: TicketFormMerchItemRendererRenderArgs, ticketDateId: number, count: number): TicketSelectorRendererSelectedArgs;
    isFullPopupTarget(args: TicketFormMerchItemRendererRenderArgs): boolean;
    handleFullPopupTarget(args: TicketFormMerchItemRendererRenderArgs): void;
    render(args: TicketFormMerchItemRendererRenderArgs): void;
    hasAttributedSale(item: TicketingTicketDate): boolean;
    getRenderMode(args: TicketFormMerchItemRendererRenderArgs): CustomFieldRenderMode;
    getMaterialMode(args: TicketFormMerchItemRendererRenderArgs): MaterialDesignMode;
    getItemParameter(paramName: string, item: TicketingTicketDate, args: TicketFormMerchItemRendererRenderArgs): string;
    getItemAttributes(item: TicketingTicketDate, args: TicketFormMerchItemRendererRenderArgs): "" | "<div class=\"inv-merchitem-attributeroot\" data-inv-role=\"inv-merchitem-attributeroot\"></div>";
    getSubmitButton(args: TicketFormMerchItemRendererRenderArgs, item: TicketingTicketDate): string;
    getSwiperHtml(item: TicketingTicketDate, args: TicketFormMerchItemRendererRenderArgs): string;
    getImagesListHtml(item: TicketingTicketDate, args: TicketFormMerchItemRendererRenderArgs): string;
    getImageHtml(imageUrl: string, args: TicketFormMerchItemRendererRenderArgs): string;
}
interface TicketFormMerchListRendererRenderArgs {
    targetElement: HTMLElement;
    data: TicketingResponse;
    templates: TicketFormMerchTemplates;
    initArgs: TicketFormMerchRendererArgs;
    detailRenderTagret: DetailRenderType;
    language: string;
    getResource: (resKey: any) => string;
}
export interface TicketFormMerchListRenderer extends TicketSelectorRenderSettings {
    api: TicketSelectorRenderSettingsApiAccessor;
    getResourceCorrect(key: string, args: TicketSelectorRenderIdsArgs): string;
    getLanguage(args: TicketSelectorRenderIdsArgs): string;
    getSelected(context: InviDom, data: TicketingResponse, ticketDateId: number): TicketSelectorRendererSelectedArgs;
    render(args: TicketFormMerchListRendererRenderArgs): void;
    isFullPopupTarget(args: TicketFormMerchListRendererRenderArgs): boolean;
    handleFullPopupTarget(args: TicketFormMerchListRendererRenderArgs, formArgs: BindTicketFormArgs): void;
    bindCart(args: TicketFormMerchListRendererRenderArgs): void;
    bindClicks(args: TicketFormMerchListRendererRenderArgs): void;
    itemClicked(itemId: number, isOnSale: number, args: TicketFormMerchListRendererRenderArgs): void;
    getItemPriceRangeText(item: TicketingTicketDate, args: TicketFormMerchListRendererRenderArgs): string;
    getItemParameter(paramName: string, item: TicketingTicketDate, args: TicketFormMerchListRendererRenderArgs): string;
    getImageUrl(item: TicketingTicketDate): string;
    getImageOverlay(args: TicketFormMerchListRendererRenderArgs): string;
}

export interface TicketFormMerchRendererArgs extends TicketSelectorRenderIdsArgs {
    merchSettings?: MerchSettings;
}
interface MerchSettings {
    itemId?: number;
    detailRenderTarget?: DetailRenderType;
}
export interface TicketFormMerchRenderer {
    getLanguage(args: TicketSelectorRenderIdsArgs): string;
    /**
    * Renders product detail
    * @param args
    * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * ((i, n, v, l, t, o, m) {
    *   if (!i['InvitonApiObject']) {
    *     var cmdQueue=[],internalApi={showLoading:function(e){var n="";t(e,t){n+='<div class="'+e+'">'+(t?"</div>":"")}t("holdon-content"),t("sk-rect");for(var a=1;a<6;a++)t("rect"+a,!0);n+="</div></div>";var i=e.length?e:[e];for(a=0;a<i.length;a++){var o=document.createElement("div");o.setAttribute("class","holdon-white holdon-overlay holdon-element"),o.innerHTML=n,i[a].appendChild(o)}},pushCommand:function(e,t,n){null!=n&&(n.targetElement||n.targetElementArr)&&0!=n.blockElem&&internalApi.showLoading(n.targetElementArr||n.targetElement),cmdQueue.push([e,t,n])},getQueue:function(){return cmdQueue}},getCacheDate=function(){var e=new Date,t=e.getMinutes();return 1==Math.abs(t%2)&&(e=new Date(e.getTime()-6e4)),e.setSeconds(0),e.setMilliseconds(0),e.getTime()};i.InvitonApiObject=internalApi,o=n.createElement("style"),o.innerHTML=".holdon-overlay{position:absolute;left:0;top:0;bottom:0;right:0;background:#000;background:rgba(0,0,0,.48);z-index:999;cursor:wait}.holdon-content{width:50px;height:57px;position:absolute;top:50%;left:50%;margin:-21px 0 0 -25px}.sk-rect{width:50px;height:40px;text-align:center;font-size:10px}.sk-rect>div{background-color:#b3b3b3;height:100%;width:6px;display:inline-block;-webkit-animation:sk-rect-anim 1.2s infinite ease-in-out;animation:sk-rect-anim 1.2s infinite ease-in-out;margin-left:2px}.sk-rect .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rect .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rect .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rect .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rect-anim{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-rect-anim{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.holdon-white.holdon-overlay{background:rgba(255,255,255,.9)}.holdon-white.holdon-overlay .sk-rect>div{background-color:#cecece}",n.head.appendChild(o),i[t]=function(e,t,n){internalApi.pushCommand(e,t,n)},o=n.createElement(v),m=n.getElementsByTagName(v)[0],o.async=1,o.src=l+"/v-"+getCacheDate()+".js",m.parentNode.insertBefore(o,m);
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
    renderMerchItemDetail(args: TicketFormMerchRendererArgs): void;
    /**
     * Reders product list
     * @param args
     * @example <caption>Sample usage</caption>
    *
    *
    * ```js
    * ((i, n, v, l, t, o, m) {
    *   if (!i['InvitonApiObject']) {
    *     var cmdQueue=[],internalApi={showLoading:function(e){var n="";t(e,t){n+='<div class="'+e+'">'+(t?"</div>":"")}t("holdon-content"),t("sk-rect");for(var a=1;a<6;a++)t("rect"+a,!0);n+="</div></div>";var i=e.length?e:[e];for(a=0;a<i.length;a++){var o=document.createElement("div");o.setAttribute("class","holdon-white holdon-overlay holdon-element"),o.innerHTML=n,i[a].appendChild(o)}},pushCommand:function(e,t,n){null!=n&&(n.targetElement||n.targetElementArr)&&0!=n.blockElem&&internalApi.showLoading(n.targetElementArr||n.targetElement),cmdQueue.push([e,t,n])},getQueue:function(){return cmdQueue}},getCacheDate=function(){var e=new Date,t=e.getMinutes();return 1==Math.abs(t%2)&&(e=new Date(e.getTime()-6e4)),e.setSeconds(0),e.setMilliseconds(0),e.getTime()};i.InvitonApiObject=internalApi,o=n.createElement("style"),o.innerHTML=".holdon-overlay{position:absolute;left:0;top:0;bottom:0;right:0;background:#000;background:rgba(0,0,0,.48);z-index:999;cursor:wait}.holdon-content{width:50px;height:57px;position:absolute;top:50%;left:50%;margin:-21px 0 0 -25px}.sk-rect{width:50px;height:40px;text-align:center;font-size:10px}.sk-rect>div{background-color:#b3b3b3;height:100%;width:6px;display:inline-block;-webkit-animation:sk-rect-anim 1.2s infinite ease-in-out;animation:sk-rect-anim 1.2s infinite ease-in-out;margin-left:2px}.sk-rect .rect2{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-rect .rect3{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-rect .rect4{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-rect .rect5{-webkit-animation-delay:-.8s;animation-delay:-.8s}@-webkit-keyframes sk-rect-anim{0%,100%,40%{-webkit-transform:scaleY(.4)}20%{-webkit-transform:scaleY(1)}}@keyframes sk-rect-anim{0%,100%,40%{transform:scaleY(.4);-webkit-transform:scaleY(.4)}20%{transform:scaleY(1);-webkit-transform:scaleY(1)}}.holdon-white.holdon-overlay{background:rgba(255,255,255,.9)}.holdon-white.holdon-overlay .sk-rect>div{background-color:#cecece}",n.head.appendChild(o),i[t]=function(e,t,n){internalApi.pushCommand(e,t,n)},o=n.createElement(v),m=n.getElementsByTagName(v)[0],o.async=1,o.src=l+"/v-"+getCacheDate()+".js",m.parentNode.insertBefore(o,m);
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
    renderMerchList(args: TicketFormMerchRendererArgs): void;
}

