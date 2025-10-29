
import { ProductoUser } from "../Dominio/models/ProductoUser.js";

export class CreateIngreso {
  constructor(ingresoRepository) {
    this.ingresoRepository = ingresoRepository; // Inyección del puerto (repositorio)
  }

  /**
   * Método para ejecutar la creación de un nuevo ingreso.
   * @param {Object} ingresoData - Datos del ingreso.
   * @returns {Promise<ProductoUser>} - El producto creado.
   */
  async execute(ingresoData) {
    // Extraer los campos de los datos proporcionados
    const { id, nombre, descripcion, metodo_pago} = ingresoData;

    // Crear una instancia de la entidad Boleto con los datos (aplica validaciones si es necesario)
    const ingreso = new ProductoUser(id, nombre, descripcion, metodo_pago);

    // Guardar el ingreso en el repositorio
    return await this.ingresoRepository.createNewIngreso(ingreso);
  }
}
