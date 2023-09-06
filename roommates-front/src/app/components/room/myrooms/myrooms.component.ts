import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-myrooms',
  templateUrl: './myrooms.component.html',
  styleUrls: ['./myrooms.component.css']
})
export class MyroomsComponent {

  rooms: any;
  user: any;

  constructor(private roomService: RoomService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.user$.subscribe((user) => {
      this.user = user;
    });
    this.RoomList()
  }

  RoomList() {
    this.rooms = this.roomService.findbyOwner(this.user.username).subscribe(
      room => {
        this.rooms = room
        console.log(this.rooms);
      }
    )
  }

  deleteRoom(id: any) {
    this.roomService.deleteRoom(id).subscribe(room => {
      console.log("Room has been deleted");
    })
  }
}
