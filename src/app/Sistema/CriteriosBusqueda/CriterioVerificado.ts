import { Usuario } from '../Usuario';
import { Criterio } from './Criterio';

export class CriterioVerificado extends Criterio {


  constructor(){
    super();
  }
  cumpleCriterio(usuario: Usuario): boolean {
    return usuario.getVerify();

  }


}
