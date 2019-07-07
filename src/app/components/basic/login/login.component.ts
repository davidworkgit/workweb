import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/servers/guards/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'why-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  loading;
  username;
  password;
  returnUrl: String;

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router,
      private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authenticationService.login(this.username, this.password)
        .pipe(first())
        .subscribe(
            data => {
                console.log(data);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.password = '';
                this.loading = false;
            });
  }
}
