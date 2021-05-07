import { ValidatorFn, AbstractControl } from '@angular/forms';

export function NombreNoPermitido(Control: AbstractControl):{[key:string]:any|null}{
  const cadena = /admin/.test(Control.value);
  return cadena ? {'noPermitido':{value:Control.value}}:null;
}
