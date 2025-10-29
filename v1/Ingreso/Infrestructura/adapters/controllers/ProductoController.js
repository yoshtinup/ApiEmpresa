
import { GetIngresoById } from "../../../Aplicativo/GetProductoById.js";
import { GetAllIngreso } from "../../../Aplicativo/GetAllProducto.js";
import { CreateIngreso } from "../../../Aplicativo/CreateProducto.js";
import { UpdateIngresoById } from "../../../Aplicativo/UpdateProductoById.js";
import { DeleteIngresoById } from "../../../Aplicativo/DeleteProductoById.js";

export class IngresoController {
  constructor(ingresoRepository) {
    this.getIngresoByIdUseCase = new GetIngresoById(ingresoRepository);
    this.getAllIngresoUseCase = new GetAllIngreso(ingresoRepository);
    this.createIngresoUseCase = new CreateIngreso(ingresoRepository);
    this.updateIngresoByIdUseCase = new UpdateIngresoById(ingresoRepository);
    this.deleteIngresoByIdUseCase = new DeleteIngresoById(ingresoRepository);
  }
  // Método para manejar la solicitud HTTP POST /clients
  async deleteIngresoById(req, res) {
    try {
      const { id } = req.params;
      const deleted = await this.deleteIngresoByIdUseCase.execute(id);
      if (deleted) {
        res.status(200).json({ message: 'Ingreso deleted successfully' });
      } else {
        res.status(404).json({ message: 'Ingreso not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updateIngresoById(req, res) {
    try {
      const { id } = req.params;
      const ingresoData = req.body;
  
      // Validar que los datos estén presentes y no sean undefined o vacíos
      if ( !ingresoData.nombre || !ingresoData.descripcion || !ingresoData.metodo_pago || !ingresoData.fecha_final) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Opcional: puedes agregar validaciones adicionales, por ejemplo, verificar longitud o formato del código, etc.

      // Ejecutar el caso de uso para actualizar el ingreso
  const updatedIngreso = await this.updateIngresoByIdUseCase.execute(id, ingresoData);

      // Verificar si el ingreso fue actualizado correctamente
      if (!updatedIngreso) {
        return res.status(404).json({ message: 'Ingreso not found' });
      }
  
      res.status(200).json({ message: 'Ingreso updated successfully', updatedIngreso });
    } catch (error) {
      // Manejo de errores
      res.status(500).json({ message: error.message });
    }
  }
  
  async createIngreso(req, res) {
    try {
      // Extraer los campos del cuerpo de la solicitud (body)
      const { nombre, descripcion, metodo_pago } = req.body;

      // Crear el objeto que será pasado al caso de uso para crear el ingreso     
      const ingresoData = {
        nombre: nombre ?? '',
        descripcion: descripcion ?? '',
        metodo_pago: metodo_pago ?? ''
      };

      // Ejecutar el caso de uso para crear el ingreso
  const newDatos = await this.createIngresoUseCase.execute(ingresoData);

      // Enviar la respuesta con el ingreso creado
      res.status(201).json(newDatos);
    } catch (error) {
      // En caso de error, responder con el mensaje de error
      res.status(500).json({ message: error.message });
    }
  }
  
  async getIngresoById(req, res) {
    try {
      const { id } = req.params;
      const ingreso = await this.getIngresoByIdUseCase.execute(id);
      if (ingreso) {
        res.status(200).json(ingreso);
      } else {
        res.status(404).json({ message: 'Ingreso not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAllIngreso(req, res) {
    try {
      const ingresos = await this.getAllIngresoUseCase.execute();
      res.status(200).json(ingresos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

