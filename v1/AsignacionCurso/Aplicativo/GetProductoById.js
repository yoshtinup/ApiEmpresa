export class GetProductoById {
    constructor(productoRepository) {
      this.productoRepository = productoRepository; // Inyección del puerto (repositorio)
    }
  
    /**
     * Ejecutar la obtención de un cliente por su ID.
    * @param {number} id_curso - El ID del curso.
    * @returns {Promise<Array<Object>>} - Los datos encontrados.
     */
    async execute(id_curso) {
      return await this.productoRepository.getProductoById(id_curso);
    }
  }
  