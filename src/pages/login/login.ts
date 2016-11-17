import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnboardPage } from '../onboard/onboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  this.navCtrl = navCtrl;
}

goToOnboard(){
  this.navCtrl.push(OnboardPage);
}

ionViewDidLoad() {
  console.log('Hello LoginPage Page');
}

}
