import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { CreateProductModel, ProductModel, updateProductModel } from "../entities/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  readonly Api_url = 'https://api.escuelajs.co/api/v1/products';
  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    const url = `${this.Api_url}`;
    const response = this.httpClient.get<ProductModel[]>(url);
    return response;
  }
  store(producto: CreateProductModel):Observable<CreateProductModel>{
    const url = `${this.Api_url}`;
    const response = this.httpClient.post<CreateProductModel>(url, producto);
    return response;
  }
  update(id: ProductModel['id'], producto: updateProductModel):Observable<updateProductModel> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.put<updateProductModel>(url, producto);
    return response;
  }
  getOne(id: ProductModel['id']): Observable<ProductModel> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.get<ProductModel>(url);
    return response;
  }
  destroy(id: ProductModel['id']): Observable<boolean> {
    const url = `${this.Api_url}/${id}`;
    const response = this.httpClient.delete<any>(url).pipe(map((response:{rta: boolean})=>{
      return response.rta
    }));
    return response;
  }
}
