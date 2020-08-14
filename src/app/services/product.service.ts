import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { productUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {

    //To Do populates product from an API and return an Observables
    return this.httpClient.get<Product[]>(productUrl);
  }
}
