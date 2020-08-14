import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

function symbolValidator(control) {
    if(control.hasError('required')) return null;
    if(control.hasError('minlength')) return null;

    if(control.value.indexOf('@') > -1) {
      return null;
    } else {
      return { symbol: true};
    }
}

function passwordMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({passwordMatch: true});
  } else {
    confirmPassword.setErrors(null);
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required , symbolValidator, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: passwordMatchValidator
    })
  }

  register(){
    console.log(this.registerForm);
  }
}
