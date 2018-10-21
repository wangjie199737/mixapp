import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-lessondetail',
  templateUrl: './lessondetail.component.html',
  styleUrls: ['./lessondetail.component.css']
})
export class LessondetailComponent implements OnInit {
  // flag:boolean=true;
  num=1;
  jsonObject={'hao':'ni','haihi':'jaih'};
  date=2018-10-1;
  change(event){
    // console.log(event);
    this.num=event.target.value;
  }
  //上面的change还可以写成这样的，然后后面的change(1)\change(2)\change(3)
  // change(d){
  //   this.num=d;
  // }
  constructor(
    private http:HttpClient,
    private router:ActivatedRoute
  ) { }
  lessonId:number;
  lesson;

  ngOnInit() {
  
    this.lessonId = this.router.snapshot.params['lessonId'];
    //响应式编程
    this.http.get('/api/lesson/'+this.lessonId).pipe(map(data=>{
      // data.name='haha'
      return data;
    // })).pipe(filter(data=>{
      // return data.id == 3;
    })).subscribe((data)=>{
      console.log(data);
      this.lesson = data;
      console.log(data);
    })
  }
}
class lesson{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number
      ){}
}

