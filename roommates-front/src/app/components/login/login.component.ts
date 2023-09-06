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

username = "";
password = "";
errorMessage: string = ''; // Propiedad para mostrar mensajes de error

  constructor(private authService: AuthService, private router: Router) {};

  onLogin() {
    // Simulación de inicio de sesión (compara el correo y la contraseña con valores predefinidos)
    if (this.username === '' || this.password === '') {
      this.errorMessage = 'Por favor, completa ambos campos.';
      return; // Detener la función si falta información
    }

    // Aquí puedes realizar la autenticación utilizando this.username y this.password
    // Por ejemplo, puedes enviar estos valores a tu servicio de autenticación.

    // Simulando una autenticación exitosa
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.authService.login();
      this.router.navigate(['/create/room'])
    } else {
      // Autenticación fallida, muestra un mensaje de error
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }
}
