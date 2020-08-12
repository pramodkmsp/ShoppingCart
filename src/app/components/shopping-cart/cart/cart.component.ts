import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = []

  cartTotal = 0; 
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    })
  }

  addProductToCart(product: Product) {

    let productExist = false;

    for(let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    if(!productExist) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(items => {
      this.cartTotal += (items.qty * items.price);
    })
  }

}
