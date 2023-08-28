import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSpaceComponent } from './components/new-space/new-space.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableRoomComponent } from './components/available-room/available-room.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FavoriteRoomsComponent } from './components/favorite-rooms/favorite-rooms.component';
import { ChatComponent } from './components/chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    FavoriteRoomsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NewSpaceComponent,
    AvailableRoomComponent,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
