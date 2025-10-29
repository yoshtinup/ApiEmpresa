export class UpdateIngresoById {
    constructor(ingresoRepository) {
      this.ingresoRepository = ingresoRepository; // Inyección del puerto (repositorio)
    }
  
    /**
     * Ejecutar la actualización de un ingreso por su ID.
     * @param {number} id - El ID del ingreso.
     * @param {Object} ingresoData - Los datos del ingreso para actualizar.
     * @returns {Promise<Object>} - Los datos del ingreso actualizado.
     */
    async execute(id, ingresoData) {
      return await this.ingresoRepository.updateIngresoById(id, ingresoData);
    }
  }
  