import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url: string = "http://127.0.0.1:3000"
  constructor(private http: HttpClient) { }

  listRoom() {
    return this.http.get(this.url + '/api/rooms');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addRoom(data: any) {
    return this.http.post(this.url + '/api/rooms', data, this.httpOptions);
  }

  findRoom(id: any) { 
    return this.http.get(this.url + '/api/rooms/' + id);
  }

  updateRoom(data: any, id: any) { 
    return this.http.put(this.url + '/api/rooms/' + id, data, this.httpOptions);
  }

  deleteRoom(id: any) {
    return this.http.delete(this.url + '/api/rooms/' + id);
   }
}
