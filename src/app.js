import express from "express";
import rutas from "./routers/productos_routers.js";

const app = express();

/* Settings */
app.set('json spaces', 2);
app.use(express.json());

/* Rutas */
app.use(rutas);

export default app;