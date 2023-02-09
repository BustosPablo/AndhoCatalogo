import { config } from 'dotenv'
config();

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'b4ypcrltr2tgzenvy5iq-mysql.services.clever-cloud.com'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || 'ualsunu2nmfrjmdb'
export const DB_PASS = process.env.DB_PASS || 'VKHEMB6Ondp0DjiQ4Tlw'
export const DB_DATAB = process.env.DB_DATAB || 'b4ypcrltr2tgzenvy5iq'