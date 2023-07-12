import { Usuario } from '../Usuario';
import { Criterio } from './Criterio';

export class CriterioPorNombre extends Criterio {
   searchText:string;

  constructor(text:string){
    super();
    this.searchText = text;
  }
  cumpleCriterio(usuario: Usuario): boolean {
    let displayName = usuario.getDisplayName().toLowerCase();

    return displayName.includes(this.searchText.toLowerCase());
  }


}
