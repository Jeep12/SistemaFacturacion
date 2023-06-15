import { Usuario } from "./Usuario";

export abstract class Factura {
    private id:number;
    private cliente:Usuario;
    private detalle:string;

    constructor(id:number,cliente:Usuario,detalle:string){
      this.id = id;
      this.cliente = cliente;
      this.detalle = detalle;
    }

  public abstract  calcularPrecio():number;
  public getCliente():Usuario{
    return this.cliente;
  }
  public getDetalle():string{
    return this.detalle;
  }

 public getId():number{
    return this.id;
  }



}
