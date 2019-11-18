import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  products: Product[];
  @Input() product: Product;
  private subscription: Subscription;
  constructor(private data: ProductService) { }

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
  addToCart(productId) {
    console.log(productId);

  }
  viewProduct() {
    console.log("Clicked!!");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
