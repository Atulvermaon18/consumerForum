import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    forumList={};
    user='';
    constructor(private http: HttpClient) {
        console.log('Dashboard');
         this.http.get('http://localhost:3000/api/forum/list').subscribe(data => {
          console.log(data);
          this.forumList = data;
        });
         this.user= localStorage.getItem("name");
    }

    ngOnInit(): void {

      }


}
