import { Factura } from "./Factura";

export class Usuario {
  private email: string;
  private uid:string;
  private name: string;
  private facturas: Factura[];

  constructor(email: string, name: string,uid:string) {
    this.email = email;
    this.name = name;
    this.uid = uid;
    this.facturas = [];

  }
  addFactura(factura: Factura): void {
    const facturaExistente = this.facturas.find((f) => f.getId() === factura.getId());

    if (!facturaExistente) {
      this.facturas.push(factura);
    }
   }
  getFacturas(): Factura[] {
    // Retorna una copia del arreglo utilizando el operador spread (...)
    return [...this.facturas];
  }
  getEmail(): string {
    return this.email;
  }
  getName(): string {
    return this.name;
  }
  getUid(): string {
    return this.uid;
  }
  toString(): string {
    return `${this.name}, ${this.email} , ${this.uid} `;
  }
}
