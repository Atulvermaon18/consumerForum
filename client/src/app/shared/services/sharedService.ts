// import {Injectable} from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {forkJoin} from 'rxjs';  
 
// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
 
// @Injectable()
// export class SharedService {
 
//     constructor(private http:HttpClient) {}
 
//     register(req) {
//         return forkJoin(
           
//         );
//     }
// }

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}