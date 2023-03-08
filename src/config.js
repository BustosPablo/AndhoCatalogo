const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'b4ypcrltr2tgzenvy5iq-mysql.services.clever-cloud.com'
const DB_PORT = process.env.DB_PORT || 3306
const DB_USER = process.env.DB_USER || 'ualsunu2nmfrjmdb'
const DB_PASS = process.env.DB_PASS || 'VKHEMB6Ondp0DjiQ4Tlw'
const DB_DATAB = process.env.DB_DATAB || 'b4ypcrltr2tgzenvy5iq'

module.exports = {
 PORT,
 DB_HOST,
 DB_PORT,
 DB_USER,
 DB_PASS,
 DB_DATAB
};