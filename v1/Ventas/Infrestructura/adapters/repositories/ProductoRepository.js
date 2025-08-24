
import { IProductoRepository } from '../../../Dominio/ports/IProductoRepository.js';
import { db } from '../../../../../database/mysql.js';

export class ProductoRepository extends IProductoRepository {
  // Método para crear un nuevo cliente en la base de datos
  async deleteProductoById(id) {
    // Tabla consistente con las demás operaciones
    const sql = 'DELETE FROM `venta` WHERE id = ?';
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result.affectedRows > 0; // Devuelve `true` si se eliminó un registro, `false` si no
    } catch (error) {
  console.error('Database Error (DELETE venta):', { sql, params, error });
  throw new Error(error.sqlMessage || error.message || 'Error deleting client');
    }
  }
  
  async updateProductoById(id, producto) {
    // Actualizar usando la tabla y columnas reales
    // Mapear: idproduc -> id_curso, iduser -> id_encargado
    // Mantener excel si no viene (COALESCE)
    const sql = "UPDATE `venta` SET id_curso = ?, id_encargado = ?, excel = COALESCE(?, excel) WHERE id = ?";
    const params = [
      producto.idproduc ?? null,
      producto.iduser ?? null,
      producto.excel ?? null,
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
      console.error('Database Error (UPDATE venta):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error updating producto');
    }
  }  
  
  async getAllProducto() {
    const sql = "SELECT * FROM `venta`";
    try {
      const [data] = await db.query(sql);
      return data;
    } catch (error) {
  console.error('Database Error (SELECT ALL venta):', { sql, error });
  throw new Error(error.sqlMessage || error.message || 'Error retrieving clients');
    }
  }
  
  async getProductoRegistroById(id) {
    const sql = "SELECT * FROM `venta` WHERE id = ?";
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result[0] || null;
    } catch (error) {
      console.error('Database Error (SELECT BY ID venta):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error retrieving record by ID');
    }
  }
  async getProductoById(id_encargado) {
    const sql = "SELECT * FROM `venta` WHERE id_encargado = ?";
    const params = [id_encargado];
    try {
      const [result] = await db.query(sql, params);
      return result; // Devolver todos los registros que coincidan con el id_encargado
    } catch (error) {
      console.error('Database Error (SELECT BY id_encargado venta):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error retrieving records by id_curso');
    }
  }
  
  async createNewProducto(producto) {
    // Cambié la tabla y los campos para reflejar un sistema de boletos
    const sql = "INSERT INTO `venta` (id_encargado, total_final, productos) VALUES (?, ?, ?)";

    // Convertir valores undefined a null y obtener valores de la instancia `boleto`
    const params = [
      producto.id_encargado ?? null,
      producto.total_final ?? null,
      JSON.stringify(producto.productos) ?? null
    ];
  
    try {
      // Ejecutar la consulta SQL con los parámetros
      const [resultado] = await db.query(sql, params);
  
      // Devolver los datos del boleto creado, incluyendo el ID generado
      return {
        id: resultado.insertId,
        id_encargado: producto.id_encargado,
        total_final: producto.total_final,
        productos: producto.productos
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error creating new Producto');
    }
  }

}


