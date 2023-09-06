import { Component } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  favorites: any;
  user: any;

  constructor(private favoriteService: FavoriteService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.user$.subscribe((user) => {
      this.user = user;
    });
    this.FavoriteList()
  }

  FavoriteList() {
    this.favoriteService.findExcept(this.user.username).subscribe(
      (favorite) => {
        // Convierte el objeto favorite en un arreglo y luego agrega el campo isFavorite
        this.favorites = Object.values(favorite).map((r: any) => ({ ...r, isFavorite: false }));
        console.log(this.favorites);
      }
    );
  }

  deleteFavorite(id: any) {
    this.favoriteService.deleteFavorite(id).subscribe(favorite => {
      console.log("Favorite has been deleted");
    })
  }
}
