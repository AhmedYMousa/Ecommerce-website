import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { $ } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items: Item[];
  deleteItem: boolean;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {

    let shoppingItems = localStorage.getItem("items");
    if (shoppingItems != null) {
      this.items = JSON.parse(shoppingItems);
    }
  }
  addItem(item: Item) {
    this.items.push(item);
    console.log(this.items);

  }
  removeItem(index, event) {
    let currentRow = event.target.closest('tr');
    let parent = currentRow.parentNode;
    parent.removeChild(currentRow);
    this.items.splice(index, 1);
    if (this.items.length == 0) {
      localStorage.removeItem("items");
    } else {
      localStorage.setItem("items", JSON.stringify(this.items));
    }
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
      this.toastr.error("Exceed item max limit: 10");
    }
  }
  grandTotal(): number {
    return this.items.reduce((total, item) => total += (item.price * item.qty), 0);
  }
}
