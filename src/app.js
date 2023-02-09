import express from "express";
import {cors} form "cors";
import rutas from "./routers/productos_routers.js";


const app = express();

/* Settings */
app.set('json spaces', 2);
app.use(express.json());
app.use(cors({
  origin: "http://127.0.0.1:5500/"
}))

/* Rutas */
app.use(rutas);

export default app;
