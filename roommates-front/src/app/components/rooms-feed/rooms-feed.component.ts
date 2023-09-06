import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-rooms-feed',
  templateUrl: './rooms-feed.component.html',
  styleUrls: ['./rooms-feed.component.css']
})
export class RoomsFeedComponent {

  constructor(private authService: AuthService, private roomService: RoomService) {}

  user = this.authService.getauthenticatedUser();
  
  ngOnInit(){
    console.log(this.user);
  }

}
