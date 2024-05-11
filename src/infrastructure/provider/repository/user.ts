import { UserEntity } from "../../../domain/entity/user";
import { CreateUserUseCaseRepositoryInterface, UpdateUserUseCaseRepositoryInterface } from "../../../domain/usecase/repository/user"
import { createUser, getUserByUserID, updateUser } from "../../internal/database/postgresql/user";

class CreateUserUseCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(user: UserEntity): Promise<UserEntity> {
        return await createUser(user)
    }
}

class UpdateUserUseCaseRepository implements UpdateUserUseCaseRepositoryInterface {
    async getUserByUserID(userID: number): Promise<UserEntity | null> {
        return await getUserByUserID(userID)
    }
    async updateUser(user: UserEntity): Promise<void> {
        return await updateUser(user)
    }

}
export {
    CreateUserUseCaseRepository,
    UpdateUserUseCaseRepository
}