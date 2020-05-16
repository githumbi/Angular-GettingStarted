import { Component, OnInit } from '@angular/core';
import { Iproducts } from './products';
import { ProductService } from './product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  showImage = false;
  filterProduct = 'sample';
  errorMessage: string;

  // products here
  products: Iproducts[];
  // access products through dependancy injection
  constructor(private productService: ProductService) {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
