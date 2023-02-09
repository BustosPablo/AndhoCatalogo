import { Router } from "express";
import { getCantidad, delProducto, getProducto, postProducto, putProducto } from "../controllers/productos_controllers.js";

const rutas = Router();

/* Routes */
rutas.get('/producto', getProducto);

rutas.get('/producto/cantidad', getCantidad);

rutas.patch('/producto', postProducto);

rutas.delete('/producto/:nombre', delProducto);

rutas.put('/producto/:id', putProducto);

export default rutas;