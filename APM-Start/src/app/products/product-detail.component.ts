import { Component, OnInit } from '@angular/core';
import { Iproducts } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  imgWidth = 160;
  imgMargin = 50;
  errorMessage: string;
  product: Iproducts | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProductx(id);
    }
  }
  getProductx(id: number) {
    this.productService.getProduct(id).subscribe({
      next: (product) => (this.product = product),
      error: (err) => (this.errorMessage = err),
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
