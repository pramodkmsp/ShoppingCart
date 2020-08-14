import { Injectable } from '@angular/core';

import { wishlistUrl} from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpClient: HttpClient) { }

  getWishlist() {
    return this.httpClient.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = [];
        result.forEach(items => productIds.push(items.id));
        return productIds;
      })
    )
  }

  addToWishlist(productId) {
    return this.httpClient.post(wishlistUrl, {id: productId});
  }

  removeFromWishlist(productId) {
    return this.httpClient.delete(wishlistUrl + '/' + productId);
  }
}
