import { CollaboratorEntity } from "./collaborator"

class CompanyEntity{
    public companyID: number | null
    public name : string
    public cnpj: string
    public createdAt: Date
    public updatedAt: Date

    constructor(companyID:number | null, name:string, cnpj:string,createdAt: Date, updatedAt:Date){
        this.companyID=companyID
        this.name=name
        this.cnpj=cnpj
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
}

export{
    CompanyEntity
}