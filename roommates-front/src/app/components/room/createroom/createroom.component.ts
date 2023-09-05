import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent {
  room:any;
  
  roomForm = new FormGroup({
    owner: new FormControl(''),
    address: new FormControl(''),
    title: new FormControl(''),
    roomsAvailable: new FormControl(''),
    price: new FormControl(''),
    city: new FormControl('')
  });

  constructor(private roomService: RoomService){

  }

  onSubmit(){
    this.roomService.addRoom(this.roomForm.value).subscribe(
      room => {
        this.room = room
      }
    )
  }
}
