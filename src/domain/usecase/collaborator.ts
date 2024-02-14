import { CollaboratorEntity } from "../entity/collaborator"
import { TAG_PRE_CONDITION_ERROR, PreconditionError, InternalServerError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error"
import { CreateCollaboratorUseCaseRepositoryInterface, DeleteCollaboratorUseCaseRepositoryInterface, GetCollaboratorByIDUseCaseRepositoryInterface, UpdateCollaboratorUseCaseRepositoryInterface } from "./repository/collaborator"
import { CreateCollaboratorUseCaseRequest, CreateCollaboratorUseCaseResponse, DeleteCollaboratorUseCaseRequest, DeleteCollaboratorUseCaseResponse, GetCollaboratorByIDUseCaseRequest, GetCollaboratorByIDUseCaseResponse, UpdateCollaboratorUseCaseRequest, UpdateCollaboratorUseCaseResponse } from "./ucio/collaborator"
import { CreateCollaboratorUseCaseValidateInterface, DeleteCollaboratorUseCaseValidateInterface, GetCollaboratorByIDUseCaseValidateInterface, UpdateCollaboratorUseCaseValidateInterface } from "./validate/collaborator"


class CreateCollaboratorUseCase {
    public validate: CreateCollaboratorUseCaseValidateInterface
    public repository: CreateCollaboratorUseCaseRepositoryInterface

    constructor(validate: CreateCollaboratorUseCaseValidateInterface, repository: CreateCollaboratorUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async CreateCollaborator(req: CreateCollaboratorUseCaseRequest): Promise<CreateCollaboratorUseCaseResponse> {
        try {
            const messageError: any = await this.validate.createCollaborator(req)
            if (!messageError) {
                const now = new Date()
                const collaborator = new CollaboratorEntity(null, req.name, req.office, req.constructions, req.company, now, now)
                const data = await this.repository.createCollaborator(collaborator)

                return await new CreateCollaboratorUseCaseResponse(data, null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new CreateCollaboratorUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateCollaboratorUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdateCollaboratorUseCase {
    public validate: UpdateCollaboratorUseCaseValidateInterface
    public repository: UpdateCollaboratorUseCaseRepositoryInterface

    constructor(validate: UpdateCollaboratorUseCaseValidateInterface, repository: UpdateCollaboratorUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async updateCollaborator(req: UpdateCollaboratorUseCaseRequest): Promise<UpdateCollaboratorUseCaseResponse> {
        try {
            const messageError: any = await this.validate.updateCollaborator(req)

            if (!messageError) {
                const collaborator = await this.repository.getCollaboratorByID(req.ID)
                let data = null
                if (collaborator) {
                    const now = new Date()
                    collaborator.name = req.name
                    collaborator.office = req.office
                    collaborator.company = req.company
                    collaborator.constructions = req.constructions
                    collaborator.updatedAt = now

                    data = await this.repository.updateCollaborator(collaborator)
                }

                return await new UpdateCollaboratorUseCaseResponse(data, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new UpdateCollaboratorUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateCollaboratorUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class GetCollaboratorByIDUseCase {
    public validate: GetCollaboratorByIDUseCaseValidateInterface
    public repository: GetCollaboratorByIDUseCaseRepositoryInterface

    constructor(validate: GetCollaboratorByIDUseCaseValidateInterface, repository: GetCollaboratorByIDUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async getCollaboratorByID(req: GetCollaboratorByIDUseCaseRequest): Promise<GetCollaboratorByIDUseCaseResponse> {
        try {
            const messageError: any = await this.validate.getCollaboratorByID(req)

            if (!messageError) {
                const data = await this.repository.getCollaboratorByID(req.ID)
                return  new GetCollaboratorByIDUseCaseResponse(data, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new GetCollaboratorByIDUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new GetCollaboratorByIDUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class DeleteCollaboratorUseCase {
    public validate: DeleteCollaboratorUseCaseValidateInterface
    public repository: DeleteCollaboratorUseCaseRepositoryInterface

    constructor(validate: DeleteCollaboratorUseCaseValidateInterface, repository: DeleteCollaboratorUseCaseRepositoryInterface) {
        this.validate = validate
        this.repository = repository
    }

    async DeleteCollaboratorUseCase(req: DeleteCollaboratorUseCaseRequest): Promise<DeleteCollaboratorUseCaseResponse> {
        try {
            const messageError:any = await this.validate.deleteCollaborator(req)

            if(!messageError){
                const data = await this.repository.deleteCollaborator(req.ID)
                return new DeleteCollaboratorUseCaseResponse(null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new DeleteCollaboratorUseCaseResponse(new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new DeleteCollaboratorUseCaseResponse(new InternalServerError(error.message))
        }
    }
}

export{
    CreateCollaboratorUseCase,
    GetCollaboratorByIDUseCase,
    UpdateCollaboratorUseCase,
    DeleteCollaboratorUseCase
}