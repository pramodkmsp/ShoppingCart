import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShoppingCart';

  searchText: any;
  constructor(private productService: ProductService) {}

  searchProduct() {
    this.productService.searchProduct(this.searchText);
  }

}
