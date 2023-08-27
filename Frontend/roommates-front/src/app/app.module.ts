import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSpaceComponent } from './components/new-space/new-space.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvailableRoomComponent } from './components/available-room/available-room.component';



@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NewSpaceComponent,
    AvailableRoomComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
