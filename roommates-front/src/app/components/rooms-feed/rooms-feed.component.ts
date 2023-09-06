import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rooms-feed',
  templateUrl: './rooms-feed.component.html',
  styleUrls: ['./rooms-feed.component.css']
})
export class RoomsFeedComponent {

  constructor(private authService: AuthService, private roomService: RoomService, private router: Router) {}


  user = this.authService.getauthenticatedUser();
  rooms: any;

  ngOnInit() {
    this.RoomList();
  }

  RoomList() {
    this.rooms = this.roomService.listRoom().subscribe(
      room => {
        this.rooms = room
        console.log(this.rooms);
      }
    )
  }

  contactRoom(room: any) {
    this.router.navigate(['/chat']);
    // Lógica para contactar la habitación (puedes implementarla aquí)
    console.log('Contactando la habitación:', room.title);
  }

  toggleFavorite(room: any) {
    room.isFavorite = !room.isFavorite; // Cambia el estado de favorito
  }
  
}
