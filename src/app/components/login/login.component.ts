import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  IsValid: boolean;
  loginForm: FormGroup
  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.IsValid = true;
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ''
      }
    )
  }

  OnSubmit() {
    let result = this.auth.Login(this.loginForm.value);
    if (result) {
      this.router.navigate(["/home"]);
    }
    this.IsValid = false;
  }

}
