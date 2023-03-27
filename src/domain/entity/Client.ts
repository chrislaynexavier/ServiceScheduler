
export class Client {
    public name!: string
    public CPF!: string
    public birthDate: Date
    
    constructor(name: string, CPF: string, birthDate: Date){
        this.name = name
        this.CPF = CPF
        this.birthDate = birthDate
    }

}
