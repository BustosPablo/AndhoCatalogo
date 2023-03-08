const pool = require("../db.js");

/* Traer usuario */
const getUsuario = async (req, res) =>{
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: "Usuario no encontrado" });
    };  
};

module.exports = getUsuario;