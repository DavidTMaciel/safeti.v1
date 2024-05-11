import { UserEntity } from "../../entity/user";

interface CreateUserUseCaseRepositoryInterface {
    createUser(user: UserEntity): Promise<UserEntity>
}

interface UpdateUserUseCaseRepositoryInterface{
    getUserByUserID(userID: number): Promise<UserEntity | null>
    updateUser(user:UserEntity):Promise<void>
}

export{
    CreateUserUseCaseRepositoryInterface,
    UpdateUserUseCaseRepositoryInterface
}