import "reflect-metadata"
import { DataSource } from "typeorm"
require('dotenv').config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: "tuffi.db.elephantsql.com",
    port: 5432,
    username: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [],
    synchronize: true,
    logging: false,
})

export { AppDataSource }