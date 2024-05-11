import { CreateUserUseCaseRequest, UpdateUserUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseValidateInterface{
    createUser(req:CreateUserUseCaseRequest):Promise< string | null>
}

interface UpdateUserUseCaseValidateInterface{
    updateUser(req: UpdateUserUseCaseRequest):Promise<string | null>
}

export{
    CreateUserUseCaseValidateInterface,
    UpdateUserUseCaseValidateInterface
}