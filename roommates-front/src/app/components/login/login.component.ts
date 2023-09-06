import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  errorMessage: string = '';
  users: any

  ngOnInit() {
    this.UserList()
  }

  UserList() {
    this.users = this.authService.listUsers().subscribe(
      user => {
        this.users = user
        console.log(this.users);
      }
    )
  }

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router, private userDataService: UserDataService) { };

  onLogin() {
    const username = this.userForm.get("username")?.value;
    const password = this.userForm.get("password")?.value;
    if (username === '' || password === '') {
      this.errorMessage = 'Por favor, completa ambos campos.';
      return;
    }

    const userAuth = this.users.find((u: { username: string | null | undefined; password: string | null | undefined; }) => u.username === username && u.password === password);
    if (userAuth) {
      this.authService.login();
      this.authService.setauthenticatedUser(userAuth);
      this.userDataService.setUser(userAuth);
      this.router.navigate(['/feed']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }
}
