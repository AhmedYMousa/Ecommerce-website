import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  Register() {

  }
  Login() {

  }

  IsLoggedIn() {
    // !!localStorage.getItem("token") return boolean value using !!
    return !!localStorage.getItem("token");
  }
}
