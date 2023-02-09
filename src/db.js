import { createPool } from "mysql2/promise";
import { DB_USER, DB_PORT, DB_PASS, DB_HOST, DB_DATAB } from "./config.js";

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_DATAB
});