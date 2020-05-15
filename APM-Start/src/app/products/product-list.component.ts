import { Component, OnInit } from '@angular/core';
import { Iproducts } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'product list';
  imgWidth = 50;
  imgMargin = 2;
  showImage = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filterProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  filterProducts: Iproducts[];
  products: Iproducts[] = [];

  constructor(private productService: ProductService) {}

  performFilter(filterBy: string): Iproducts[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter(
      (product: Iproducts) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filterProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
