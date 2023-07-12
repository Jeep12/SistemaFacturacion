import { Usuario } from '../Usuario';
import { Criterio } from './Criterio';

export class CriterioPorEdad extends Criterio {
   searchText:string;

  constructor(number:string){
    super();
    this.searchText = number;
  }
  cumpleCriterio(usuario: Usuario): boolean {
    let edad = usuario.calcularEdad();
    return edad == parseInt(this.searchText);
  }


}
