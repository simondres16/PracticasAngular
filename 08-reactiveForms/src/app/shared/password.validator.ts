import { ValidatorFn, AbstractControl } from '@angular/forms';

export function PasswordValidator(Control: AbstractControl):{[key:string]:boolean|null}{
  const password = Control.get('password');
  const confirmPassword = Control.get('confirmPassword');
  return password && confirmPassword && password.value !== confirmPassword.value ? {'encontrado':true}:null;
}
