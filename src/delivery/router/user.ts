import { Router } from "express"    
import { CreateUserController, UpdateUserController } from "../controller/user"


class UserRouter{
    private router : Router

    constructor(){
        this.router = Router()
        this.router.post('/createUser', new CreateUserController().createUser)
        this.router.post('/getUserByID')
        this.router.post('/updateUser', new UpdateUserController().updateUser)
        this.router.post('/deleteUser')
    }

    getRouter(): Router {
        return this.router
      }
}

export{
    UserRouter
}
