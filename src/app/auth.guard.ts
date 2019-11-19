import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  /**
   *
   */
  IsLoggedIn: boolean;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.loginStatus.subscribe(res => this.IsLoggedIn = res);
  }

  canActivate(): boolean {
    if (this.IsLoggedIn) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }

  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}
