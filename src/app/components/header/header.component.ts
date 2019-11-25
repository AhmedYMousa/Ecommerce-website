import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checkLogin: boolean;
  shoppingCartItems: number = 0;
  constructor(private auth: AuthService, private router: Router, private shopService: ShoppingService) {


    this.shopService.ItemsCount.subscribe(res => this.shoppingCartItems = res);
  }

  ngOnInit() {
    let shoppingItems = localStorage.getItem("items");
    if (shoppingItems != null) {
      this.shoppingCartItems = JSON.parse(shoppingItems).length;
    }
    this.auth.loginStatus.subscribe(res => this.checkLogin = res);
    this.shopService.updateItemsCount(this.shoppingCartItems);
  }
  logOut() {
    this.auth.changeLoginStatus(false);
    this.auth.Logout();
    this.router.navigate(['/home']);
  }


}
