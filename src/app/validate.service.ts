import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.username == undefined || user.email == undefined || user.password == undefined) {
    } else {
      return true;
    }
  }
}