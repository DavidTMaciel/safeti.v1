import { CollaboratorEntity } from "../../../domain/entity/collaborator"
import { CompanyEntity } from "../../../domain/entity/company"
import { CreateCompanyUseCaseRepositoryInterface, DeleteCompanyUseCaseRepositoryInterface, ListCompanyByIDUseCaseRepositoryInterface, ListCompanyUseCaseRepositoryInterface, UpdateCompanyUseCaseRepositoryInterface } from "../../../domain/usecase/repository/company"
import { getCollaboratorByCompanyID, getCollaboratorByID } from "../../internal/database/postgresql/collaborator"
import { createCompany, deleteCompany, listCompany, listCompanyByID, updateCompany } from "../../internal/database/postgresql/company"

class CreateCompanyUseCaseRepository implements CreateCompanyUseCaseRepositoryInterface {
    async createCompany(metadata: CompanyEntity): Promise<CompanyEntity> {
        return await createCompany(metadata)
    }
}

class ListCompanyUseCaseRepository implements ListCompanyUseCaseRepositoryInterface {
    async listCompany(): Promise<CompanyEntity[] | null> {
        return await listCompany()
    }
}

class ListCompanyByIDUseCaseRepository implements ListCompanyByIDUseCaseRepositoryInterface {
   async listCompanyByID(companyID: number): Promise<CompanyEntity | null> {
        return await listCompanyByID(companyID)
   }
    async listCollaboratorByCompanyID(companyID: number): Promise<CollaboratorEntity[] | null> {
        return await getCollaboratorByCompanyID(companyID)
    }
}

class UpdateCompanyUseCaseRepository implements UpdateCompanyUseCaseRepositoryInterface {
    async listCompanyByID(companyID: number): Promise<CompanyEntity | null> {
        return await listCompanyByID(companyID)
    }
    async updateCompany(metadata: CompanyEntity): Promise<void> {
        return await updateCompany(metadata)
    }
}

class DeleteCompanyByIDUsecaseRepository implements DeleteCompanyUseCaseRepositoryInterface {
    async deleteCompany(companyID: number): Promise<void> {
        return await deleteCompany(companyID)
    }
}

export {
    CreateCompanyUseCaseRepository,
    ListCompanyUseCaseRepository,
    UpdateCompanyUseCaseRepository,
    ListCompanyByIDUseCaseRepository,
    DeleteCompanyByIDUsecaseRepository
}