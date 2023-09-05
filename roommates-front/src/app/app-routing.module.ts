import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component'
import { FavoriteRoomsComponent } from './components/favorite-rooms/favorite-rooms.component'
import { ChatComponent } from './components/chat/chat.component';
import { MyroomsComponent } from './components/room/myrooms/myrooms.component';
import { CreateroomComponent } from './components/room/createroom/createroom.component';
import { EditroomComponent } from './components/room/editroom/editroom.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "favorites", component: FavoriteRoomsComponent },
  { path: "chat", component: ChatComponent },
  { path: '', component: MyroomsComponent },
  { path: 'create/room', component: CreateroomComponent },
  { path: 'edit/room/:roomID', component: EditroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
