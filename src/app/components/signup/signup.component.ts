import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  hobbiesArray: String[] = ['Reading', 'Writing', 'Singing'];

  signupForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    number: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    gender: new FormControl('', [Validators.required]),
    accept: new FormControl(false, [Validators.requiredTrue]),

    hobbies: new FormArray([], [Validators.required]),

    // number : new FormControl('' , [Validators.required, Validators.pattern('[A-Za-z]{3}"')]),
    // email : new FormControl('' , [Validators.required, Validators.pattern('[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$')]),
    // password : new FormControl('' , [Validators.required, Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")])
  });

  onChange(e: any) {
    const value = e.target.value;
    const checked = e.target.checked;

    console.log(value, checked);

    const checkedArray = this.signupForm.get('hobbies') as FormArray;

    if (checked) {
      checkedArray.push(new FormControl(value));
    } else {
      let i: number = 0;
      checkedArray.controls.forEach((item) => {
        if (item.value == value) {
          checkedArray.removeAt(i);
        }
        i++;
      });
    }
  }

  submitData() {
    console.log(this.signupForm.value);
    this.signupForm.reset({});
    // this.signupForm.get('hobbies')?.setValue([])
    // this.hobbiesArray.forEach()
    // this.hobbiesArray.reset({})
  }

  get f() {
    return this.signupForm.controls;
  }
}
