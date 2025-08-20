
import { IProductoRepository } from '../../../Dominio/ports/IProductoRepository.js';
import { db } from '../../../../../database/mysql.js';

export class ProductoRepository extends IProductoRepository {
  // Método para crear un nuevo cliente en la base de datos
  async deleteProductoById(id) {
    // Tabla consistente con las demás operaciones
    const sql = 'DELETE FROM `asignacion-curso` WHERE id = ?';
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result.affectedRows > 0; // Devuelve `true` si se eliminó un registro, `false` si no
    } catch (error) {
  console.error('Database Error (DELETE asignacion-curso):', { sql, params, error });
  throw new Error(error.sqlMessage || error.message || 'Error deleting client');
    }
  }
  
  async updateProductoById(id, producto) {
    // Actualizar usando la tabla y columnas reales
    // Mapear: idproduc -> id_curso, iduser -> id_encargado
    // Mantener excel si no viene (COALESCE)
    const sql = "UPDATE `asignacion-curso` SET id_curso = ?, id_encargado = ?, excel = COALESCE(?, excel) WHERE id = ?";
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
      console.error('Database Error (UPDATE asignacion-curso):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error updating producto');
    }
  }  
  
  async getAllProducto() {
    const sql = "SELECT * FROM `asignacion-curso`";
    try {
      const [data] = await db.query(sql);
      return data;
    } catch (error) {
  console.error('Database Error (SELECT ALL asignacion-curso):', { sql, error });
  throw new Error(error.sqlMessage || error.message || 'Error retrieving clients');
    }
  }
  
  async getProductoRegistroById(id) {
    const sql = "SELECT * FROM `asignacion-curso` WHERE id = ?";
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result[0] || null;
    } catch (error) {
      console.error('Database Error (SELECT BY ID asignacion-curso):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error retrieving record by ID');
    }
  }
  async getProductoById(id_curso) {
    const sql = "SELECT * FROM `asignacion-curso` WHERE id_curso = ?";
    const params = [id_curso];
    try {
      const [result] = await db.query(sql, params);
      return result; // Devolver todos los registros que coincidan con el id_curso
    } catch (error) {
      console.error('Database Error (SELECT BY id_curso asignacion-curso):', { sql, params, error });
      throw new Error(error.sqlMessage || error.message || 'Error retrieving records by id_curso');
    }
  }
  
  async createNewProducto(producto) {
    // Cambié la tabla y los campos para reflejar un sistema de boletos
    const sql = "INSERT INTO `asignacion-curso` (id_curso, id_encargado, excel) VALUES (?, ?, ?)";

    // Convertir valores undefined a null y obtener valores de la instancia `boleto`
    const params = [
      producto.id_curso ?? null,
      producto.id_encargado ?? null,
      producto.excel ?? null
    ];
  
    try {
      // Ejecutar la consulta SQL con los parámetros
      const [resultado] = await db.query(sql, params);
  
      // Devolver los datos del boleto creado, incluyendo el ID generado
      return {
        id: resultado.insertId,
        id_curso: producto.id_curso,
        id_encargado: producto.id_encargado,
        excel: producto.excel
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error creating new Producto');
    }
  }

}


