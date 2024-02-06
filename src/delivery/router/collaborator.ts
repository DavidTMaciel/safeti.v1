import { Router } from "express";
import { CreateCollaboratorController, DeleteCollaboratorController, GetCollaboratorByIDController, UpdateCollaboratorController } from "../controller/collaborator";


class CollaboratorRouter {
    private router: Router

    constructor() {
        this.router = Router()
        this.router.post('/createCollaborator', new CreateCollaboratorController().createCollaborator)
        this.router.post('/updateCollaborator', new UpdateCollaboratorController().updateCollaborator)
        this.router.post('/getCollaborator', new GetCollaboratorByIDController().getCollaboratorByID)
        this.router.post('/deleteCollaborator', new DeleteCollaboratorController().deleteCollaborator)
    }

    getRouter(): Router {
        return this.router
    }
}

export {
    CollaboratorRouter
}