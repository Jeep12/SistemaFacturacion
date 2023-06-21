import { Factura } from "./Factura";

export class Usuario {
  private uid: string;
  private isVerify: boolean;
  private displayName: string;
  private email: string;
  private rol: string;
  private direction: string;
  private birthdate: Date;
  private phoneNumber: number;
  private facturas: Factura[];

  constructor(
    uid?: string,
    isVerify?: boolean,
    displayName?: string,
    email?: string,
    rol?: string,
    direction?: string,
    birthdate?: Date,
    phoneNumber?: number
  ) {
    this.uid = uid || '';
    this.isVerify = isVerify || false;
    this.displayName = displayName || '';
    this.email = email || '';
    this.rol = rol || 'cliente';
    this.direction = direction || '';
    this.birthdate = birthdate || new Date();
    this.phoneNumber = phoneNumber || 0 ;
    this.facturas = [];
  }

  getVerify():boolean{
    return this.isVerify;
  }
  isAdmin():boolean {
    return this.rol == "admin";
  }
  setDisplayName(displayName: string): void {
    this.displayName = displayName;
  }
  getDisplayName(): string {
    return this.displayName;
  }


  setPhoneNumber(number: number): void {
    this.phoneNumber = number;
  }
  getPhoneNumber(): number {
    return this.phoneNumber;
  }

  setDirection(direction: string): void {
    this.direction = direction;
  }
  getDirection(): string {
    return this.direction;
  }

  getRol(): string {
    return this.rol;
  }
  setRol(rol: string): void {
    this.rol = rol;
  }


  getUid(): string {
    return this.uid;
  }
  getEmail(): string {
    return this.email;
  }
  calcularEdad(): number {
    const diff = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
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
  public isComplete():boolean {
    return this.getDisplayName() != '' && this.getPhoneNumber() != 0 && this.getDirection() != '';
  }
  toString(): string {
    return `${this.rol}, ${this.email} , ${this.uid} `;
  }
  toJSON() {
    return {
      email: this.email,
      uid: this.uid,
      rol: this.rol,
      isVerify: this.isVerify,
      displayName: this.displayName,
      direction: this.direction,
      birthdate: this.birthdate,
      phoneNumber: this.phoneNumber
    };
  }
}
