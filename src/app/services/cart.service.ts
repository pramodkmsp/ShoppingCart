import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { CartItems } from 'src/app/models/cart-item';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getCartItems(): Observable<CartItems[]> {
    return this.httpClient.get<CartItems[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItems[] = [];

        for(let item of result) {
          let productExist = false;

          for(let i in cartItems) {
            if(cartItems[i].productId === item.product.id) {
              cartItems[i].qty++;
              productExist = true;
              break;
            }
          }

          if(!productExist) {
              cartItems.push(new CartItems(item.id, item.product));
          }
        }
        return cartItems;
      }))
  }

  addProductToCart(product: Product): Observable<any> {
    return this.httpClient.post(cartUrl, {product});
  }
}
