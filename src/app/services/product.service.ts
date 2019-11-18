import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  GetProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://localhost:5001/api/products");
  }
  GetProduct(id: number): Observable<Product> {
    return this.http.get<Product>("https://localhost:5001/api/products/" + id);
  }
}
