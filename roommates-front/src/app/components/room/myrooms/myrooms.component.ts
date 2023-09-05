import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-myrooms',
  templateUrl: './myrooms.component.html',
  styleUrls: ['./myrooms.component.css']
})
export class MyroomsComponent {

  rooms:any;

  constructor(private roomService: RoomService){

  }

  ngOnInit(){
    this.RoomList()
  }

  RoomList(){
    this.rooms = this.roomService.listRoom().subscribe(
      room => {
        this.rooms = room
        console.log(this.rooms);
      }
    )
  }

  deleteRoom(id:any){
    this.roomService.deleteRoom(id).subscribe(room => {
      console.log("Room has been deleted");
    })
  }
}
