import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { $ } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { ShoppingService } from 'src/app/services/shopping.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('slideIn', [
      transition(":enter", [
        query("tbody > tr", [style({ transform: 'translateX(-150%)' })]),
        query("tbody > tr", stagger('150ms', [
          animate('600ms ease-in', style({ transform: 'translateX(0)' }))
        ]))
      ])
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {
  items: Item[];
  deleteItem: boolean;
  constructor(private toastr: ToastrService, private shopService: ShoppingService) { }

  ngOnInit() {
    let shoppingItems = localStorage.getItem("items");
    if (shoppingItems != null) {
      this.items = JSON.parse(shoppingItems);
    }
  }

  removeItem(index, event) {
    let result = this.shopService.removeFromCart(index, event);
    if (result == null) {
      this.toastr.error(null, "Shopping cart is empty");
      return;
    }
    let count = result.length;
    this.items = result;
    this.shopService.updateItemsCount(count);
    this.toastr.success(null, "Item removed successfully");
  }

  decreaseQty(index) {
    let curItem = this.items[index];
    if (curItem.qty > 1) {
      curItem.qty--;
    }
  }
  increaseQty(index) {
    let curItem = this.items[index];
    if (curItem.qty < 10) {
      curItem.qty++;
    } else {
      this.toastr.warning("Exceed max item limit: 10");
    }
  }
  grandTotal(): number {
    return this.items.reduce((total, item) => total += (item.price * item.qty), 0);
  }
}
