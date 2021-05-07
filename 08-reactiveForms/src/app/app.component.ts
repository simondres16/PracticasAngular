import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { NombreNoPermitido } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // registrationForm = new FormGroup(
  //   {
  //     userName: new FormControl(),
  //     password: new FormControl(),
  //     confirmPassword: new FormControl(),
  //     address: new FormGroup(
  //       {
  //         city: new FormControl(),
  //         state: new FormControl(),
  //         postalCode: new FormControl()
  //       }
  //     )
  //   }
  // );

  constructor(private _formBuilder:FormBuilder){}

  registrationForm:FormGroup;

  ngOnInit() {
    this.registrationForm = this._formBuilder.group(
      {
        userName:['',[Validators.required , Validators.minLength(3),NombreNoPermitido]],
        password:[''],
        confirmPassword:[''],
        address:this._formBuilder.group(
          {
              city:[''],
              state:[''],
              postalCode:['']
          }
        ),
        alternativeEmails : this._formBuilder.array([])
      },{validator:PasswordValidator}
    );
  }

  load(){
    this.registrationForm.patchValue(
      {
        userName: 'Simon',
        password: '1234',
        confirmPassword: '1234',
        address:{
          city: 'Bogota',
          state: 'Bogota',
          postalCode: 57
        }
      }
    );
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  get alternativeEmails(){
    return this.registrationForm.get('alternativeEmails') as FormArray;
  }

  addAlternativeEmail(){
    console.log(this.alternativeEmails);
    this.alternativeEmails.push(this._formBuilder.control(''));
  }
}
