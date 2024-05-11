import { TAG_INTERNAL_SERVER_ERROR, InternalServerError, PreconditionError, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { UserEntity } from "../entity/user"
import { CreateUserUseCaseRepositoryInterface, UpdateUserUseCaseRepositoryInterface } from "./repository/user"
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse } from "./ucio/user"
import { CreateUserUseCaseValidateInterface, UpdateUserUseCaseValidateInterface } from "./validate/user"

class CreateUserUseCase {
    public repository: CreateUserUseCaseRepositoryInterface
    public validate: CreateUserUseCaseValidateInterface

    constructor(repository: CreateUserUseCaseRepositoryInterface, validate: CreateUserUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try {
            const messageError = await this.validate.createUser(req)
            if (!messageError) {
                const now = new Date()
                const user = new UserEntity(null, req.name, req.lastName, req.email, req.password, req.isAdmin, req.companyID, now, now)
                const data = await this.repository.createUser(user)
                return new CreateUserUseCaseResponse(data, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new CreateUserUseCaseResponse(null, new PreconditionError(messageError))
            }

        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdateUserUseCase {
    public repository: UpdateUserUseCaseRepositoryInterface
    public validate: UpdateUserUseCaseValidateInterface

    constructor(repository: UpdateUserUseCaseRepositoryInterface, validate: UpdateUserUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async updateUser(req:UpdateUserUseCaseRequest):Promise<UpdateUserUseCaseResponse>{
        try{
            const messageError = await this.validate.updateUser(req)

            if(!messageError){
                const user = await this.repository.getUserByUserID(req.userID)
                let data = null
                if(user){
                    const now = new Date()
                    user.name =req.name
                    user.lastName=req.lastName
                    user.email =req.email
                    user.password = req.password
                    user.companyID= req.companyID
                    user.updatedAt= now

                    await this.repository.updateUser(user)
                }

                return new UpdateUserUseCaseResponse(null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new UpdateUserUseCaseResponse(new PreconditionError(messageError))
            }
        }catch(error:any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateUserUseCaseResponse(new InternalServerError(error.message))
        }
    }
}

export {
    CreateUserUseCase,
    UpdateUserUseCase
}