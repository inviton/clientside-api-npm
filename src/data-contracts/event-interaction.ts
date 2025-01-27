export interface EventInteractionsListArgs extends EventInteractionsArgsBase {
    eventId: number,
}

interface EventInteractionsArgsBase {
    blockElem?: boolean;
    language: string;
    materialDesign: boolean;
    resources?: EventInteractionResources;
    contextRoot: HTMLElement
    contextInteractionItem: HTMLElement
    contextInteractionTarget: HTMLElement
    templates?: EventInteractionTemplates
    onItemRendered?: () => any
    onQuestionAdded?: () => any
    showQuestions?: boolean
    showSurveys?: boolean
    serviceHost?: string
}

export interface EventInteractionResources {
    annonymous?: string;
    submit?: string;
    customAnswer?: string;
    surveyAlreadyFilled?: string;
    surveyNoActiveExists?: string;
    sectionQuestions?: string;
    sectionSurveys?: string;
    askYourQuestion?: string;
    askQuestionName?: string;
    askQuestionSubmit?: string;
    askQuestionSuccess?: string;
    askQuestionError?: string;
    surveySubmitError?: string;
}

export interface EventInteractionTemplates {
    interactionWrap?: string;
    surveySubmitButton?: string;
    radioButton?: string;
    surveyCustomAnswer?: string;
    interactionSwitchWrap?: string;
    interactionSwitch?: string;
    iconLike?: string;
    iconUser?: string;
    questionContainer?: string;
    surveyWrapInner?: string;
    questionWrap?: string;
    surveyWrap?: string;
    itemWrap?: string;
    itemHeader?: string;
    surveyItem?: string;
    questionItem?: string;
}
