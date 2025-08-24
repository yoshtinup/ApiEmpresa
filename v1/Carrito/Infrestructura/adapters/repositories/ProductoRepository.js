
import { IProductoRepository } from '../../../Dominio/ports/IProductoRepository.js';
import { db } from '../../../../../database/mysql.js';

export class ProductoRepository extends IProductoRepository {
  // Método para crear un nuevo cliente en la base de datos
  async deleteProductoById(id) {
    // Tabla consistente con las demás operaciones
    const sql = 'DELETE FROM `carrito` WHERE id = ?';
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result.affectedRows > 0; // Devuelve `true` si se eliminó un registro, `false` si no
    } catch (error) {
  console.error('Database Error (DELETE carrito):', { sql, params, error });
  throw new Error(error.sqlMessage || error.message || 'Error deleting client');
    }
  }
  
  async updateProductoById(id, producto) {
    // Actualizar usando la tabla y columnas reales
    // Mapear: idproduc -> id_curso, iduser -> id_encargado
    // Mantener excel si no viene (COALESCE)
    const sql = "UPDATE `carrito` SET id_encargado = ?, id_producto = ?, cantidad = ?, total = ? WHERE id = ?";
    const params = [
      producto.id_encargado ?? null,
      producto.id_producto ?? null,
      producto.cantidad ?? null,
      producto.total ?? null,
      id
    ];
  
    try {
      const [result] = await db.query(sql, params);
      
      // Verificar si se actualizó algún registro
      if (result.affectedRows === 0) {
        throw new Error('Producto not found');
      }
      
      return result;
    } catch (error) {
      console.error('Database Error (UPDATE carrito):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error updating producto');
    }
  }  
  
  async getAllProducto() {
    const sql = "SELECT * FROM `carrito`";
    try {
      const [data] = await db.query(sql);
      return data;
    } catch (error) {
  console.error('Database Error (SELECT ALL carrito):', { sql, error });
  throw new Error(error.sqlMessage || error.message || 'Error retrieving clients');
    }
  }
  
  async getProductoRegistroById(id) {
    const sql = "SELECT * FROM `carrito` WHERE id = ?";
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result[0] || null;
    } catch (error) {
      console.error('Database Error (SELECT BY ID carrito):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error retrieving record by ID');
    }
  }
  async getProductoById(id_curso) {
    const sql = "SELECT * FROM `carrito` WHERE id_curso = ?";
    const params = [id_curso];
    try {
      const [result] = await db.query(sql, params);
      return result; // Devolver todos los registros que coincidan con el id_curso
    } catch (error) {
      console.error('Database Error (SELECT BY id_curso carrito):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error retrieving records by id_curso');
    }
  }
  
  async createNewProducto(producto) {
    // Cambié la tabla y los campos para reflejar un sistema de boletos
    const sql = "INSERT INTO `carrito` (id_encargado, id_producto, cantidad, total) VALUES (?, ?, ?, ?)";

    // Convertir valores undefined a null y obtener valores de la instancia `boleto`
    const params = [
      producto.id_encargado ?? null,
      producto.id_producto ?? null,
      producto.cantidad ?? null,
      producto.total ?? null
    ];
  
    try {
      // Ejecutar la consulta SQL con los parámetros
      const [resultado] = await db.query(sql, params);
  
      // Devolver los datos del boleto creado, incluyendo el ID generado
      return {
        id: resultado.insertId,
        id_encargado: producto.id_encargado,
        id_producto: producto.id_producto,
        cantidad: producto.cantidad,
        total: producto.total
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error creating new Producto');
    }
  }

}


