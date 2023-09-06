import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  url: string = "http://127.0.0.1:3000"
  constructor(private http: HttpClient) { }

  listFavorite() {
    return this.http.get(this.url + '/api/favorites');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  addFavorite(data: any) {
    return this.http.post(this.url + '/api/favorites', data, this.httpOptions);
  }

  findFavorite(id: any) { 
    return this.http.get(this.url + '/api/favorites/' + id);
  }

  findbyOwner(id: any) {
    return this.http.get(this.url + '/api/favorites/byowner/' + id);
  }

  findExcept(id: any) {
    return this.http.get(this.url + '/api/favorites/except_owner/' + id);
  }

  deleteFavorite(id: any) {
    return this.http.delete(this.url + '/api/favorites/' + id);
   }
}
