import { EventSchedule } from "../src/domain/entity/Event"

describe('Event', () => {
    let newEvent: EventSchedule
    let CPFClient = "000.000.000-02"
    let CPFProvider = "000.000.000-03"
    let season = new Date(2023,2,5,8,30)

    beforeEach(() => {
        newEvent = new EventSchedule (CPFClient, CPFProvider,season)
    })

    it('should have a event with correct client cpf', () => {
        expect(newEvent.CPFClient).toBe(CPFClient)
      })
    
    it('should have a event with correct provider cpf', () => {
       expect(newEvent.CPFProvider).toBe(CPFProvider)
    })

    it('shuld have a event with correct season', () => {
        expect(newEvent.season).toBe(season)
    })

})
