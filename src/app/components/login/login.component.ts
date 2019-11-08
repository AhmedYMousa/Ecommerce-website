import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  IsValid: boolean;
  loginForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.IsValid = false;
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ''
      }
    )
  }

  OnSubmit() {
    if (this.loginForm.controls.email.value == "ahmed@x.com"
      && this.loginForm.controls.password.value == "123") {
      localStorage.setItem("token", this.loginForm.controls.email.value);
    }

  }

}
