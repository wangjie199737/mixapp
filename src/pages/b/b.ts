import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { APage } from '../a/a';
// import { APage } from '../a/a';
// import { ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  // tab6Root = APage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ppp(){
    this.navCtrl.push(APage);
  }
  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
  }
}
