import express from "express";
import cors from "cors";
import rutas from "./routers/productos_routers.js";

const app = express();

/* Settings */
app.use(cors());
app.set('json spaces', 2);
app.use(express.json());

/* Rutas */
app.use(rutas);

export default app;
