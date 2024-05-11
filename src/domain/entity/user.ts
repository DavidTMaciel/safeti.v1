class UserEntity {
    public userID: number | null
    public name: string
    public lastName: string
    public email: string
    public password: string
    public isAdmin: number
    public companyID : number
    public createdAt: Date
    public updatedAt: Date

    constructor(userID: number | null, name: string, lastName: string, email: string, password: string, isAdmin: number, companyID : number, createdAt: Date,updatedAt: Date) {
        this.userID = userID
        this.name = name
        this.lastName = lastName
        this.email = email
        this.password = password
        this.isAdmin = isAdmin
        this.companyID= companyID
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
}

export{
    UserEntity
}