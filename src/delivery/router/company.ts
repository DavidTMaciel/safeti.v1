import { Router } from "express";
import { CreateCompanyController, DeleteCompanyController, ListCompanyByIDController, ListCompanyController, UpdateCompanyController } from "../controller/company";

class CompanyRouter{
    private router: Router

    constructor(){
        this.router = Router()
        this.router.post('/createCompany', new CreateCompanyController().createCompany)
        this.router.post('/listAllCompany', new ListCompanyController().listCompany)
        this.router.post('/listCompanyByID', new ListCompanyByIDController().listCompanyByID)
        this.router.post('/updateCompany', new UpdateCompanyController().updateCompany)
        this.router.post('/deleteCompanyByID', new DeleteCompanyController().deleteCompany)
    }

    getRouter(){
        return this.router
    }
}

export{
    CompanyRouter
}