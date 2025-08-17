import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, id_curso, id_encargado, excel = null) {
    this.id = id;
    this.id_curso = id_curso;
    this.id_encargado = id_encargado;
    this.excel = excel;
  }



  // Método para obtener el resumen del boleto
  getBoletoSummary() {
    return `ID: ${this.id}, Nombre: ${this.id_curso}, Cantidad: ${this.id_encargado}`;
  }
}
