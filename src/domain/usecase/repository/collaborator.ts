import { CollaboratorEntity } from "../../entity/collaborator";

interface CreateCollaboratorUseCaseRepositoryInterface {
    createCollaborator(metadata: CollaboratorEntity): Promise<CollaboratorEntity>
}

interface UpdateCollaboratorUseCaseRepositoryInterface {
    getCollaboratorByID(ID: number): Promise<CollaboratorEntity | null>
    updateCollaborator(metadata: CollaboratorEntity): Promise<CollaboratorEntity>
}

interface GetCollaboratorByIDUseCaseRepositoryInterface {
    getCollaboratorByID(ID: number): Promise<CollaboratorEntity | null>
}

interface DeleteCollaboratorUseCaseRepositoryInterface {
    deleteCollaborator(ID: number): Promise<void>
}

export {
    CreateCollaboratorUseCaseRepositoryInterface,
    UpdateCollaboratorUseCaseRepositoryInterface,
    GetCollaboratorByIDUseCaseRepositoryInterface,
    DeleteCollaboratorUseCaseRepositoryInterface
}