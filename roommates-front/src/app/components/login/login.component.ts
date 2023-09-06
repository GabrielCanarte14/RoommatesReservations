import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


errorMessage: string = ''; // Propiedad para mostrar mensajes de error
users: any

ngOnInit(){
  this.UserList()
}

UserList(){
  this.users = this.authService.listUsers().subscribe(
    user => {
      this.users = user
      console.log(this.users);
    }
  )
}


  user:any;
  
  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  
  constructor(private authService: AuthService, private router: Router) {};

  onLogin() {
    const username = this.userForm.get("username")?.value;
    const password = this.userForm.get("password")?.value;
    // Simulación de inicio de sesión (compara el correo y la contraseña con valores predefinidos)
    if (username === '' || password === '') {
      this.errorMessage = 'Por favor, completa ambos campos.';
      return; // Detener la función si falta información
    }

    // Aquí puedes realizar la autenticación utilizando this.username y this.password
    // Por ejemplo, puedes enviar estos valores a tu servicio de autenticación.

    // Simulando una autenticación exitosa
    const userAuth = this.users.find((u: { username: string | null | undefined; password: string | null | undefined; }) => u.username === username && u.password === password);
    if (userAuth) {
      this.authService.login();
      this.router.navigate(['/create/room'])
    } else {
      // Autenticación fallida, muestra un mensaje de error
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }
}
