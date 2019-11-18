import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-cart.routing';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
    declarations: [
        ShoppingCartComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule
    ]
})
export class ShoppingCartModule { }