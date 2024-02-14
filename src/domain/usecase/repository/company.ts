import { CollaboratorEntity } from "../../entity/collaborator"
import { CompanyEntity } from "../../entity/company"

interface CreateCompanyUseCaseRepositoryInterface {
    createCompany(metadata: CompanyEntity): Promise<CompanyEntity>
}

interface ListCompanyUseCaseRepositoryInterface {
    listCompany(): Promise<CompanyEntity[] | null>
    
}

interface ListCompanyByIDUseCaseRepositoryInterface {
    listCompanyByID(companyID: number): Promise<CompanyEntity | null>
    listCollaboratorByCompanyID(companyID: number):Promise<CollaboratorEntity[]| null>
}

interface UpdateCompanyUseCaseRepositoryInterface {
    listCompanyByID(companyID: number): Promise<CompanyEntity | null>
    updateCompany(metadata: CompanyEntity): Promise<void>
}

interface DeleteCompanyUseCaseRepositoryInterface {
    deleteCompany(companyID: number): Promise<void>
}

export {
    CreateCompanyUseCaseRepositoryInterface,
    ListCompanyUseCaseRepositoryInterface,
    ListCompanyByIDUseCaseRepositoryInterface,
    UpdateCompanyUseCaseRepositoryInterface,
    DeleteCompanyUseCaseRepositoryInterface
}