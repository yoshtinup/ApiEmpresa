
import { IProductoRepository } from '../../../Dominio/ports/IProductoRepository.js';
import { db } from '../../../../../database/mysql.js';

export class ProductoRepository extends IProductoRepository {
  // Método para crear un nuevo cliente en la base de datos
  async deleteProductoById(id) {
    const sql = 'DELETE FROM curso WHERE id = ?';
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result.affectedRows > 0; // Devuelve `true` si se eliminó un registro, `false` si no
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error deleting client');
    }
  }
  
  async updateProductoById(id, producto) {
    const sql = "UPDATE curso SET nombre = ?, ciudad = ?, fecha_inicial = ?, fecha_final = ?  WHERE id = ?";
    const params = [
      producto.nombre ?? null,
      producto.ciudad ?? null,
      producto.fecha_inicial ?? null,
      producto.fecha_final ?? null,
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
      console.error('Database Error:', error);
      throw new Error('Error updating producto');
    }
  }  
  
  async getAllProducto() {
    const sql = "SELECT * FROM curso";
    try {
      const [data] = await db.query(sql);
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error retrieving clients');
    }
  }
  async getProductoById(id) {
    const sql = "SELECT * FROM curso WHERE id=?";
    const params = [id];
    try {
      const [result] = await db.query(sql, params);
      return result[0]; // Devolvemos el primer resultado ya que la búsqueda es por ID
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error retrieving History by ID');
    }
  }
  
  async createNewProducto(producto) {
    // Cambié la tabla y los campos para reflejar un sistema de boletos
    const sql = "INSERT INTO curso (nombre, ciudad, fecha_inicial, fecha_final) VALUES (?, ?, ?, ?)";
  
    // Convertir valores undefined a null y obtener valores de la instancia `boleto`
    const params = [
      producto.nombre ?? null,
      producto.ciudad ?? null,
      producto.fecha_inicial ?? null,
      producto.fecha_final ?? null
    ];
  
    try {
      // Ejecutar la consulta SQL con los parámetros
      const [resultado] = await db.query(sql, params);
  
      // Devolver los datos del boleto creado, incluyendo el ID generado
      return {
        id: resultado.insertId,
        nombre: producto.nombre,
        ciudad: producto.ciudad,
        fecha_inicial: producto.fecha_inicial,
        fecha_final: producto.fecha_final
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Error creating new Producto');
    }
  }

}


