import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private subscription: Subscription;
  private product: Product;
  constructor(private data: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetProduct();
  }
  private GetProduct() {
    let id = +this.route.snapshot.params.id;
    this.subscription = this.data.GetProduct(id).subscribe(res => {
      this.product = res;
    },
      err => console.log(err));
  }

}
