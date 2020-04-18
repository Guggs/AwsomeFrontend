import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Auth } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  authUrl;

  constructor( private http: HttpClient) {
    this.authUrl = 'http://localhost:8080/auth/';
 }

 public getAuth(name): Observable<Auth>{
  console.log("Name: ",name);
  return this.http.get<Auth>(this.authUrl+name);
}
}
