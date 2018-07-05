import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  user: any;
  constructor(private http: Http) {
    console.log('Authentication Service is initialised...')
  }


  authenticateUser(user) {
    console.log(user);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/authenticate', user, { headers: headers })
      .map(res => res.json());


  }

} 
