import { Component, OnInit } from '@angular/core';
import { Iproducts } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Iproducts[];
  constructor() {}

  ngOnInit(): void {}
}
