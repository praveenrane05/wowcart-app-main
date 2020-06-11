import { Injectable } from '@angular/core';
import { Products } from "./products";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpBackend } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "cache-control": "no-cache",
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ServerUrl = environment.baseUrl;
  errorData: {};
  private http: HttpClient;
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }
  getCategory() {
    return this.http.get<any>(`${this.ServerUrl}getCategory`).pipe(
      catchError(this.handleError)
    );
  }

  saveCategory(data) {
    var data = data;
    return this.http.post<any>(`${this.ServerUrl}saveCategory`, data,httpOptions);
  }

  getProducts() {
    console.log(this.ServerUrl);
    return this.http.get<Products>(`${this.ServerUrl}getProductData`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  saveProducts(data) {
    var data = data;
    return this.http.post<any>(`${this.ServerUrl}saveProductData`, data,httpOptions);
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}
