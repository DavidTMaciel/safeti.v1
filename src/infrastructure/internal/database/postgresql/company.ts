import { CompanyEntity } from "../../../../domain/entity/company"
import { AppDataSource } from "./datasource"
import { CompanyModel } from "./model/company"
import { toCompanyByCollaboratorEntity, toCompanyEntity, toCompanyModel } from "./transformer/company"

async function createCompany(company: CompanyEntity): Promise<CompanyEntity> {
    const model = toCompanyModel(company)
    const repository = await AppDataSource.manager.save(model)
    return toCompanyEntity(repository)
}

async function listCompany(): Promise<CompanyEntity[] | null> {
    const repository = AppDataSource.getRepository(CompanyModel)
    const company: CompanyModel[] = await repository.find()
    return company ? company.map(company => toCompanyEntity(company)) : null

}

async function listCompanyByID(companyID: number): Promise<CompanyEntity | null> {
    const repository = AppDataSource.getRepository(CompanyModel)
    const company = await repository.findOne({ where: { companyID: companyID } })
    return company ? toCompanyByCollaboratorEntity(company) : null
}

async function updateCompany(data: CompanyEntity): Promise<void> {
    const repository = AppDataSource.getRepository(CompanyModel)
    const model = toCompanyModel(data)
    await repository.save(model)
}

async function deleteCompany(companyID: number): Promise<void> {
    const repository = AppDataSource.getRepository(CompanyModel)
    await repository.delete(companyID)
}

export {
    createCompany,
    listCompany,
    listCompanyByID,
    updateCompany,
    deleteCompany
}