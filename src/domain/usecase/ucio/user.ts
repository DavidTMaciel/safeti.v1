import { ErrorEntity } from "../../entity/error"
import { UserEntity } from "../../entity/user"

class CreateUserUseCaseRequest {
    public name: string
    public lastName: string
    public email: string
    public password: string
    public isAdmin: number
    public companyID: number


    constructor(name: string, lastName: string, email: string, password: string, isAdmin: number, companyID: number) {
        this.name = name
        this.lastName = lastName
        this.email = email
        this.password = password
        this.isAdmin = isAdmin
        this.companyID = companyID
    }
}

class CreateUserUseCaseResponse {
    public user: UserEntity | null
    public error: ErrorEntity | null

    constructor(user: UserEntity | null, error: ErrorEntity | null) {
        this.user = user
        this.error = error
    }

}

class UpdateUserUseCaseRequest{
    public userID: number
    public name: string 
    public lastName: string 
    public email: string 
    public password: string
    public isAdmin: number
    public companyID: number

    constructor(userID: number,name: string, lastName: string, email: string, password: string, isAdmin: number, companyID: number) {
        this.userID=userID
        this.name = name
        this.lastName = lastName
        this.email = email
        this.password = password
        this.isAdmin = isAdmin
        this.companyID = companyID
    }
}

class UpdateUserUseCaseResponse{
    public error: ErrorEntity | null

    constructor(error: ErrorEntity | null){
        this.error=error
    }
}

class GetUserUseCaseRequest{
    public userID:number
    constructor(userID:number){
        this.userID=userID
    }
}

class GetUserUseCaseResponse{
    public user:UserEntity | null
    public error:ErrorEntity | null     
    constructor(user:UserEntity | null, error:ErrorEntity | null){
        this.user=user
        this.error=error
    }
    }



export{
    CreateUserUseCaseRequest,
    CreateUserUseCaseResponse,
    UpdateUserUseCaseRequest,
    UpdateUserUseCaseResponse,
    GetUserUseCaseRequest,
    GetUserUseCaseResponse
    
}