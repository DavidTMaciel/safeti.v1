import { Router } from "express"    


class UserRouter{
    private router : Router

    constructor(){
        this.router = Router()
        this.router.post('/createUser')
        this.router.post('/getUserByID')
        this.router.post('/updateUser')
        this.router.post('/deleteUser')
    }

    getRouter(): Router {
        return this.router
      }
}

export{
    UserRouter
}
