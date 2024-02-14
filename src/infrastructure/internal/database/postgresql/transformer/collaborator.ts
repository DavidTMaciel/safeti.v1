import { CollaboratorEntity } from "../../../../../domain/entity/collaborator"
import { CollaboratorModel } from "../model/collaborator"
import { toCompanyEntity, toCompanyModel } from "./company"


function toCollaboratorModel(e: CollaboratorEntity): CollaboratorModel {
    const companyModel = toCompanyModel(e.company)
    return new CollaboratorModel(e.ID, e.name, e.office, e.constructions, companyModel, e.createdAt, e.updatedAt)
}

function toCollaboratorEntity(m: CollaboratorModel): CollaboratorEntity {
    const companyEntity = toCompanyEntity(m.company)
    return new CollaboratorEntity(m.ID, m.name, m.office, m.constructions, companyEntity, m.createdAt, m.updatedAt)
}

export {
    toCollaboratorModel,
    toCollaboratorEntity
}