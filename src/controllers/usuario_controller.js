const pool = require("../db.js");
const bcrypt = require('bcryptjs');

/* Traer usuario */
const getUsuario = async (req, res) =>{
    const {nombre, contrasena} = req.body;
    try {
        const [result] = await pool.query('SELECT * FROM usuario WHERE nombre = ?', [nombre]);
        if(result.length>0 && result[0].nombre === nombre && bcrypt.compareSync(contrasena, result[0].contrasena)){
            req.session.loggedin= true;
            req.session.usuario = nombre;
            res.status(200).json({message: "Login OK"});
        }else{
            res.status(404).json({message: "Verificar usuario o contraseña"});
        }
    } catch (error) {
        return res.status(500).json({ message: "Usuario no encontrado" });
    };  
};


module.exports = getUsuario;
