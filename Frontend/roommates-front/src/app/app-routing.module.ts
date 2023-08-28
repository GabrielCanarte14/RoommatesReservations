import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvailableRoomComponent } from './components/available-room/available-room.component';
import { NewSpaceComponent } from './components/new-space/new-space.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component'

const routes: Routes = [
  { path: "available-room", component: AvailableRoomComponent },
  { path: "new-space", component: NewSpaceComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "**", redirectTo: "register" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
