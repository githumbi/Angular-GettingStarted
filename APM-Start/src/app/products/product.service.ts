import { Injectable, ErrorHandler } from '@angular/core';
import { Iproducts } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproducts[]> {
    return this.http.get<Iproducts[]>(this.productUrl).pipe(
      tap((data) => console.log('all: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // get specific product
  getProduct(id: number): Observable<Iproducts | undefined> {
    return this.getProducts().pipe(
      map((products: Iproducts[]) => products.find((p) => p.productId === id))
    );
  }
  // exception handling
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
