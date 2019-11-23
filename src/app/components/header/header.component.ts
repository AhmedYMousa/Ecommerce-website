import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogin: boolean;
  shoppingCartItems: number = 0;
  constructor(private auth: AuthService, private router: Router) {
    let shoppingItems = localStorage.getItem("items");
    if (shoppingItems != null) {
      this.shoppingCartItems = JSON.parse(shoppingItems).length;
    }

  }

  ngOnInit() {
    this.auth.loginStatus.subscribe(res => this.checkLogin = res);
  }
  logOut() {
    this.auth.changeLoginStatus(false);
    this.auth.Logout();
    this.router.navigate(['/home']);
  }


}
