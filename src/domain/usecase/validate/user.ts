import { CreateUserUseCaseRequest, GetUserUseCaseRequest, UpdateUserUseCaseRequest } from "../ucio/user"

interface CreateUserUseCaseValidateInterface{
    createUser(req:CreateUserUseCaseRequest):Promise< string | null>
}

interface UpdateUserUseCaseValidateInterface{
    updateUser(req: UpdateUserUseCaseRequest):Promise<string | null>
}
interface GetUserUseCaseValidateInterface{
    getUser(req: GetUserUseCaseRequest):Promise<string | null>
}

export{
    CreateUserUseCaseValidateInterface,
    UpdateUserUseCaseValidateInterface,
    GetUserUseCaseValidateInterface
}