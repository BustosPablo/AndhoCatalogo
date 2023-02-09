import { pool } from "../db.js";

/* Traer todos los Zapatos */
export const getProducto = async (req, res) =>{
    try {
        const result = await pool.query('SELECT * FROM productos');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: "Zapato no encontrado" });
    };  
};

export const getCantidad = async (req, res) =>{
    try {
        const result = await pool.query('SELECT COUNT(*) FROM productos AS TOTAL');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: "Zapato no encontrado" });
    };  
};

/* Publicar Zapato */
export const postProducto = async (req, res) => {
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
export const delProducto = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM productos WHERE NOMBRE=?', [req.params.nombre]);

        if(result.affectedRows <= 0) return res.status(404).json({
            message: "Producto no encontrado"
        });
        res.status(204)
    } catch (error) {
        return res.status(500).json({ message: "Problemas de conexion con la BD" });
    };
};

/* Actualizar Zapato */
export const putProducto = async(req, res) =>{
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
