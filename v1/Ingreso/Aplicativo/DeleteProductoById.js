export class DeleteIngresoById {
    constructor(ingresoRepository) {
      this.ingresoRepository = ingresoRepository; // Inyección del puerto (repositorio)
    }
  
    /**
     * Ejecutar la eliminación de un ingreso por su ID.
     * @param {number} id - El ID del ingreso.
     * @returns {Promise<boolean>} - `true` si el ingreso fue eliminado, `false` si no se encontró.
     */
    async execute(id) {
      return await this.ingresoRepository.deleteIngresoById(id);
    }
  }
  