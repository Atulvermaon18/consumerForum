import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes , Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
	
	register={};
    constructor(public http: HttpClient, public router: Router) {}

    signup(){
    	console.log(this.register);
        debugger
    	 this.http.post('http://localhost:3000/api/auth/register',this.register).subscribe(data=>{
             alert(data)
             this.router.navigateByUrl('/dashboard');
         });

    }

    ngOnInit() {}
}
