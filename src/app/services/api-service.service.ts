import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAllProductsData = () => {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getAllcategory = () =>{
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
}
