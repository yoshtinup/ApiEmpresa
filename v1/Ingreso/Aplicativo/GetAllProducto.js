export class GetAllIngreso {
    constructor(ingresoRepository) {
      this.ingresoRepository = ingresoRepository; // Inyección del puerto (repositorio)
    }
  
    /**
     * Ejecutar la obtención de todos los ingresos.
     * @returns {Promise<Array>} - Lista de todos los ingresos registrados.
     */
    async execute() {
      return await this.ingresoRepository.getAllIngreso();
    }
  }
  