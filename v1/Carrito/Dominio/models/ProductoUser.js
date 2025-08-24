import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, id_encargado, id_producto, cantidad, total) {
    this.id = id;
    this.id_encargado = id_encargado;
    this.id_producto = id_producto;
    this.cantidad = cantidad;
    this.total = total;
  }



  // Método para obtener el resumen del producto
  getProductoSummary() {
    return `ID: ${this.id}, Producto: ${this.id_producto}, Cantidad: ${this.cantidad}, Total: ${this.total}`;
  }
}
