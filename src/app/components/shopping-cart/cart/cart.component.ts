import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [ 
    // {id: 1, productId: 1, productName: 'Test1', qty: 3, price: 200},
    // {id: 2, productId: 2, productName: 'Test2', qty: 4, price: 150},
    // {id: 3, productId: 3, productName: 'Test3', qty: 2, price: 250},
    // {id: 4, productId: 4, productName: 'Test4', qty: 1, price: 100},
  ]

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
