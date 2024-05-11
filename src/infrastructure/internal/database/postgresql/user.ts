import { UserEntity } from "../../../../domain/entity/user"
import { AppDataSource } from "./datasource"
import { UserModel } from "./model/user"
import { toUserEntity, toUserModel } from "./transformer/user"

async function createUser(e: UserEntity): Promise<UserEntity> {
    const model = toUserModel(e)
    const repository = await AppDataSource.manager.save(model)
    console.log(repository)
    return toUserEntity(repository)
}

async function getUserByUserEmail(email: string) :Promise<UserEntity | null>{
    const repository =  AppDataSource.getRepository(UserModel)
    const user = await repository.findOne({where:{email: email}})
    return user ? toUserEntity(user) : null
}

async function getUserByUserID(userID: number) :Promise<UserEntity | null>{
    const repository =  AppDataSource.getRepository(UserModel)
    const user = await repository.findOne({where:{userID: userID}})
    return user ? toUserEntity(user) : null
}

async function updateUser(data: UserEntity):Promise<void>{
    const repository = AppDataSource.getRepository(UserModel)
    const model = toUserModel(data)
    await repository.save(model)
}

export{
    createUser,
    getUserByUserEmail,
    updateUser,
    getUserByUserID
}