import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, id_encargado, total_final, productos) {
    this.id = id;
    this.id_encargado = id_encargado;
    this.total_final = total_final;
    this.productos = productos;
  }



  // Método para obtener el resumen del producto
  getProductoSummary() {
    return `ID: ${this.id}, Encargado: ${this.id_encargado}, Total: ${this.total_final}, Productos: ${JSON.stringify(this.productos)}`;
  }
}
