const mysql2 = require("mysql2/promise");
const { DB_USER, DB_PORT, DB_PASS, DB_HOST, DB_DATAB } = require('./config.js');

const pool = mysql2.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
    database: DB_DATAB
});

module.exports = pool;