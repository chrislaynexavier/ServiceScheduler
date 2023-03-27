
export class Provider {
    public name!: string
    public CPF!: string
    public birthDate: Date
    public specialty: string[] = []

    
    constructor(name: string, CPF: string, birthDate: Date, specialty: string){
        this.name = name
        this.CPF = CPF
        this.birthDate = birthDate
        this.specialty.push(specialty)
    }

    addSpecialty(newspecialty:string){
        this.specialty.push(newspecialty)
    }

}
