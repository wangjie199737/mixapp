import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
  }
  change(){
    console.log( this.slides.getActiveIndex() );
  }
}
