import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  redirectToFeed() {
    // Redirige al usuario a la vista de Feed
    this.router.navigate(['/feed']); 
  }
  redirectToMyrooms() {
    // Redirige al usuario a la vista de Feed
    this.router.navigate(['/rooms']); 
  }
  redirectToCreate() {
    // Redirige al usuario a la vista de Feed
    this.router.navigate(['/create/room']); 
  }
  redirectToLogin() {
    // Redirige al usuario a la vista de Feed
    this.router.navigate(['/']); 
  }
  redirectToFavorito() {
    // Redirige al usuario a la vista de Feed
    this.router.navigate(['/listFav']); 
  }
  redirectToMessages() {
    // Redirige al usuario a la vista de Feed
    this.router.navigate(['/messages']); 
  }
}
