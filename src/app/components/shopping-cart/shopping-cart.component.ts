import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { $ } from 'protractor';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Item[];
  deleteItem: boolean;
  constructor() { }

  ngOnInit() {

    let shoppingItems = JSON.parse(localStorage.getItem("items"));
    this.items = shoppingItems;
    // localStorage.setItem("items", JSON.stringify(this.items));
  }
  addItem(item: Item) {
    this.items.push(item);
    console.log(this.items);

  }
  removeItem(index, event) {
    console.log(event.target);
    console.log(event.target.closest('tr'));
    let currentRow = event.target.closest('tr');
    let parent = event.target.closest('tr').parentNode;
    parent.removeChild(currentRow);
    let arr = this.items.splice(index, 1);
    localStorage.setItem("items",JSON.stringify(arr));
  }

  decreaseQty(index) {
    let curItem = this.items[index];
    if (curItem.qty > 1) {
      curItem.qty--;
    }
    this.grandTotal();
  }
  increaseQty(index) {
    let curItem = this.items[index];
    if (curItem.qty > 0) {
      curItem.qty++;
    }
  }
  grandTotal(): number {
    return this.items.reduce((total, item) => total += item.price, 0);
  }
}
