import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private product: Product = {
    id: 0,
    description: "",
    image: "",
    name: "",
    price: 0
  };

  private modalContainer = "#modal-container";
  private overlay = "#overlay";

  constructor(private data: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.params.id;
    this.GetProduct(id);
  }
  private GetProduct(id: number) {
    this.data.GetProduct(id).subscribe(res => {
      this.product = res;
    },
      err => console.log(err));
  }
  showModal(event) {
    console.log("Show");
    document.querySelector(this.modalContainer).className = "";
    document.querySelector(this.overlay).className = "";
    document.querySelector(this.modalContainer).classList.add('show');
    document.querySelector(this.overlay).classList.add('show');
  }

  removeModal() {
    console.log("Removed");
    document.querySelector(this.modalContainer).className = "";
    document.querySelector(this.overlay).className = "";
    document.querySelector(this.modalContainer).classList.add('hidden');
    document.querySelector(this.overlay).classList.add('hidden');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
