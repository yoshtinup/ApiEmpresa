export class GetIngresoById {
    constructor(ingresoRepository) {
      this.ingresoRepository = ingresoRepository; // Inyección del puerto (repositorio)
    }
  
    /**
     * Ejecutar la obtención de un ingreso por su ID.
     * @param {number} id- El ID del ingreso.
     * @returns {Promise<Object>} - Los datos del ingreso encontrado.
     */
    async execute(id) {
      return await this.ingresoRepository.getIngresoById(id);
    }
  }
  