import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  constructor(private http: Http) {
    console.log('User Service initialized..');
  }

  //registration

  create(newUser) {
    console.log(newUser);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const reqOptions = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/api/user', newUser, reqOptions)
      .map(res => res.json());
  }
}  