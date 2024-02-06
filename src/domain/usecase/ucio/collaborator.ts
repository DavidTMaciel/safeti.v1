import { CollaboratorEntity } from "../../entity/collaborator"
import { ErrorEntity } from "../../entity/error"


class CreateCollaboratorUseCaseRequest {
    public name: string
    public office: string
    public constructions: string
    public company: string

    constructor(name: string, office: string, constructions: string, company: string) {
        this.name = name
        this.office = office
        this.constructions = constructions
        this.company = company
    }
}

class CreateCollaboratorUseCaseResponse {
    public collaborator: CollaboratorEntity | null
    public error: ErrorEntity | null

    constructor(collaborator: CollaboratorEntity | null, error: ErrorEntity | null) {
        this.collaborator = collaborator
        this.error = error
    }
}

class UpdateCollaboratorUseCaseRequest {
    public ID: number
    public name: string
    public office: string
    public constructions: string
    public company: string

    constructor(ID: number, name: string, office: string, constructions: string, company: string) {
        this.ID = ID
        this.name = name
        this.office = office
        this.constructions = constructions
        this.company = company
    }
}

class UpdateCollaboratorUseCaseResponse {
    public collaborator: CollaboratorEntity | null
    public error: ErrorEntity | null

    constructor(collaborator: CollaboratorEntity | null, error: ErrorEntity | null) {
        this.collaborator = collaborator
        this.error = error
    }
}

class GetCollaboratorByIDUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class GetCollaboratorByIDUseCaseResponse {
    public collaborator: CollaboratorEntity | null
    public error: ErrorEntity | null

    constructor(collaborator: CollaboratorEntity | null, error: ErrorEntity | null) {
        this.collaborator = collaborator
        this.error = error
    }
}

class DeleteCollaboratorUseCaseRequest {
    public ID: number

    constructor(ID: number) {
        this.ID = ID
    }
}

class DeleteCollaboratorUseCaseResponse {
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null) {
        this.error = error
    }
}

export {
    CreateCollaboratorUseCaseRequest,
    CreateCollaboratorUseCaseResponse,
    UpdateCollaboratorUseCaseRequest,
    UpdateCollaboratorUseCaseResponse,
    GetCollaboratorByIDUseCaseRequest,
    GetCollaboratorByIDUseCaseResponse,
    DeleteCollaboratorUseCaseRequest,
    DeleteCollaboratorUseCaseResponse

}