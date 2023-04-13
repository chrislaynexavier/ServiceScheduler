import { EventSchedule } from "./Event"
import { Provider } from "./Provider"

export class Schedule {
    public provider!: Provider
    public events: EventSchedule[] = []

    constructor(provider: Provider){
        this.provider = provider
    }

    addEvent(event: EventSchedule){
        this.events.push(event)
    }
}
