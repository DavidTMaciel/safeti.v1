import { Request, Response } from "express"
import { CreateUserUseCaseRequest, UpdateUserUseCaseRequest } from "../../domain/usecase/ucio/user"
import { CreateUserUseCase, UpdateUserUseCase } from "../../domain/usecase/user"
import { CreateUserUseCaseRepository, UpdateUserUseCaseRepository } from "../../infrastructure/provider/repository/user"
import { CreateUserUseCaseValidate, UpdateUserUseCaseValidate } from "../../infrastructure/provider/validate/user"
import { SuccessResponse } from "../response/response"

class CreateUserController {
    async createUser(req: Request, res: Response): Promise<void> {
        const { name, lastName, email, password, isAdmin, companyID } = req.body

        const ucReq = new CreateUserUseCaseRequest(name, lastName, email, password, isAdmin, companyID)

        const repository = new CreateUserUseCaseRepository()
        const validate = new CreateUserUseCaseValidate()
        const usecase = new CreateUserUseCase(repository, validate)

        const ucRes = await usecase.createUser(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}


class UpdateUserController {
    async updateUser(req: Request, res: Response): Promise<void> {
        const { userID, name, lastName, email, password, isAdmin, companyID } = req.body

        const ucReq = new UpdateUserUseCaseRequest(userID,name, lastName, email, password, isAdmin, companyID)

        const repository = new UpdateUserUseCaseRepository()
        const validate = new UpdateUserUseCaseValidate()
        const usecase = new UpdateUserUseCase(repository, validate)

        const ucRes = await usecase.updateUser(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export{
    CreateUserController,
    UpdateUserController
}