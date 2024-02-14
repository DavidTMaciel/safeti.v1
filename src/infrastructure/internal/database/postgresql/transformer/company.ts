import { CollaboratorEntity } from "../../../../../domain/entity/collaborator";
import { CompanyEntity } from "../../../../../domain/entity/company"
import { CompanyModel } from "../model/company"
import { toCollaboratorEntity, toCollaboratorModel } from "./collaborator"

function toCompanyModel(e: CompanyEntity): CompanyModel {
    return new CompanyModel(e.companyID, e.name, e.cnpj, [], e.createdAt, e.updatedAt);
}


function toCompanyEntity(m: CompanyModel): CompanyEntity{
    return new CompanyEntity(m.companyID, m.name,m.cnpj,m.createdAt,m.updatedAt)
}


function toCompanyByCollaboratorEntity(m: CompanyModel): CompanyEntity | null{
    if (!m) return null
    return new CompanyEntity(m.companyID, m.name,m.cnpj,m.createdAt,m.updatedAt)
}

export{
    toCompanyEntity,
    toCompanyModel,
    toCompanyByCollaboratorEntity
}