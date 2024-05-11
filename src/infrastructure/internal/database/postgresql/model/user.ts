import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity()
@Unique(['email'])
class UserModel{
    @PrimaryGeneratedColumn()
    public userID: number | null

    @Column({ type: 'varchar', length: '255' })
    public name: string

    @Column({ type: 'varchar', length: '255', name: 'last_name'})
    public lastName: string

    @Column({ type: 'varchar', length: '255' })
    public email: string

    @Column({ type: 'varchar', length: '255' })
    public password: string

    @Column({ type: 'integer', name: 'is_admin'})
    public isAdmin: number

    @Column({ type: 'integer', name:'company_id' })
    public companyID: number

    @Column({ type: 'timestamp', nullable: true, update: false, name: 'created_at' })
    public createdAt: Date

    @Column({ type: 'timestamp', nullable: true, name: 'updated_at' })
    public updatedAt: Date

    constructor(userID: number | null, name: string, lastName: string, email:string, password: string, isAdmin: number, companyID: number, createdAt: Date, updatedAt: Date){
        this.userID=userID
        this.name=name
        this.lastName=lastName
        this.email=email
        this.password=password
        this.isAdmin=isAdmin
        this.companyID=companyID
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
}

export{
    UserModel
}
