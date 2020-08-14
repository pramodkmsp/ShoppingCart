import { CartItems } from './cart-item';
import { CartItemComponent } from '../components/shopping-cart/cart/cart-item/cart-item.component';

describe('Cart', () => {
  it('should create an instance', () => {
    expect(new CartItems()).toBeTruthy();
  });
});
