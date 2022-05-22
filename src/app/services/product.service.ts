import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // url
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) {}

  // get product list
  getProducts(categories: string | null): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map((response) => response._embedded.products));
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
