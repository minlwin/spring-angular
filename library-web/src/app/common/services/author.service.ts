import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  search(form: any): Observable<any[]> {
    return from([this.list])
  }

  private list: any[] = [
    {
      id: 1,
      penName: "Nay Win Ni",
      name: "Aung Aung",
      gender: "Male",
      country: "Myanmar",
      dob: "1990-01-01",
      title: "Teacher"
    },
  ]
}
