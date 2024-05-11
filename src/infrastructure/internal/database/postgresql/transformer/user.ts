import { UserEntity } from "../../../../../domain/entity/user"
import { UserModel } from "../model/user"

function toUserModel(e: UserEntity): UserModel {
    return new UserModel(e.userID, e.name, e.lastName, e.email, e.password, e.isAdmin, e.companyID, e.createdAt, e.updatedAt)
}

function toUserEntity(m: UserModel): UserEntity {
    return new UserEntity(m.userID, m.name, m.lastName, m.email, m.password, m.isAdmin, m.companyID, m.createdAt, m.updatedAt)
}

export {
    toUserModel,
    toUserEntity
}