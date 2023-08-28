import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



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
  constructor(private snackBar: MatSnackBar) { }
  addToFavorites(): void {
    const config: MatSnackBarConfig = {
      duration: 3000, 
      panelClass: ['custom-snackbar'],
    };
  
    const message = `Danilo, has agregado la Habitacion de Gabriel a tus favoritos`;
  
    this.snackBar.open(message, undefined, config);
  }
  addToFavorites2(): void {
    const config: MatSnackBarConfig = {
      duration: 3000, 
      panelClass: ['custom-snackbar'],
    };
  
    const message = `Danilo, has agregado la Habitacion de Maria a tus favoritos`;
  
    this.snackBar.open(message, undefined, config);
  }
  
  
}
