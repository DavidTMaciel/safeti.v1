import { Request, Response } from "express"
import { CreateCompanyUseCaseRequest, DeleteCompanyByIDUseCaseRequest, ListCompanyByIDUseCaseRequest, UpdateCompanyByIDUseCaseRequest } from "../../domain/usecase/ucio/company"
import { CreateCompanyUseCaseValidate, DeleteCompanyUseCaseValidate, ListCompanyByIDUseCaseValidate, UpdateCompanyUseCaseValidate } from "../../infrastructure/provider/validate/company"
import { CreateCompanyUseCaseRepository, DeleteCompanyByIDUsecaseRepository, ListCompanyByIDUseCaseRepository, ListCompanyUseCaseRepository, UpdateCompanyUseCaseRepository } from "../../infrastructure/provider/repository/company"
import { CreateCompanyUseCase, DeleteCompanyByIdUseCase, ListCompanyByIDUseCase, ListCompanyUseCase, UpdateCompanyUseCase } from "../../domain/usecase/company"
import { SuccessResponse } from "../response/response"

class CreateCompanyController {
    async createCompany(req: Request, res: Response): Promise<void> {
        const { name, cnpj } = req.body

        const ucReq = new CreateCompanyUseCaseRequest(name, cnpj)

        const validate = new CreateCompanyUseCaseValidate()
        const repository = new CreateCompanyUseCaseRepository()
        const usecase = new CreateCompanyUseCase(repository, validate)

        const ucRes = await usecase.createCompany(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class ListCompanyController {
    async listCompany(req: Request, res: Response): Promise<void> {

        const repository = new ListCompanyUseCaseRepository()
        const usecase = new ListCompanyUseCase(repository)

        const ucRes = await usecase.listCompany()

        new SuccessResponse().success(res, ucRes)
    }
}

class ListCompanyByIDController {
    async listCompanyByID(req: Request, res: Response): Promise<void> {
        const { companyID } = req.body

        const ucReq = new ListCompanyByIDUseCaseRequest(companyID)

        const validate = new ListCompanyByIDUseCaseValidate()
        const repository = new ListCompanyByIDUseCaseRepository()
        const usecase = new ListCompanyByIDUseCase(repository, validate)

        const ucRes = await usecase.listCompanyByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class UpdateCompanyController {
    async updateCompany(req: Request, res: Response): Promise<void> {
        const { companyID,name, cnpj } = req.body

        const ucReq = new UpdateCompanyByIDUseCaseRequest(companyID, name, cnpj)

        const validate = new UpdateCompanyUseCaseValidate()
        const repository = new UpdateCompanyUseCaseRepository()
        const usecase = new UpdateCompanyUseCase(repository, validate)

        const ucRes = await usecase.updateCompany(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

class DeleteCompanyController {
    async deleteCompany(req: Request, res: Response): Promise<void> {
        const { companyID } = req.body

        const ucReq = new DeleteCompanyByIDUseCaseRequest(companyID)

        const validate = new DeleteCompanyUseCaseValidate()
        const repository = new DeleteCompanyByIDUsecaseRepository()
        const usecase = new DeleteCompanyByIdUseCase(repository, validate)

        const ucRes = await usecase.deleteCompanyByID(ucReq)

        new SuccessResponse().success(res, ucRes)
    }
}

export {
    CreateCompanyController,
    ListCompanyController,
    ListCompanyByIDController,
    UpdateCompanyController,
    DeleteCompanyController
}