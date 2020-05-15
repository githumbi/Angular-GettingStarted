import { Injectable, ErrorHandler } from '@angular/core';
import { Iproducts } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

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
