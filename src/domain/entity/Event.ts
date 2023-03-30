
export class EventSchedule{
    public CPFClient!: string
    public CPFProvider!:string
    public season!: Date

    constructor(CPFClient: string, CPFProvider: string, season: Date){
        this.CPFClient = CPFClient
        this.CPFProvider = CPFProvider
        this.season = season
    }
}
