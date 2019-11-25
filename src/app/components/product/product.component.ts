import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  products: Product[];
  @Input() product: Product;
  private subscription: Subscription;
  constructor(private data: ProductService, private shopService: ShoppingService) { }

  ngOnInit() {
    // console.table(this.products);
    this.GetProducts();
  }

  GetProducts() {
    this.subscription = this.data.GetProducts().subscribe(
      res => this.products = res,
      err => console.log(err)
    );
  }
  addToCart(name, price, qty) {
    this.shopService.addToCart(name, price, qty);
    let count = JSON.parse(localStorage.getItem("items")) != null ? JSON.parse(localStorage.getItem("items")).length : 0;
    this.shopService.updateItemsCount(count);
  }
  viewProduct() {
    console.log("Clicked!!");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
