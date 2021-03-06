import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseURL = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/${id}`);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseURL}/${product.id}`, product);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
