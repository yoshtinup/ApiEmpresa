import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, nombre, cantidad, precio , imagen, precioUnitario) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio; 
    this.imagen = imagen;
    this.precioUnitario = precioUnitario;
  }



  // Método para obtener el resumen del producto
  getProductoSummary() {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: ${this.precio}, Precio Unitario: ${this.precioUnitario}`;
  }
}
