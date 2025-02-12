import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({

    email : new FormControl('' , [Validators.required,Validators.email ]),
    password : new FormControl('' , [Validators.required, Validators.minLength(8)]),
  });

  submitForm(){
    console.log(this.loginForm.value);
    this.loginForm.reset({});
  }
  get f(){
    return this.loginForm.controls; 
  }

}
