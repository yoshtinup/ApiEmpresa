
import { IProductoRepository } from '../../../Dominio/ports/IProductoRepository.js';
import { db } from '../../../../../database/mysql.js';

export class IngresoRepository extends IProductoRepository {
  // Método para crear un nuevo cliente en la base de datos
  async deleteProductoById(id) {
    const sql = 'DELETE FROM ingreso WHERE id = ?';
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result.affectedRows > 0; // Devuelve `true` si se eliminó un registro, `false` si no
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error deleting client');
    }
  }

  // Alias para mantener consistencia con los casos de uso
  async deleteIngresoById(id) {
    return this.deleteProductoById(id);
  }

  async updateIngresoById(id, ingreso) {
    const sql = "UPDATE ingreso SET nombre = ?, descripcion = ?, metodo_pago = ?  WHERE id = ?";
    const params = [
      ingreso.nombre ?? null,
      ingreso.descripcion ?? null,
      ingreso.metodo_pago ?? null,
      id
    ];
  
    try {
      const [result] = await db.query(sql, params);
      
      // Verificar si se actualizó algún registro
      if (result.affectedRows === 0) {
        throw new Error('Ingreso not found');
      }
      
      return result;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error updating ingreso');
    }
  }

  async getAllIngreso() {
    const sql = "SELECT * FROM ingreso";
    try {
      const [data] = await db.query(sql);
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error retrieving ingresos');
    }
  }
  async getIngresoById(id) {
    const sql = "SELECT * FROM ingreso WHERE id=?";
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result[0]; // Devolvemos el primer resultado ya que la búsqueda es por ID
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error retrieving Ingreso by ID');
    }
  }

  async createNewIngreso(ingreso) {
    // Cambié la tabla y los campos para reflejar un sistema de boletos
    const sql = "INSERT INTO ingreso (nombre, descripcion, metodo_pago) VALUES (?, ?, ?)";
  
    // Convertir valores undefined a null y obtener valores de la instancia `boleto`
    const params = [
      ingreso.nombre ?? null,
      ingreso.descripcion ?? null,
      ingreso.metodo_pago ?? null
    ];
  
    try {
      // Ejecutar la consulta SQL con los parámetros
      const [resultado] = await db.query(sql, params);

      // Devolver los datos del ingreso creado, incluyendo el ID generado
      return {
        id: resultado.insertId,
        nombre: ingreso.nombre,
        descripcion: ingreso.descripcion,
        metodo_pago: ingreso.metodo_pago
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error creating new Ingreso');
    }
  }

}


