import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItems: Product;
  @Input() addedToWishlist: boolean;

  constructor(private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addProductToCart(this.productItems).subscribe(()=> {
      this.msg.sendMsg(this.productItems);
    })
  }

  handleAddedToWishlist() {
    this.wishlistService.addToWishlist(this.productItems.id).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItems.id).subscribe(() => {
      this.addedToWishlist = false;
    })
  }

}
