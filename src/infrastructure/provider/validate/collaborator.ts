import { CreateCollaboratorUseCaseRequest } from "../../../domain/usecase/ucio/collaborator";
import { UpdateCollaboratorUseCaseRequest } from "../../../domain/usecase/ucio/collaborator";
import { GetCollaboratorByIDUseCaseRequest } from "../../../domain/usecase/ucio/collaborator";
import { DeleteCollaboratorUseCaseRequest } from "../../../domain/usecase/ucio/collaborator";
import { CreateCollaboratorUseCaseValidateInterface, DeleteCollaboratorUseCaseValidateInterface, GetCollaboratorByIDUseCaseValidateInterface, UpdateCollaboratorUseCaseValidateInterface } from "../../../domain/usecase/validate/collaborator";
import { checkEmpty, checkNumberEmpty, checkStringEmpty } from "./validate";

class CreateCollaboratorUseCaseValidate implements CreateCollaboratorUseCaseValidateInterface {
    async createCollaborator(req: CreateCollaboratorUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.name)) return "O Nome não pode ser vazio"

        if (checkEmpty(req.company)) return "A empresa não pode ser vazio"

        if (checkStringEmpty(req.constructions)) return "A Obra não pode ser vazia"

        if (checkStringEmpty(req.office)) return "A função não pode ser vazia"

        return null
    }
}

class UpdateCollaboratorUseCaseValidate implements UpdateCollaboratorUseCaseValidateInterface {
    async updateCollaborator(req: UpdateCollaboratorUseCaseRequest): Promise<string | null> {
        if (checkStringEmpty(req.name)) return "O Nome não pode ser vazio"

        if (checkEmpty(req.company)) return "A empresa não pode ser vazio"

        if (checkStringEmpty(req.constructions)) return "A Obra não pode ser vazia"

        if (checkStringEmpty(req.office)) return "A função não pode ser vazia"
        return null;
    }
}

class GetCollaboratorByIDUseCaseValidate implements GetCollaboratorByIDUseCaseValidateInterface {
    async getCollaboratorByID(req: GetCollaboratorByIDUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio'
        return null;
    }
}

class DeleteCollaboratorUseCaseValidate implements DeleteCollaboratorUseCaseValidateInterface {
    async deleteCollaborator(req: DeleteCollaboratorUseCaseRequest): Promise<string | null> {
        if (checkNumberEmpty(req.ID)) return 'O identificador não pode ser vazio'
        return null;
    }
}

export {
    CreateCollaboratorUseCaseValidate,
    UpdateCollaboratorUseCaseValidate,
    GetCollaboratorByIDUseCaseValidate,
    DeleteCollaboratorUseCaseValidate
}