
import { Provider } from "../src/domain/entity/Provider"

describe('User', () => {
    let newProvider: Provider
    let name = "Mariana"
    let CPF = "000.000.000-08"
    let birthDate = new Date("02/29/2002")
    let specialty = "dermatologist doctor"

    beforeEach(() => {
      newProvider = new Provider(name, CPF, birthDate, specialty)
    })

    it('should have a provider with correct name', () => {
      expect(newProvider.name).toBe(name)
    })

    it('should have a provider with correct CPF', () => {
      expect(newProvider.CPF).toBe(CPF)
    })
      
    it('should have a provider with correct birthDate', () => {
      expect(newProvider.birthDate).toBe(birthDate)
    })

    it('should have a provider with correct specialty', () => {
      expect(newProvider.specialty).toContain(specialty)
    })

    it('should add a new specialty', () => {
      let newSpecialty = "gynecologist doctor"
      newProvider.addSpecialty(newSpecialty)
      expect(newProvider.specialty).toContain(newSpecialty)
    })
})
