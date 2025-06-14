import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, nombre, cantidad, precio , imagen= null) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio; 
    this.imagen = imagen;
  }



  // Método para obtener el resumen del boleto
  getBoletoSummary() {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: ${this.precio}`;
  }
}
