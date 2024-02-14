import { CreateCompanyUseCaseRequest, DeleteCompanyByIDUseCaseRequest, ListCompanyByIDUseCaseRequest, UpdateCompanyByIDUseCaseRequest } from "../../../domain/usecase/ucio/company"
import { CreateCompanyUseCaseValidateInterface, DeleteCompanyUseCaseValidateInterface, ListCompanyByIDUseCaseValidateInterface, UpdateCompanyUseCaseValidateInterface } from "../../../domain/usecase/validate/company"
import { checkNumberEmpty, checkStringEmpty } from "./validate"


class CreateCompanyUseCaseValidate implements CreateCompanyUseCaseValidateInterface {
    async createCompany(req: CreateCompanyUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.name)) return "O Nome não pode ser vazio"

        if (checkStringEmpty(req.cnpj)) return "O CNPJ não pode ser vazio"

        return null
    }
}

class ListCompanyByIDUseCaseValidate implements ListCompanyByIDUseCaseValidateInterface {
    async listCompanyByID(req: ListCompanyByIDUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.companyID)) return 'O identificador não pode ser vazio'

        return null
    }
}

class UpdateCompanyUseCaseValidate implements UpdateCompanyUseCaseValidateInterface {
    async updateCompany(req: UpdateCompanyByIDUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.companyID)) return 'O identificador não pode ser vazio'

        if (checkStringEmpty(req.name)) return "O Nome não pode ser vazio"

        if (checkStringEmpty(req.cnpj)) return "O CNPJ não pode ser vazio"

        return null
    }
}

class DeleteCompanyUseCaseValidate implements DeleteCompanyUseCaseValidateInterface {
    async deleteCompany(req: DeleteCompanyByIDUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.companyID)) return 'O identificador não pode ser vazio'

        return null
    }
}

export {
    CreateCompanyUseCaseValidate,
    ListCompanyByIDUseCaseValidate,
    UpdateCompanyUseCaseValidate,
    DeleteCompanyUseCaseValidate
}