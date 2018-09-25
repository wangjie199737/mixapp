import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
//import {  } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  //@Input()arr;
  //@Input()arr :string;
  @Input()arr:Array<any>;
  @Output() delIndex: EventEmitter<number>=new EventEmitter<number>();
  // @Output() delIndex= EventEmitter();与上一行效果一样
  del(i){
    this.delIndex.emit(i);
    
  }
  index=0;
  log(msg){
    console.log('这是$(this.index++)次调用，调用的钩子函数是$(msg)');
  }
  ngOnchanges(changes:SimpleChange):void{
    console.log(this.index++);
  }
  message:string;
  ngOnInit() {
    this.message='hello';
    console.log(this.index++);
  }
  ngDocheck():void{
    this.log('ngDocheck');
  }
}


  
