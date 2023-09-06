import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:any;
  
  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
    name: new FormControl(''),
    city: new FormControl(''),
    age: new FormControl('')
  });
  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.userForm.valid) {
      this.authService.createUser(this.userForm.value).subscribe(
        (user) => {
          this.user = user;
        }
      );
      console.log('Usuario creado');
    } else {
      console.log('Formulario no válido, por favor corrija los errores.');
    }
  }

}
