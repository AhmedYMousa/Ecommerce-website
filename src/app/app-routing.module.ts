import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: HomeComponent, data: { animation: 'home' } },
  { path: "login", component: LoginComponent, data: { animation: 'comp' } },
  { path: "register", component: RegisterComponent, data: { animation: 'comp' } },
  { path: "products", component: ProductComponent, data: { animation: "comp" }, canActivate: [AuthGuard] },
  { path: "products/:id", component: ProductDetailsComponent, data: { animation: "comp" }, canActivate: [AuthGuard] },
  {
    // canActivate apply on the current component and it's children
    // canActivateChild only applies to the children .
    path: "admin", canActivate: [AuthGuard], component: AdminComponent,
    children:
      [

      ],

  },
  { path: "**", component: NotFoundComponent, data: { title: "404" } }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
