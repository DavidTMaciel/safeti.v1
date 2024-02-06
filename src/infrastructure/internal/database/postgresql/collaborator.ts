import { CollaboratorEntity } from "../../../../domain/entity/collaborator";
import { AppDataSource } from "./datasource";
import { CollaboratorModel } from "./model/collaborator";
import { toCollaboratorEntity, toCollaboratorModel } from "./transformer/collaborator";

async function createCollaborator(collaborator: CollaboratorEntity): Promise<CollaboratorEntity> {
    const model = toCollaboratorModel(collaborator)
    const repository = await AppDataSource.manager.save(model)
    return toCollaboratorEntity(repository)
}

async function updateCollaborator(collaborator: CollaboratorEntity): Promise<CollaboratorEntity> {
    const repository = AppDataSource.getRepository(CollaboratorModel)
    const model = toCollaboratorModel(collaborator)
    const result = await repository.save(model)
    return toCollaboratorEntity(result)
}

async function getCollaboratorByID(collaboratorID: number): Promise<CollaboratorEntity | null> {
    const repository = AppDataSource.getRepository(CollaboratorModel)
    const collaborator = await repository.findOne({ where: { ID: collaboratorID } })
    return collaborator ? toCollaboratorEntity(collaborator) : null
}

async function deleteCollaborator(collaboratorID: number): Promise<void> {
    const repository = AppDataSource.getRepository(CollaboratorModel)
    await repository.delete(collaboratorID)
}

export {
    createCollaborator,
    updateCollaborator,
    getCollaboratorByID,
    deleteCollaborator
}