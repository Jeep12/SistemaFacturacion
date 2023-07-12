import { Usuario } from '../Usuario';
import { Criterio } from './Criterio';

export class CriterioPorNumero extends Criterio {
  private searchText:string;

  constructor(searchText:string){
    super();
    this.searchText  = searchText;
  }
  cumpleCriterio(usuario: Usuario): boolean {
    let numero = usuario.getPhoneNumber();
    return numero == parseInt(this.searchText);

  }


}
