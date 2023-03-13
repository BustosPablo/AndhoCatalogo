const express = require('express')
const rutas = express.Router();
const { getElProducto, delProducto, getProducto, postProducto, putProducto } = require( "../controllers/productos_controllers.js");

/* Routes */
rutas.get('/producto', getProducto);

rutas.get('/producto/:id', getElProducto);

rutas.patch('/productos', postProducto);

rutas.delete('/producto/:id', delProducto);

rutas.put('/producto/:id', putProducto);


module.exports = rutas;
