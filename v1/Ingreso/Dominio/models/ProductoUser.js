import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, nombre, descripcion, metodo_pago, fecha_ingreso) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.metodo_pago = metodo_pago;
    this.fecha_ingreso = fecha_ingreso;
  }



  // Método para obtener el resumen del producto
  getProductoSummary() {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Descripción: ${this.descripcion}, Método de Pago: ${this.metodo_pago}, Fecha de Ingreso: ${this.fecha_ingreso}`;
  }
}
