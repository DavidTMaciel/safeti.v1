import { CreateCollaboratorUseCaseRequest, DeleteCollaboratorUseCaseRequest, GetCollaboratorByIDUseCaseRequest, UpdateCollaboratorUseCaseRequest } from "../ucio/collaborator";


interface CreateCollaboratorUseCaseValidateInterface {
    createCollaborator(req: CreateCollaboratorUseCaseRequest): Promise<string | null>
}

interface UpdateCollaboratorUseCaseValidateInterface {
    updateCollaborator(req: UpdateCollaboratorUseCaseRequest): Promise<string | null>
}

interface GetCollaboratorByIDUseCaseValidateInterface {
    getCollaboratorByID(req: GetCollaboratorByIDUseCaseRequest): Promise<string | null>
}

interface DeleteCollaboratorUseCaseValidateInterface {
    deleteCollaborator(req: DeleteCollaboratorUseCaseRequest): Promise<string | null>
}

export {
    CreateCollaboratorUseCaseValidateInterface,
    UpdateCollaboratorUseCaseValidateInterface,
    GetCollaboratorByIDUseCaseValidateInterface,
    DeleteCollaboratorUseCaseValidateInterface
}