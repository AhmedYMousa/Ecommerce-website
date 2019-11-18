import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: "",
        email: "",
        password: ""
      }
    )
  }

  register() {
    console.log(this.registerForm.value);
    this.auth.Register(this.registerForm.value)
      .subscribe(
        res => {
          console.log("Response");
          console.log(res);
        },
        err => console.log(err)
      );
  }

}
