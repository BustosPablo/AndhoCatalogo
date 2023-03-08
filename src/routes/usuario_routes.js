const express = require('express')
const usuario = express.Router();
const getUsuario = require('../controllers/usuario_controller.js');

usuario.get('/usuarios', getUsuario);

module.exports = usuario;