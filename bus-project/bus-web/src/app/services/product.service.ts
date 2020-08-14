import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API } from './conf';

const API = `${BASE_API}/products`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(API)
  }

  findById(id: string) {
    return this.http.get<any>(`${API}/${id}`)
  }

  create(data: any) {
    return this.http.post<any>(API, data)
  }
}
