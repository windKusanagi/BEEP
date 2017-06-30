import { LoginResponse } from './../../models/login/login-response.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  register(event){
    if(!event.error){
      this.toast.create({
        message: 'account create : '+ event.result.email,
        duration: 3000
      }).present();
    }else{
        this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
