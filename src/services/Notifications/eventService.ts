import {IEventsService} from "./notificationService"
import {createNanoEvents} from "nanoevents"


export const eventService: IEventsService = {
    createEventEmitter<Events>() {
        return createNanoEvents<Events>()
    }
}
