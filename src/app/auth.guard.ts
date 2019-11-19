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
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.auth.IsLoggedIn()) {
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
