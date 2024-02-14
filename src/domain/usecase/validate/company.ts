import { CreateCompanyUseCaseRequest, DeleteCompanyByIDUseCaseRequest, ListCompanyByIDUseCaseRequest, UpdateCompanyByIDUseCaseRequest } from "../ucio/company";

interface CreateCompanyUseCaseValidateInterface {
    createCompany(req: CreateCompanyUseCaseRequest): Promise<string | null>
}

interface ListCompanyByIDUseCaseValidateInterface {
    listCompanyByID(req: ListCompanyByIDUseCaseRequest): Promise<string | null>
}

interface UpdateCompanyUseCaseValidateInterface {
    updateCompany(req: UpdateCompanyByIDUseCaseRequest): Promise<string | null>
}

interface DeleteCompanyUseCaseValidateInterface {
    deleteCompany(req: DeleteCompanyByIDUseCaseRequest): Promise<string | null>
}

export {
    CreateCompanyUseCaseValidateInterface,
    ListCompanyByIDUseCaseValidateInterface,
    UpdateCompanyUseCaseValidateInterface,
    DeleteCompanyUseCaseValidateInterface
}