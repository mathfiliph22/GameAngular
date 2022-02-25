import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/login";

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders ({'Content-type': 'application/json'}),
    observe: 'response'
  }
  login(user: Login): Observable<any> {
    return this.httpclient.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders ({'Content-type': 'application/json'}),
      observe: "response"

    })
  }
}
