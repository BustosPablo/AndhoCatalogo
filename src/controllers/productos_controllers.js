const pool = require("../db.js");

/* Traer todos los Zapatos */
const getProducto = async (req, res) =>{
    try {
        const result = await pool.query('SELECT * FROM productos');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: "Zapato no encontrado" });
    };  
};

const getElProducto = async (req, res) =>{
    try {
        const result = await pool.query('SELECT * FROM productos WHERE ID=?', [req.params.id]);
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: "Producto no encontrado" });
    };  
};

/* Publicar Zapato */
const postProducto = async (req, res) => {
    const { id, nombre, descripcion, link, tipo } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO productos (id, nombre, descripcion, link, tipo) VALUES (?, ?, ?, ?, ?)', [id, nombre, descripcion, link, tipo]);
        res.send({
            id: rows.insertId, 
            nombre,
            descripcion,
            link,
            tipo
        });
    } catch (error) {
        return res.status(500).json({ message: "Problemas de conexion con la BD" });
    };
};

/* Eliminar Zapato */
const delProducto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM productos WHERE ID=?', [req.params.id]);

        if(result.affectedRows <= 0) return res.status(404).json({
            message: "Producto no encontrado"
        });
        res.status(204).json({message: "Producto eliminado"});
    } catch (error) {
        return res.status(500).json({ message: "Problemas de conexion con la BD" });
    };
};

/* Actualizar Zapato */
const putProducto = async(req, res) =>{
    const { id } = req.params;
    const { nombre, descripcion, link, tipo } = req.body;
    try {
        const [result] = await pool.query('UPDATE productos SET nombre=IFNULL(?, nombre), descripcion=IFNULL(?, descripcion), link=IFNULL(?, link), tipo=IFNULL(?, tipo) WHERE ID=?', [nombre, descripcion, link, tipo, id]);

        if(result.affectedRows == 0) return res.status(404).json({ message: "Zapato no encontrado" });

        const [rows] = await pool.query('SELECT * FROM productos WHERE ID=?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({ message: "Problemas de conexion con la BD" })
    }
}

module.exports = {
    getProducto, 
    getElProducto, 
    postProducto, 
    delProducto, 
    putProducto
};
