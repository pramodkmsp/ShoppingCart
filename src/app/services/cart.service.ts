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
        console.log("result", result)
        let arr: any[] = result;
        let cartItems: CartItems[] = [new CartItems(arr.shift().id, arr.shift().product, 1)];
        console.log("arrayItems", cartItems);


        while(arr.length) {
          let index = cartItems.findIndex(item => {
            return item.productId == arr[arr.length-1].product.id
          })
          if(index < 0) {
            cartItems.push(new CartItems(arr[arr.length-1].id, arr[arr.length-1].product, 1));
            arr.splice(arr.length-1, 1);
          } else {
           cartItems[index].qty +=1;
            arr.splice(arr.length-1, 1);
          }
         } 
         
        

        // for(let item of result) {
        //   let productExist = false;

        //   for(let i in cartItems) {
        //     if(cartItems[i].productId === item.product.id) {
        //       cartItems[i].qty++;
        //       productExist = true;
        //       break;
        //     }
        //   }

        //   if(!productExist) {
        //       cartItems.push(new CartItems(item.id, item.product));
        //   }
        // }
        console.log(cartItems);
        return cartItems;
      }))
  }

  addProductToCart(product: Product): Observable<any> {
    return this.httpClient.post(cartUrl, {product});
  }
}
