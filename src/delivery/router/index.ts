import express from 'express'
import { UserRouter } from './user'
import { CompanyRouter } from './company'
import { CollaboratorRouter } from './collaborator'

class Router{

    constructor(app: express.Router){
        app.use(new UserRouter().getRouter())
        app.use(new CompanyRouter().getRouter())
        app.use(new CollaboratorRouter().getRouter())
    }
}

export {Router}