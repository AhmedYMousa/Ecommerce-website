import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "home", component: HomeComponent, data: { animation: 'home' }  },
  { path: "login", component: LoginComponent,data: { animation: 'login' } },
  {
    // canActivate apply on the current component and it's children
    // canActivateChild only applies to the children .
    path: "admin", canActivate: [AuthGuard], component: AdminComponent,
    children:
      [
        { path: "products", component: ProductComponent  },
        { path: "products/:id", component: ProductDetailsComponent }
      ],
  },
  { path: "**", component: NotFoundComponent, data: { title: "404" } }
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }