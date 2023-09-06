import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-rooms-feed',
  templateUrl: './rooms-feed.component.html',
  styleUrls: ['./rooms-feed.component.css']
})
export class RoomsFeedComponent {

  user: any;
  rooms: any[] = [];

  constructor(private authService: AuthService, private roomService: RoomService, private router: Router, private userDataService: UserDataService) {}

  isStarFilled: boolean = false;

  selectedRoom: any = null;
  
  toggleFavorite(room: any) {
  room.isFavorite = !room.isFavorite; // Cambia el estado de favorito de la habitación seleccionada

  // Verifica si se ha marcado como favorito
  if (room.isFavorite) {
      this.selectedRoom = { ...room };
      const queryParams = {
        owner: this.selectedRoom.owner,
        title: this.selectedRoom.title,
        address: this.selectedRoom.address,
        roomsAvailable: this.selectedRoom.roomsAvailable,
        price: this.selectedRoom.price,
        city: this.selectedRoom.city
      };
    // Utiliza setTimeout para redirigir después de 3 segundos
    setTimeout(() => {
      this.router.navigate(['/favorites'], { queryParams });
    }, 3000);
  }
}


  ngOnInit(){
    this.userDataService.user$.subscribe((user) => {
      this.user = user;
    });
    this.RoomList()
  }

  RoomList() {
    this.roomService.findExcept(this.user.username).subscribe(
      (room) => {
        // Convierte el objeto room en un arreglo y luego agrega el campo isFavorite
        this.rooms = Object.values(room).map((r: any) => ({ ...r, isFavorite: false }));
        console.log(this.rooms);
      }
    );
  }
  

  contactRoom(room: any) {
    this.selectedRoom = { ...room };
      const queryParams = {
        owner: this.selectedRoom.owner,
      }
    this.router.navigate(['/newmesage'],{ queryParams });
    // Lógica para contactar la habitación (puedes implementarla aquí)
    console.log('Contactando la habitación:', room.title);
  }
  
}
