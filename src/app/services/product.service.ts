import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
Observable;
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number, limit: number): Observable<any> {
    let params = new HttpParams()
      .set('limit', limit)
      .set('skip', (page - 1) * limit);
    return this.http.get(`${this.baseUrl}`, { params });
  }

  searchProducts(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?q=${query}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  getProductsByCategory(
    category: string,
    page: number,
    limit: number
  ): Observable<any> {
    let params = new HttpParams()
      .set('limit', limit)
      .set('skip', (page - 1) * limit);
    return this.http.get(`${this.baseUrl}/category/${category}`, { params });
  }
}
