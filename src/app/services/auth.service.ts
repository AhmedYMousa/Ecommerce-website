import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  Register() {

  }
  Login(LoginData): boolean {
    if (LoginData.email == "ahmed@x.com"
      && LoginData.password == "123") {
      localStorage.setItem("token", LoginData.email);
      return true;
    }
    return false;
  }
  Logout() {
    if (this.IsLoggedIn) {
      localStorage.removeItem("token");
    }
  }

  IsLoggedIn(): boolean {
    // !!localStorage.getItem("token") return boolean value using !!
    return !!localStorage.getItem("token");
  }
}
