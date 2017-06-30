import { LoginResponse } from './../../models/login/login-response.interface';
import { AuthService } from './../../providers/auth/auth.service';
import { Account } from './../../models/account/account.interface';
import { Component, Output, EventEmitter } from '@angular/core';

//import { ToastController } from 'ionic-angular';
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {
  
  account = {} as Account
  
  @Output() registerStatus: EventEmitter<LoginResponse>
  
  // constructor(private toast:ToastController, private auth: AuthService ) {

  // }
  constructor(private auth: AuthService ) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }
  async register(){
    try{
    const result = await 
      this.auth.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
      // this.toast.create({
      //   message: "Account successfully created.",
      //   duration: 3000
      // }).present();
      // console.log(result);
    }
    catch(e){
      console.error(e);
      this.registerStatus.emit(e)
      // this.toast.create({
      //   message: e.message,
      //   duration: 3000
      // }).present();
    }
  }
  
}
