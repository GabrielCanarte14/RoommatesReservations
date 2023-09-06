import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: any;
  user: any;

  constructor(private messageService: MessageService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.user$.subscribe((user) => {
      this.user = user;
    });
    this.MessageList()
  }

  MessageList() {
    this.messageService.findExcept(this.user.username).subscribe(
      (message) => {
        // Convierte el objeto message en un arreglo y luego agrega el campo isMessage
        this.messages = Object.values(message).map((r: any) => ({ ...r, isFavorite: false }));
        console.log(this.messages);
      }
    );
  }

  deleteMessage(id: any) {
    this.messageService.deleteMessage(id).subscribe(message => {
      console.log("Message has been deleted");
    })
  }
}
