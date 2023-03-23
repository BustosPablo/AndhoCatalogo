/* Modulos requeridos */
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const {subirAdrive, subir} = require('./google/google-controller.js');
const rutas = require('./routes/productos_routers.js');
const usuario = require('./routes/usuario_routes.js');
const {PORT} = require('./config.js');

const app = express();

/* Configuracion de la APP */
app.use(cors());
app.set('json spaces', 2);
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'esto es el secreto',
    resave: false,
    saveUninitialized: true
}));

/* Rutas */
app.use(rutas)
app.use(usuario)
app.post('/subir', subir, subirAdrive);

/* Ejecucion del server */
app.listen(PORT, () => {
    console.log("Servidor en linea en el puerto: " + PORT);
});
