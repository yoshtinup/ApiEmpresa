export class GetProductoById {
    constructor(productoRepository) {
      this.productoRepository = productoRepository; // Inyección del puerto (repositorio)
    }
  
    /**
     * Ejecutar la obtención de un cliente por su ID.
    * @param {number} id_encargado - El ID del encargado.
    * @returns {Promise<Array<Object>>} - Los datos encontrados.
     */
    async execute(id_encargado) {
      return await this.productoRepository.getProductoById(id_encargado);
    }
  }
  