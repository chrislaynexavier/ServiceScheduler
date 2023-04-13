import { Client } from "../src/domain/entity/Client"

describe('Client', () => {
    let newClient : Client
    let name = "Chris"
    let CPF = "000.000.000-09"
    let birthDate = new Date("02/31/2000")

    beforeEach(() => {
      newClient = new Client(name,CPF,birthDate)
    })

    it('should have a client with correct name', () => {
      expect(newClient.name).toBe(name)
    })

    it('should have a client with correct CPF', () => {
      expect(newClient.CPF).toBe(CPF)
    })
      
    it('should have a client with correct birthDate', () => {
      expect(newClient.birthDate).toBe(birthDate)
    })
})
