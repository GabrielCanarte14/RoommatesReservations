import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url: string = "http://127.0.0.1:3000"
  constructor(private http: HttpClient) { }

  listMessage() {
    return this.http.get(this.url + '/api/messages');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addMessage(data: any) {
    return this.http.post(this.url + '/api/messages', data, this.httpOptions);
  }

  findMessage(id: any) { 
    return this.http.get(this.url + '/api/messages/' + id);
  }

  findbyOwner(id: any) {
    return this.http.get(this.url + '/api/messages/byowner/' + id);
  }

  findExcept(id: any) {
    return this.http.get(this.url + '/api/messages/except_owner/' + id);
  }

  deleteMessage(id: any) {
    return this.http.delete(this.url + '/api/messages/' + id);
   }
}
