import { Injectable } from '@angular/core';
import { Product } from './products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [];
  constructor(private http:HttpClient) { }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products")

  }
  getProductDetails(id:number):Observable<Product>{
   return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }


}
