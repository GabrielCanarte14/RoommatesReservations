import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent {

  message: any;

  messageForm = new FormGroup({
    to_user: new FormControl(''),
    content: new FormControl(''),
    from_user: new FormControl(''),
  });
  
  constructor(private messageService: MessageService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {

        this.messageForm.patchValue({
          to_user: params['owner'],
        });

    });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      this.messageService.addMessage(this.messageForm.value).subscribe(
        (message) => {
          this.message = message;
        }
      );
    } else {
      console.log('Formulario no válido, por favor corrija los errores.');
    }
  }
}
