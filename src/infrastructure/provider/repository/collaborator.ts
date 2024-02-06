import { CollaboratorEntity } from "../../../domain/entity/collaborator";
import { CreateCollaboratorUseCaseRepositoryInterface, DeleteCollaboratorUseCaseRepositoryInterface, GetCollaboratorByIDUseCaseRepositoryInterface, UpdateCollaboratorUseCaseRepositoryInterface } from "../../../domain/usecase/repository/collaborator";
import { createCollaborator, deleteCollaborator, getCollaboratorByID, updateCollaborator } from "../../internal/database/postgresql/collaborator";

class CreateCollaboratorUseCaseRepository implements CreateCollaboratorUseCaseRepositoryInterface {
    async createCollaborator(metadata: CollaboratorEntity): Promise<CollaboratorEntity> {
        return await createCollaborator(metadata)
    }
}

class UpdateCollaboratorUseCaseRepository implements UpdateCollaboratorUseCaseRepositoryInterface{
    async getCollaboratorByID(ID: number): Promise<CollaboratorEntity | null> {
        return await getCollaboratorByID(ID)
    }
    async updateCollaborator(metadata: CollaboratorEntity): Promise<CollaboratorEntity> {
        return await updateCollaborator(metadata)
    } 
}

class GetCollaboratorByIDUseCaseRepository implements GetCollaboratorByIDUseCaseRepositoryInterface{
    async getCollaboratorByID(ID: number): Promise<CollaboratorEntity | null> {
        return await getCollaboratorByID(ID)
    }
}

class DeleteCollaboratorUseCaseRepository implements DeleteCollaboratorUseCaseRepositoryInterface{
    async deleteCollaborator(ID: number): Promise<void> {
      return await deleteCollaborator(ID)
    }  
}

export{
    CreateCollaboratorUseCaseRepository,
    UpdateCollaboratorUseCaseRepository,
    GetCollaboratorByIDUseCaseRepository,
    DeleteCollaboratorUseCaseRepository
}