import { Product } from './product';
import { ProductItemComponent } from '../components/shopping-cart/product-list/product-item/product-item.component';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
