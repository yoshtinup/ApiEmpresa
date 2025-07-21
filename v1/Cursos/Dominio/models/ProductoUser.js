import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, nombre, ciudad, fecha_inicial, fecha_final = null) {
    this.id = id;
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.fecha_inicial = fecha_inicial;
    this.fecha_final = fecha_final;
  }



  // Método para obtener el resumen del boleto
  getBoletoSummary() {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Cantidad: ${this.ciudad}`;
  }
}
