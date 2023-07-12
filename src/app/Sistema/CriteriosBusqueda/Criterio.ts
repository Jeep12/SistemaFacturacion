import { Usuario } from "../Usuario";

export abstract class Criterio  {
  abstract cumpleCriterio(usuario:Usuario): boolean;

}
