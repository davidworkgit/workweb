import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/servers/guards/authentication.service';
import { User } from './modules/user';
import { Router } from '@angular/router';

@Component({
  selector: 'why-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  currentUser: User;

  constructor( private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.
    subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
