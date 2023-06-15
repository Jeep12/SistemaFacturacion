import { Factura } from "./Factura";
import { Usuario } from "./Usuario";

export class FacturaA extends Factura {
  static iva:number = 0.21;

  constructor(id:number,cliente:Usuario, detalle:string){
    super(id,cliente,detalle);
  }
  public override calcularPrecio(): number {
    return 12;
  }


}

