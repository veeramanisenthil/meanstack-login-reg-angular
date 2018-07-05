import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthenticationService,
    private router: Router,
    private flashMessage: FlashMessagesService

  ) { }

  ngOnInit() {
  }
  OnLoginSubmit(authenticateUser) {
    console.log('login');
    var user = {
      username: this.username,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data => {
      console.log('console', data);
      if (data.length) {

        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('user_id', data[0]._id)

        this.flashMessage.show('you are logged in', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        this.router.navigate(['calculate']);
      } else {
        this.flashMessage.show('wrong username or password', {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['/login']);
      }
    }, (error) => {
      console.log(error);
    });
  }
}
