import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../models/item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  items: Item[];
  private ItemsCountSource = new BehaviorSubject<number>(0);
  ItemsCount = this.ItemsCountSource.asObservable();

  constructor(private toastr: ToastrService) {
    this.items = JSON.parse(localStorage.getItem("items"));
  }

  getCartItems(): Item[] {
    return JSON.parse(localStorage.getItem("items"));
  }

  addToCart(name, price, qty) {
    let shoppingItems = localStorage.getItem("items");
    let items = [];
    if (shoppingItems != null) {
      items = JSON.parse(shoppingItems);
    }

    items.push({ name, price, qty });
    localStorage.setItem("items", JSON.stringify(items));
    this.toastr.success('Item added successfully', 'Success');
  }

  removeFromCart(index, event): Item[] {
    let curItems = this.getCartItems();
    if (curItems.length == 0) {
      localStorage.removeItem("items");
      return null;
    } else {
      curItems.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(curItems));
      let currentRow = event.target.closest('tr');
      let parent = currentRow.parentNode;
      parent.removeChild(currentRow);
      return curItems;
    }

  }
  updateItemsCount(step) {
    this.ItemsCountSource.next(step);
  }
}
