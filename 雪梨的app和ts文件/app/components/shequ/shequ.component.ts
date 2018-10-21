import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router"
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {
       constructor(
      // private router:ActivatedRoute,
      //   private route:Router,
      //   private http:HttpClient
    ) { }
    ngOnInit(){}
    // lesson;
    // lessonID:number;
    // ngOnInit() {
    // // this.lessonID = this.router.snapshot.params["lessonID"];
    // this.router.params.subscribe(params =>{
    // this.lessonID = params["lessonID"];
    // })
    // this.http.get('/api/lesson').subscribe((data)=>{
    // this.lesson=data;
    // console.log(data);
    // })
    // }
}
