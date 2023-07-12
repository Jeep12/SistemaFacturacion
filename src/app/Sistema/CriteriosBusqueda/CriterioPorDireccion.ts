import { Usuario } from '../Usuario';
import { Criterio } from './Criterio';

export class CriterioPorDireccion extends Criterio {
   searchText:string;

  constructor(text:string){
    super();
    this.searchText = text;
  }
  cumpleCriterio(usuario: Usuario): boolean {
    let direction = usuario.getDirection().toLowerCase();
    return direction.includes(this.searchText.toLowerCase())
  }


}
