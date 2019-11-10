import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    NotFoundComponent,
    LoginComponent,
    AdminComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
