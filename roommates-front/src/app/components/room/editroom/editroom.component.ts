import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-editroom',
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.css']
})
export class EditroomComponent {

  editForm!: FormGroup;
  room: any;
  id: any;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('roomID'));
    console.log(this.id);
    this.roomService.findRoom(this.id).subscribe(
      (room) => {
        this.room = room
        this.editForm = new FormGroup({
          owner: new FormControl(this.room.owner),
          title: new FormControl(this.room.title),
          address: new FormControl(this.room.address),
          roomsAvailable: new FormControl(this.room.roomsAvailable),
          price: new FormControl(this.room.price),
          city: new FormControl(this.room.city)
        });
      }
    )
  }

  onSubmit(){
    console.log(this.editForm.value)
    console.log(this.id)
    this.roomService.updateRoom(this.editForm.value, this.id).subscribe(
      (response) => {
        console.log("Room updated", response);
      },
      (error) => {
        console.error("Error updating room", error);
      }
    )
  }
}
