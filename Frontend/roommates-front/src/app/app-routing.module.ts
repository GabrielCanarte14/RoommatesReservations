import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvailableRoomComponent } from './components/available-room/available-room.component';
import { NewSpaceComponent } from './components/new-space/new-space.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component'
import { FavoriteRoomsComponent } from './components/favorite-rooms/favorite-rooms.component'
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { path: "available-room", component: AvailableRoomComponent },
  { path: "new-space", component: NewSpaceComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "favorites", component: FavoriteRoomsComponent },
  { path: "chat", component: ChatComponent },
  { path: "**", redirectTo: "register" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
