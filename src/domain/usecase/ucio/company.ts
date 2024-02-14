import { CollaboratorEntity } from "../../entity/collaborator"
import { CompanyEntity } from "../../entity/company"
import { ErrorEntity } from "../../entity/error"

class CreateCompanyUseCaseRequest {
    public name: string
    public cnpj: string

    constructor(name: string, cnpj: string) {
        this.name = name
        this.cnpj = cnpj
    }
}

class CreateCompanyUseCaseResponse {
    public company: CompanyEntity | null
    public error: ErrorEntity | null

    constructor(company: CompanyEntity | null, error: ErrorEntity | null) {
        this.company = company
        this.error = error
    }
}

class ListCompanyUseCaseResponse {
    public company: CompanyEntity[] | null
    public error: ErrorEntity | null

    constructor(company: CompanyEntity[] | null, error: ErrorEntity | null) {
        this.company = company
        this.error = error
    }
}

class ListCompanyByIDUseCaseRequest {
    public companyID: number

    constructor(companyID: number) {
        this.companyID = companyID
    }
}

class ListCompanyByIDUseCaseResponse {
    public company: CompanyEntity | null
    public collaborator: CollaboratorEntity[] | null
    public error: ErrorEntity | null

    constructor(company: CompanyEntity| null, collaborator: CollaboratorEntity[] | null, error: ErrorEntity | null) {
        this.company = company
        this.collaborator = collaborator
        this.error = error
    }
}

class UpdateCompanyByIDUseCaseRequest {
    public companyID: number
    public name: string
    public cnpj: string

    constructor(companyID: number, name: string, cnpj: string) {
        this.companyID = companyID
        this.name = name
        this.cnpj = cnpj
    }
}

class UpdateCompanyByIDUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}

class DeleteCompanyByIDUseCaseRequest {
    public companyID: number

    constructor(companyID: number) {
        this.companyID = companyID
    }
}

class DeleteCompanyByIDUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}

export {
    CreateCompanyUseCaseRequest,
    CreateCompanyUseCaseResponse,
    ListCompanyUseCaseResponse,
    ListCompanyByIDUseCaseRequest,
    ListCompanyByIDUseCaseResponse,
    UpdateCompanyByIDUseCaseRequest,
    UpdateCompanyByIDUseCaseResponse,
    DeleteCompanyByIDUseCaseRequest,
    DeleteCompanyByIDUseCaseResponse
}