import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product 1', 'This is the product 1 description. This product is very cool', 100),
    new Product(2, 'Product 2', 'This is the product 2 description. This product is very cool', 150),
    new Product(3, 'Product 3', 'This is the product 3 description. This product is very cool', 50),
    new Product(4, 'Product 4', 'This is the product 4 description. This product is very cool', 200),
    new Product(5, 'Product 5', 'This is the product 5 description. This product is very cool', 100),
    new Product(6, 'Product 6', 'This is the product 6 description. This product is very cool', 150),
    new Product(7, 'Product 7', 'This is the product 7 description. This product is very cool', 250),
    new Product(8, 'Product 8', 'This is the product 8 description. This product is very cool', 150),
  ]
  constructor() { }

  getProducts(): Product[] {

    //To Do populates product from an API and return an Observables
    return this.products;
  }
}
