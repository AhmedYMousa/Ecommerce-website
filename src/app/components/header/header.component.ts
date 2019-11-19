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
  constructor(private auth: AuthService, private router: Router) {
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
