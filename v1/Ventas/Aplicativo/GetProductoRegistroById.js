export class GetProductoRegistroById {
  constructor(productoRepository) {
    this.productoRepository = productoRepository;
  }

  /**
   * @param {number} id - ID del registro en asignacion-curso
   * @returns {Promise<Object|null>}
   */
  async execute(id) {
    return await this.productoRepository.getProductoRegistroById(id);
  }
}
