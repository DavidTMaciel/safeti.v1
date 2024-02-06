class CollaboratorEntity {
    public ID: number | null
    public name: string
    public office: string
    public constructions: string
    public company: string
    public createdAt: Date
    public updatedAt: Date

    constructor(ID: number | null, name: string, office: string, constructions: string, company: string, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.name = name
        this.office = office
        this.constructions = constructions
        this.company = company
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export { CollaboratorEntity }