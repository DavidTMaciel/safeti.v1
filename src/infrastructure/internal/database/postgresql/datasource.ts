import "reflect-metadata"
import { DataSource } from "typeorm"
import { CollaboratorModel } from "./model/collaborator"
import { CompanyModel } from "./model/company"
import { UserModel } from "./model/user"
require('dotenv').config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: "tuffi.db.elephantsql.com",
    port: 5432,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [CollaboratorModel,CompanyModel,UserModel],
    synchronize: true,
    logging: false,
})

export { AppDataSource }