import { CreateUserUseCaseRequest, UpdateUserUseCaseRequest } from "../../../domain/usecase/ucio/user"
import { CreateUserUseCaseValidateInterface, UpdateUserUseCaseValidateInterface } from "../../../domain/usecase/validate/user"
import { getUserByUserEmail, getUserByUserID } from "../../internal/database/postgresql/user"
import { checkNumberEmpty, checkStringEmpty } from "./validate"

class CreateUserUseCaseValidate implements CreateUserUseCaseValidateInterface {
    async createUser(req: CreateUserUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.name)) return 'O campo nome não pode ser vazio'
        if (checkStringEmpty(req.lastName)) return 'O campo sobrenome não pode estar vazio'
        if (checkStringEmpty(req.password)) return 'O campo senha não pode estar vazio'
        if (checkStringEmpty(req.email)) return 'O campo email não pode estar vazio'
        if (checkNumberEmpty(req.isAdmin)) return 'O campo admin não pode estar vazio'
        if (checkNumberEmpty(req.companyID)) return 'Obrigatorio ter ao menos uma empresa associada'
        if(await getUserByUserEmail(req.email)) return 'Já possui um usuario, com o email informado'
        return null
    }
}

class UpdateUserUseCaseValidate implements UpdateUserUseCaseValidateInterface{
   async updateUser(req: UpdateUserUseCaseRequest): Promise<string | null> {
    let user = await getUserByUserID(req.userID)
    if (req.email !== user?.email) {
        const existingUser = await getUserByUserEmail(req.email);
        if (existingUser && existingUser.userID !== req.userID) {
            return 'Já existe um usuário com o email informado';
        }
    }
        if(checkNumberEmpty(req.userID)) return 'Usuario não informado'
        if (checkStringEmpty(req.name)) return 'O campo nome não pode ser vazio'
        if (checkStringEmpty(req.lastName)) return 'O campo sobrenome não pode estar vazio'
        if (checkStringEmpty(req.password)) return 'O campo senha não pode estar vazio'
        if (checkStringEmpty(req.email)) return 'O campo email não pode estar vazio'
        if (checkNumberEmpty(req.isAdmin)) return 'O campo admin não pode estar vazio'
        if (checkNumberEmpty(req.companyID)) return 'Obrigatorio ter ao menos uma empresa associada'
        if(!user) return 'Usuario não encontrado'
        return null
    }
    
}

export{
    CreateUserUseCaseValidate,
    UpdateUserUseCaseValidate
}