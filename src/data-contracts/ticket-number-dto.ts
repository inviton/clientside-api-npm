import type { IDateWrapper } from "./date-wrapper"
import type { CustomFieldMapping } from "./enums/customFieldMapping"
import type { CustomFieldType } from "./enums/customFieldType"
import type { EventPersonRole } from "./enums/eventPersonRole"
import type { GenderNullable } from "./enums/genderNullable"
import type { TicketNumberDisplayFlags } from "./enums/ticketNumberDisplayFlags"
import type { TicketSource } from "./enums/ticketSource"
import type { TicketState } from "./enums/ticketState"
import { ILocalizedString } from "./ticket-form"

export interface TicketNumberDTO {
    Id: number
    TicketDateId: number
    CheckingId: string
    AllEntries: number
    LookupId: string
    TicketId: number
    NewImageUrl: string
    Email: string
    State: TicketState
    ValidFrom: IDateWrapper
    ValidTo: IDateWrapper
    ParentId: number
    DisplayFlags: TicketNumberDisplayFlags
    SeatingData: SeatingDataModel
    Guestlist: FreerideModel
    EntryCount: TicketNumberEntry[]
    Source: TicketSource
    CustomFields: CustomFieldDefinedValueDto[]
    Tags: TagModel[]
    SportValue: TicketNumberSportValueDTO
    Schedule: ScheduleModel
    Modified: boolean
    Added: boolean
    AlternateIds: AlternateIdModel[]
}

export interface SeatingDataModel {
    RowNum: string
    ColNum: number
    SectorName: string
}

export interface FreerideModel {
    FreerideDefinitionId: number
    Name: string
}

export interface TicketNumberEntry {
    AclItemId: number
    EntryCount: number
    Timestamp: IDateWrapper
}

export interface CustomFieldDefinedValueDto {
    DefinitionId: number
    MappingType: CustomFieldMapping
    Type: CustomFieldType
    FieldName: string
    FieldValue: string
}

export interface TagModel {
    TagId: number
    Name: string
    NameLocalized: ILocalizedString
}

export interface TicketNumberSportValueDTO {
    DefinitionId: number
    BirthDate: IDateWrapper
    Gender: GenderNullable
    Category: string
}

export interface ScheduleModel {
    Id: number
    EnforcedRole: EventPersonRole
    AboutLocalized: ILocalizedString
    AvailableFrom: IDateWrapper
    AvailableTo: IDateWrapper
}

export interface AlternateIdModel {
    CheckingId: string
}