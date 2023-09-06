import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FavoriteRoomsComponent } from './components/favorite-rooms/favorite-rooms.component';
import { ChatComponent } from './components/chat/chat.component';
import { CreateroomComponent } from './components/room/createroom/createroom.component';
import { EditroomComponent } from './components/room/editroom/editroom.component';
import { MyroomsComponent } from './components/room/myrooms/myrooms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RoomsFeedComponent } from './components/rooms-feed/rooms-feed.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    FavoriteRoomsComponent,
    ChatComponent,
    CreateroomComponent,
    EditroomComponent,
    MyroomsComponent,
    NavbarComponent,
    LoginComponent,
    RoomsFeedComponent,
    FavoritesComponent,
    NewMessageComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
