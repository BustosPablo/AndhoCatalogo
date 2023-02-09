import app from "./app.js"
import { DB_PORT, PORT } from "./config.js"

app.listen(PORT);
console.log("server On-Line in port: " + PORT + " and Data-Base in port: " + DB_PORT);