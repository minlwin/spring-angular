import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = `${environment.baseUrl}/category`

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(API)
  }

  save(data: any) {
    return data.id > 0 ? this.http.put<any>(API, data) : this.http.post<any>(API, data)
  }
}
