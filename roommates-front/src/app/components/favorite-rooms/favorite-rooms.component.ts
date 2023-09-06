import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-favorite-rooms',
  templateUrl: './favorite-rooms.component.html',
  styleUrls: ['./favorite-rooms.component.css']
})
export class FavoriteRoomsComponent {

  selectedRoom: any;
  favorite: any;

  favoriteForm = new FormGroup({
    owner: new FormControl(''),
    address: new FormControl(''),
    title: new FormControl(''),
    roomsAvailable: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
    price: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
    city: new FormControl(''),
    interested: new FormControl('')
  });
  
  constructor(private favoriteService: FavoriteService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['owner'] !== null && params['title'] !== null) {
        this.favoriteForm.patchValue({
          owner: params['owner'],
          title: params['title'],
          address: params['address'] || '',
          roomsAvailable: params['roomsAvailable'] || '',
          price: params['price'] || '',
          city: params['city'] || ''
        });
      }
    });
  }
  



  onSubmit() {
    if (this.favoriteForm.valid) {
      this.favoriteService.addFavorite(this.favoriteForm.value).subscribe(
        (favorite) => {
          this.favorite = favorite;
        }
      );
    } else {
      console.log('Formulario no válido, por favor corrija los errores.');
    }
  }
}
