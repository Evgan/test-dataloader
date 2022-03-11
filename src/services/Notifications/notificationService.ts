import {eventService} from "./eventService"

interface EventsMap {
    [event: string]: any
}
interface DefaultEvents extends EventsMap{
    [event: string]: (...arg:any) => void
}
export interface Unsubscribe {
    (): void
}
interface IEventsEmitter<Events extends EventsMap = DefaultEvents> {
    on<K extends keyof Events>(this: this, event: K, cb: Events[K]):Unsubscribe
    emit<K extends keyof Events>(
        this: this,
        event: K,
        ...arg: Parameters<Events[K]>
    ): void
}

export interface IEventsService<Events extends EventsMap = DefaultEvents> {
    createEventEmitter<Events>(): IEventsEmitter<Events>
}

interface Events {
    success: (message: string) => void
    warning: (message: string) => void
    error: (message: string) => void
}

export const notificationEventEmitter = eventService.createEventEmitter<Events>()

export const notificationService = {
    error(message: string) {
        notificationEventEmitter.emit('error', message)
    },
    warning(message: string) {
        notificationEventEmitter.emit('warning', message)
    },
    success(message: string) {
        notificationEventEmitter.emit('success', message)
    },
}


