import express from "express";
import rutas from "./routers/productos_routers.js";
const cors = require('cors');


const app = express();

/* Settings */
app.set('json spaces', 2);
app.use(express.json());
app.use(cors());

/* Rutas */
app.use(rutas);

export default app;
