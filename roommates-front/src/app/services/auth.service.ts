import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  url: string = "http://127.0.0.1:3000"

  constructor(private http: HttpClient) { }

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
    return this.http.post(this.url + '/api/user', data, this.httpOptions);
  }


}
