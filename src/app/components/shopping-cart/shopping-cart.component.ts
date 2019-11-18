import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Item[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        name: "a",
        qty: 1,
        price: 10
      },
      {
        name: "b",
        qty: 1,
        price: 12
      }
    ];

    localStorage.setItem("items", JSON.stringify(this.items));
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
    }
  }
}
