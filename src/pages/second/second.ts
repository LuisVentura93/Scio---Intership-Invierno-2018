import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Countries, country } from './lista';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  paises: Countries[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.paises = country;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
