import { Component } from '@angular/core';
import {LoginPage} from '../login/login';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginPage = LoginPage;
  constructor(public navCtrl: NavController) {

  }

}
