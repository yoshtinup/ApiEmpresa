import { GetProductoById } from "../../../Aplicativo/GetProductoById.js";
import { GetProductoRegistroById } from "../../../Aplicativo/GetProductoRegistroById.js";
import { GetAllProducto } from "../../../Aplicativo/GetAllProducto.js";
import { CreateProducto } from "../../../Aplicativo/CreateProducto.js";
import { UpdateProductoById } from "../../../Aplicativo/UpdateProductoById.js";
import { DeleteProductoById } from "../../../Aplicativo/DeleteProductoById.js";
import axios from 'axios';

export class ProductoController {
  constructor(productoRepository) {
    this.getHistoryByIdUseCase = new GetProductoById(productoRepository);
  this.getByRegistroIdUseCase = new GetProductoRegistroById(productoRepository);
    this.getAllHistoryUseCase = new GetAllProducto(productoRepository);
    this.createBoletoUseCase = new CreateProducto(productoRepository);
    this.updateHistoryByIdUseCase = new UpdateProductoById(productoRepository);
    this.deleteHistoryByIdUseCase = new DeleteProductoById(productoRepository); 
  }
  // Método para manejar la solicitud HTTP POST /clients
  async deleteProductoById(req, res) {
    try {
      const { id } = req.params;
      const deleted = await this.deleteHistoryByIdUseCase.execute(id);
      if (deleted) {
        res.status(200).json({ message: 'Client deleted successfully' });
      } else {
        res.status(404).json({ message: 'Client not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateProductoById(req, res) {
    try {
      const { id } = req.params;
      const productoData = req.body;
  
      // Validar que los datos estén presentes y no sean undefined o vacíos
      if ( !productoData.iduser || !productoData.idproduc ) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Opcional: puedes agregar validaciones adicionales, por ejemplo, verificar longitud o formato del código, etc.

      // Ejecutar el caso de uso para actualizar el producto
      const updatedProducto = await this.updateHistoryByIdUseCase.execute(id, productoData);

      // Verificar si el producto fue actualizado correctamente
      if (!updatedProducto) {
        return res.status(404).json({ message: 'Producto not found' });
      }
  
      res.status(200).json({ message: 'Producto updated successfully', updatedProducto });
    } catch (error) {
      // Manejo de errores
      res.status(500).json({ message: error.message });
    }
  }
  
  async createProducto(req, res) {
    try {
      // Extraer los campos del cuerpo de la solicitud (body)
      const { id_encargado, total_final, productos } = req.body;

      // Validar que los campos requeridos estén presentes
      if (!id_encargado || !total_final || !Array.isArray(productos)) {
        return res.status(400).json({
          message: 'id_encargado, total_final and productos are required'
        });
      }

      // Crear el objeto que será pasado al caso de uso
      const productoData = {
        id_encargado: parseInt(id_encargado), // ✅ Convertir a entero
        total_final: parseFloat(total_final), // ✅ Convertir a número
        productos: Array.isArray(productos) ? productos : [], // ✅ Asegurarse de que sea un array
      };

      // Ejecutar el caso de uso para crear el registro
      const newBoleto = await this.createBoletoUseCase.execute(productoData);

      // Enviar la respuesta
      res.status(201).json(newBoleto);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  

  async getProductoById(req, res) {
    try {
      const { id_encargado } = req.params;
      const records = await this.getHistoryByIdUseCase.execute(id_encargado);
      if (records && records.length > 0) {
        res.status(200).json(records);
      } else {
        res.status(404).json({ message: 'No records found for id_encargado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProductoByRegistroId(req, res) {
    try {
      const { id } = req.params;
      const record = await this.getByRegistroIdUseCase.execute(id);
      if (record) {
        res.status(200).json(record);
      } else {
        res.status(404).json({ message: 'Client not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAllProducto(req, res) {
    try {
      const history = await this.getAllHistoryUseCase.execute();
      res.status(200).json(history);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async crearAsignacionCurso(asignacion) {
    try {
      const response = await axios.post('http://localhost:3002/api/v1/asignar-curso', {
        id_curso: parseInt(asignacion.id_curso),
        id_encargado: parseInt(asignacion.id_encargado),
        excel: asignacion.excel
      });
      return response.data;
    } catch (error) {
      console.error('Error en asignacionCursoService:', error.response?.data || error.message);
      throw error;
    }
  }
}

