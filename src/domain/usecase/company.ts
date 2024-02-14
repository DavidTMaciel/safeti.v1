import { CompanyEntity } from "../entity/company"
import { TAG_INTERNAL_SERVER_ERROR, InternalServerError, PreconditionError, TAG_PRE_CONDITION_ERROR } from "../entity/error"
import { CreateCompanyUseCaseRepositoryInterface, DeleteCompanyUseCaseRepositoryInterface, ListCompanyByIDUseCaseRepositoryInterface, ListCompanyUseCaseRepositoryInterface, UpdateCompanyUseCaseRepositoryInterface } from "./repository/company"
import { CreateCompanyUseCaseRequest, CreateCompanyUseCaseResponse, DeleteCompanyByIDUseCaseRequest, DeleteCompanyByIDUseCaseResponse, ListCompanyByIDUseCaseRequest, ListCompanyByIDUseCaseResponse, ListCompanyUseCaseResponse, UpdateCompanyByIDUseCaseRequest, UpdateCompanyByIDUseCaseResponse } from "./ucio/company"
import { CreateCompanyUseCaseValidateInterface, DeleteCompanyUseCaseValidateInterface, ListCompanyByIDUseCaseValidateInterface, UpdateCompanyUseCaseValidateInterface } from "./validate/company"

class CreateCompanyUseCase {
    public repository: CreateCompanyUseCaseRepositoryInterface
    public validate: CreateCompanyUseCaseValidateInterface

    constructor(repository: CreateCompanyUseCaseRepositoryInterface, validate: CreateCompanyUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async createCompany(req: CreateCompanyUseCaseRequest): Promise<CreateCompanyUseCaseResponse> {
        try {
            const messageError = await this.validate.createCompany(req)
            if (!messageError) {
                const now = new Date()
                const company = new CompanyEntity(null, req.name, req.cnpj, now, now)
                const data = await this.repository.createCompany(company)

                return new CreateCompanyUseCaseResponse(data, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new CreateCompanyUseCaseResponse(null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new CreateCompanyUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class ListCompanyUseCase {
    public repository: ListCompanyUseCaseRepositoryInterface

    constructor(repository: ListCompanyUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async listCompany(): Promise<ListCompanyUseCaseResponse> {
        try {
            const company = await this.repository.listCompany()

            return new ListCompanyUseCaseResponse(company,null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new ListCompanyUseCaseResponse(null,new InternalServerError(error.message))
        }
    }
}

class ListCompanyByIDUseCase {
    public repository: ListCompanyByIDUseCaseRepositoryInterface
    public validate: ListCompanyByIDUseCaseValidateInterface

    constructor(repository: ListCompanyByIDUseCaseRepositoryInterface, validate: ListCompanyByIDUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async listCompanyByID(req: ListCompanyByIDUseCaseRequest): Promise<ListCompanyByIDUseCaseResponse> {
        try {
            const messageError = await this.validate.listCompanyByID(req)

            if (!messageError) {
                const company = await this.repository.listCompanyByID(req.companyID)
                const collaborator = await this.repository.listCollaboratorByCompanyID(req.companyID)

                return new ListCompanyByIDUseCaseResponse(company,collaborator, null)
            }
            else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new ListCompanyByIDUseCaseResponse(null,null, new PreconditionError(messageError))
            }
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new ListCompanyByIDUseCaseResponse(null,null, new InternalServerError(error.message))
        }
    }
}

class UpdateCompanyUseCase {
    public repository: UpdateCompanyUseCaseRepositoryInterface
    public validate: UpdateCompanyUseCaseValidateInterface

    constructor(repository: UpdateCompanyUseCaseRepositoryInterface, validate: UpdateCompanyUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async updateCompany(req: UpdateCompanyByIDUseCaseRequest): Promise<UpdateCompanyByIDUseCaseResponse> {
        try {
            const messageError = await this.validate.updateCompany(req)

            if (!messageError) {
                const company = await this.repository.listCompanyByID(req.companyID)
                if (company) {
                    const now = new Date()
                    company.name = req.name
                    company.cnpj = req.cnpj
                    company.updatedAt = now

                    await this.repository.updateCompany(company)
                }
                return new UpdateCompanyByIDUseCaseResponse(null)
            } else {
                console.log(TAG_PRE_CONDITION_ERROR, messageError)
                return new UpdateCompanyByIDUseCaseResponse(new PreconditionError(messageError))
            }

        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new UpdateCompanyByIDUseCaseResponse(new InternalServerError(error.message))
        }
    }
}
class DeleteCompanyByIdUseCase {
    public repository: DeleteCompanyUseCaseRepositoryInterface
    public validate: DeleteCompanyUseCaseValidateInterface

    constructor(repository: DeleteCompanyUseCaseRepositoryInterface, validate: DeleteCompanyUseCaseValidateInterface) {
        this.repository = repository
        this.validate = validate
    }

    async deleteCompanyByID(req:DeleteCompanyByIDUseCaseRequest):Promise<DeleteCompanyByIDUseCaseResponse>{
        try{
            const messageError = await this.validate.deleteCompany(req)

            if(!messageError){
                await this.repository.deleteCompany(req.companyID)
            }
            return new DeleteCompanyByIDUseCaseResponse(null)

        }catch(error:any){
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new DeleteCompanyByIDUseCaseResponse(new InternalServerError(error.message))
        }
    }
}

export {
    CreateCompanyUseCase,
    ListCompanyUseCase,
    ListCompanyByIDUseCase,
    UpdateCompanyUseCase,
    DeleteCompanyByIdUseCase
}