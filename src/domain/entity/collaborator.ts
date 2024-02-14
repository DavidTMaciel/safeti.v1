import { CompanyEntity } from "./company"
class CollaboratorEntity {
    public ID: number | null
    public name: string
    public office: string
    public constructions: string
    public company: CompanyEntity
    public createdAt: Date
    public updatedAt: Date

    constructor(ID: number | null, name: string, office: string, constructions: string, companyID: CompanyEntity, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.name = name
        this.office = office
        this.constructions = constructions
        this.company = companyID
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export { CollaboratorEntity }