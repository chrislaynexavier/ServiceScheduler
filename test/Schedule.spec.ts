import { EventSchedule } from "../src/domain/entity/Event"
import { Provider } from "../src/domain/entity/Provider"
import { Schedule } from "../src/domain/entity/Schedule"

describe('Schedule', () => {
    let newSchedule : Schedule
    let provider : Provider
    let nameProvider = "Mariana"
    let CPFProvider = "000.000.000-08"
    let birthDate = new Date("02/29/2002")
    let specialty = "dermatologist doctor"
    let newEvent1: EventSchedule
    let CPFClient1 = "000.000.000-02"
    let season1 = new Date(2023,2,5,8,30)
    let newEvent2: EventSchedule
    let CPFClient2 = "000.000.000-01"

    beforeEach(() => {
        provider = new Provider (nameProvider, CPFProvider, birthDate, specialty)
        newSchedule = new Schedule(provider)
        newEvent1 = new EventSchedule (CPFClient1, CPFProvider, season1)
        newEvent2 = new EventSchedule (CPFClient2, CPFProvider, season1)
    })

    it('should have a schedule with correct provider', () => {
        expect(newSchedule.provider).toBe(provider)
    })

    it('should have a schedule with events', () => {
        newSchedule.addEvent(newEvent1)
        expect(newSchedule.events).toContain(newEvent1)
    })

    it('should not have events with same season', () => {
        newSchedule.addEvent(newEvent1)
        newSchedule.addEvent(newEvent2)
        expect(newSchedule.events).toContain(newEvent1)
        expect(newSchedule.events).not.toContain(newEvent2)
    })

    it('should not have two equal events', () => {
        newSchedule.addEvent(newEvent1)
        newSchedule.addEvent(newEvent1)
        expect(newSchedule.events).toContain(newEvent1)  //confirm how will be this test
    })

})
