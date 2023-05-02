import { EventSchedule } from "./Event"
import { Provider } from "./Provider"

export class Schedule {
    public provider!: Provider
    public events: EventSchedule[] = []

    constructor(provider: Provider){
        this.provider = provider
    }

    addEvent(newEvent: EventSchedule){
        const EqualEvent = this.events.find((event) => event.season === newEvent.season)
        if(!EqualEvent) {
            this.events.push(newEvent)
        }else{
            return EqualEvent
        }
    }
}
