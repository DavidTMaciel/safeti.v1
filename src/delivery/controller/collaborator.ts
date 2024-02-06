import { Request, Response } from "express";
import { CreateCollaboratorUseCaseRequest, CreateCollaboratorUseCaseResponse, DeleteCollaboratorUseCaseRequest, GetCollaboratorByIDUseCaseRequest, GetCollaboratorByIDUseCaseResponse, UpdateCollaboratorUseCaseRequest } from "../../domain/usecase/ucio/collaborator";
import { CreateCollaboratorUseCaseValidate, DeleteCollaboratorUseCaseValidate, GetCollaboratorByIDUseCaseValidate, UpdateCollaboratorUseCaseValidate } from "../../infrastructure/provider/validate/collaborator";
import { CreateCollaboratorUseCaseRepository, DeleteCollaboratorUseCaseRepository, GetCollaboratorByIDUseCaseRepository, UpdateCollaboratorUseCaseRepository } from "../../infrastructure/provider/repository/collaborator";
import { CreateCollaboratorUseCase, DeleteCollaboratorUseCase, GetCollaboratorByIDUseCase, UpdateCollaboratorUseCase } from "../../domain/usecase/collaborator";
import { SuccessResponse } from "../response/response";


class CreateCollaboratorController {
    async createCollaborator(req: Request, res: Response): Promise<void> {
        const { name, office, constructions, company } = req.body
        console.log(req.body)
        const ucReq = new CreateCollaboratorUseCaseRequest(name, office, constructions, company)
        const validate = new CreateCollaboratorUseCaseValidate()
        const repository = new CreateCollaboratorUseCaseRepository()
        const usecase = new CreateCollaboratorUseCase(validate, repository)

        const ucRes = await usecase.CreateCollaborator(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class UpdateCollaboratorController {
    async updateCollaborator(req: Request, res: Response): Promise<void> {
        const { ID, name, office, constructions, company } = req.body

        const ucReq = new UpdateCollaboratorUseCaseRequest(ID, name, office, constructions, company)
        const validate = new UpdateCollaboratorUseCaseValidate()
        const repository = new UpdateCollaboratorUseCaseRepository()
        const usecase = new UpdateCollaboratorUseCase(validate, repository)

        const ucRes = await usecase.updateCollaborator(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class GetCollaboratorByIDController {
    async getCollaboratorByID(req: Request, res: Response): Promise<void> {
        const { ID } = req.body

        const ucReq = new GetCollaboratorByIDUseCaseRequest(ID)
        const validate = new GetCollaboratorByIDUseCaseValidate()
        const repository = new GetCollaboratorByIDUseCaseRepository()
        const usecase = new GetCollaboratorByIDUseCase(validate, repository)

        const ucRes = await usecase.getCollaboratorByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class DeleteCollaboratorController {
    async deleteCollaborator(req: Request, res: Response): Promise<void> {
        const { ID } = req.body

        const ucReq = new DeleteCollaboratorUseCaseRequest(ID)
        const validate = new DeleteCollaboratorUseCaseValidate()
        const repository = new DeleteCollaboratorUseCaseRepository()
        const usecase = new DeleteCollaboratorUseCase(validate, repository)

        const ucRes = await usecase.DeleteCollaboratorUseCase(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {
    CreateCollaboratorController,
    DeleteCollaboratorController,
    GetCollaboratorByIDController,
    UpdateCollaboratorController
}