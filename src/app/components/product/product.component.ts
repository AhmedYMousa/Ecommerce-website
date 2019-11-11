import { Component, OnInit } from '@angular/core';
import { ProductsMock } from '../../mocks/products-mock';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = ProductsMock;
  constructor() { }

  ngOnInit() {
    console.table(this.products);
  }

}
