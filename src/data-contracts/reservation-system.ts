import type { IDateWrapper } from "./date-wrapper";
export type ReservationSystemMode = 'reservationSystem';

export interface ReservationSystemApiArgs {
    mode?: ReservationSystemMode
    checkingId?: string
    showOnlyVenuesWithPurchasedTickes?: boolean
    eventId?: number,
    targetElement: HTMLElement
    language?: string
    customDomain?: string
    reservationCloseOffset?: number
    tokenStorageKey?: string
    customHeaderHtmlBuilder: (args: { data: ReservationSystemViewModel }) => string
    customDaySelectHtmlBuilder: () => string
    customEventsHeader?: string
    customReservedHeader?: string
    reinitRequested?: () => void
    onInitComplete?: () => void
    onDataLoadComplete: (args: { data: ReservationSystemViewModel }) => boolean
}

export interface ReservationSystemViewModel {
    EventId: number
    UserData: ReservationSystemUserModel
    MaxActiveReservations: number
    ReservationCloseOffset: number
    UserIsLogged: boolean
    UserTickets: ReservationSystemUserTicketModel[]
    SelectedItem: ReservationSystemEventModel
    Venues: ReservationSystemVenueModel[]
}

export interface ReservationSystemUserModel {
    TicketNumbers: ReservationTicketNumber[]
    Identifier: string
}

export interface ReservationTicketNumber {
    TicketNumberId: number
    CreditCount: number
    TicketId: number
    CheckingId: string
    TicketIdentifier: string
}

export interface ReservationSystemUserTicketModel {
    TicketDateId: number
    AclItemId: number
}

export interface ReservationSystemEventModel {
    TicketDateId: number
    TicketIdentifier: string
    Name: string
    Description: string
    Logo: string
    StartDate: IDateWrapper
    EndDate: IDateWrapper
    CreditCost: number
    TicketsRemaining: number
    EventDateId: number
}

export interface ReservationSystemVenueModel {
    Id: number
    Name: string
    LocationName: string
    Latitude: string
    Longitude: string
    Events: ReservationSystemEventModel[]
}