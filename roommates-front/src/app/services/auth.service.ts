import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  authenticatedUser=null
  url: string = "http://127.0.0.1:3000"

  constructor(private http: HttpClient) { }

  setauthenticatedUser(user:any){
    this.authenticatedUser=user;
  }
  getauthenticatedUser(){
    return this.authenticatedUser;
  }
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  createUser(data: any) {
    return this.http.post(this.url + '/api/users', data, this.httpOptions);
  }

  listUsers() {
    return this.http.get(this.url + '/api/users');
  }

}
