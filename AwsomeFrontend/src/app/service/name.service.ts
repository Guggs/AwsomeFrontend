import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NameService {

  private usersUrl: string;

  constructor( private http: HttpClient) {
      this.usersUrl = 'http://localhost:8080/name';
   }

  public getName(): Observable<Person[]>{
    return this.http.get<Person[]>(this.usersUrl);
  }

}
