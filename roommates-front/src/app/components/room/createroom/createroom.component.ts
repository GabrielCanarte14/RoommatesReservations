import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css']
})
export class CreateroomComponent {
  room: any;

  roomForm = new FormGroup({
    owner: new FormControl(''),
    address: new FormControl(''),
    title: new FormControl(''),
    roomsAvailable: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
    price: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
    city: new FormControl('')
  });

  constructor(private roomService: RoomService) {

  }

  onSubmit() {
    if (this.roomForm.valid) {
      this.roomService.addRoom(this.roomForm.value).subscribe(
        (room) => {
          this.room = room;
        }
      );
    } else {
      console.log('Formulario no válido, por favor corrija los errores.');
    }
  }
}
