import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { routerTransition } from '../router.animations';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
	login={}
	response={};
    constructor(public router: Router,public http: HttpClient) {}

    ngOnInit() {}


        onLoggedin(){
    	console.log(this.login);
        debugger
    	 this.http.post('http://localhost:3000/api/auth/login',this.login).subscribe((data)=>{
     		// this.response = data;
         	 this.http.get('http://localhost:3000/api/auth/me',{
				   headers: {'x-access-token':data.token}
					}).subscribe(resp=>{
		    	     	localStorage.setItem('isLoggedin', 'true');
		    	     	localStorage.setItem("name", resp.email);
			            this.router.navigateByUrl('/dashboard');
			         });

         });

    }
}
