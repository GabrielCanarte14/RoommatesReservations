import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component'
import { FavoriteRoomsComponent } from './components/favorite-rooms/favorite-rooms.component'
import { ChatComponent } from './components/chat/chat.component';
import { MyroomsComponent } from './components/room/myrooms/myrooms.component';
import { CreateroomComponent } from './components/room/createroom/createroom.component';
import { EditroomComponent } from './components/room/editroom/editroom.component';
import { LoginComponent } from './components/login/login.component';
import { RoomsFeedComponent } from './components/rooms-feed/rooms-feed.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "favorites", component: FavoriteRoomsComponent },
  { path: "listFav", component: FavoritesComponent },
  { path: "chat", component: ChatComponent },
  { path: '', component: LoginComponent },
  { path: 'create/room', component: CreateroomComponent },
  { path: 'edit/room/:roomID', component: EditroomComponent },
  { path: 'login', component: LoginComponent},
  { path: 'feed', component: RoomsFeedComponent},
  { path: 'rooms', component: MyroomsComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'newmesage', component: NewMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
