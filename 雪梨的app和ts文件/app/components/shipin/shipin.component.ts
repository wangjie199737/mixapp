import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-shipin',
  templateUrl: './shipin.component.html',
  styleUrls: ['./shipin.component.css']
})
export class ShipinComponent implements OnInit {

  constructor(
  private router:ActivatedRoute,
    private route:Router,
    private http:HttpClient
) { }
  shipin;
  ngOnInit() {
    // this.router.params.subscribe(params =>{
    //   this.lessonID = params["lessonID"];
    // })
    this.http.get('/api/shipin').subscribe((data)=>{
      this.shipin=data;
      console.log(data);
    })
  }

}
