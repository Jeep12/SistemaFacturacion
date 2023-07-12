import { Usuario } from '../Usuario';
import { Criterio } from './Criterio';

export class CriterioPorEmail extends Criterio {
   searchText:string;

  constructor(text:string){
    super();
    this.searchText = text;
  }
  cumpleCriterio(usuario: Usuario): boolean {
    let email = usuario.getEmail().toLowerCase();
    return email.includes(this.searchText.toLowerCase());
  }


}
