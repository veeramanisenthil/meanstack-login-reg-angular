import { Component } from '@angular/core';
import { ValidateService } from "../validate.service";
import { UserService } from '../users.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";
import { User } from './../user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users: User[];
  username: String;
  email: String;
  password: String;


  constructor(private router: Router,
    private userService: UserService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService) { }

  OnRegisterSubmit() {
    var newUser = {

      username: this.username,
      email: this.email,
      password: this.password

    }
    this.userService.create(newUser).subscribe(user => {


      //register fields
      if (!this.validateService.validateRegister(user)) {
        this.flashMessage.show('please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
      this.flashMessage.show('you are registeration successfull', {
        cssClass: 'alert-success',
        timeout: 3000
      });
      this.router.navigate(['/login']);
    });
  }

}