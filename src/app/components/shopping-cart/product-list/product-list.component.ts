import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  filteredProducts: Product[] = [];
  wishlist: number[] = [];

  constructor(private productService: ProductService,
    private wishlistService: WishlistService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
    this.productService.searchText.subscribe(text => {
      console.log(text);
      if(text) {
        this.filteredProducts = this.productList.filter(product => {
          console.log(product.name.toLowerCase().includes(text.toLowerCase()));
          
          if(product.name.toLowerCase().includes(text.toLowerCase())) {
            return product;
          };
        })
      } else {
        this.filteredProducts = this.productList;
      }
    })
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      this.productList = products;
      this.filteredProducts = this.productList;
    });
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds);
      this.wishlist = productIds;
    })
  }

}
