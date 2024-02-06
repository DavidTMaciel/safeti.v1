import { CollaboratorEntity } from "../../../../../domain/entity/collaborator";
import { CollaboratorModel } from "../model/collaborator";


function toCollaboratorModel(e: CollaboratorEntity): CollaboratorModel {
    return new CollaboratorModel(e.ID, e.name, e.office, e.constructions, e.company, e.createdAt, e.updatedAt)
}

function toCollaboratorEntity(m: CollaboratorModel): CollaboratorEntity {
    return new CollaboratorEntity(m.ID, m.name, m.office, m.constructions, m.company, m.createdAt, m.updatedAt)
}

export {
    toCollaboratorModel,
    toCollaboratorEntity
}