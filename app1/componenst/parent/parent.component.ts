import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
//第三次课
export class ParentComponent implements OnInit {

  data;
  data1=[1,2,3,4,5,6];
 
  del(i){
    console.log(i);
    this.data1.splice(i,1);
    this.local.set('list',this.data);
  }
  constructor(private local:CommonService){

  }
  ngOnInit() {
    console.log(this.local.get('list'));
    this.local.get(localStorage.getItem('list'));
    if(this.local.get('list')){
     this.data =localStorage.getItem('list').split(',');
    }
    else{
      this.data=[1,2,3,4];
      console.log(this.data);
    }
    //this.local.set('name','chen');
  }

}
