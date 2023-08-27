import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-available-room',
  templateUrl: './available-room.component.html',
  styleUrls: ['./available-room.component.css'],
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule
  ]
})
export class AvailableRoomComponent {

}
