import { v4 as uuidv4 } from 'uuid';

export class ProductoUser {
  constructor(id, iduser, idproduc, cantidad = null) {
    this.id = id;
    this.iduser = iduser;
    this.idproduc = idproduc;
    this.cantidad = cantidad;
  }



  // Método para obtener el resumen del boleto
  getBoletoSummary() {
    return `ID: ${this.id}, Nombre: ${this.iduser}, Cantidad: ${this.idproduc}`;
  }
}
