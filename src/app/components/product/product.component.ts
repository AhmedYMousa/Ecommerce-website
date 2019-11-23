import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  products: Product[];
  @Input() product: Product;
  private subscription: Subscription;
  constructor(private data: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
    // console.table(this.products);
    this.GetProducts();
  }

  GetProducts() {
    this.subscription = this.data.GetProducts().subscribe(res => {
      this.products = res;
    },
      err => console.log(err),
      () => console.log("Complete !!"));
  }
  addToCart(name, price, qty) {
    debugger;
    let shoppingItems = localStorage.getItem("items");
    let items = [];
    if (shoppingItems != null) {
      items = JSON.parse(shoppingItems);
    }

    items.push({ name, price, qty });
    localStorage.setItem("items", JSON.stringify(items));
    this.toastr.success('Item added successfully', 'Success');
  }
  viewProduct() {
    console.log("Clicked!!");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
