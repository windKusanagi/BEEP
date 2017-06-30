import { AuthService } from './../../providers/auth/auth.service';
import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/account/account.interface';

import { NavController } from 'ionic-angular';
import { Component , EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account;
  
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private navCtrl: NavController, private auth: AuthService) {
    this.loginStatus = new EventEmitter<any> ();
  }

  async login() {

    const LoginResponse = await this.auth.signInWithEmailAndPassword(this.account) 
    this.loginStatus.emit(LoginResponse);
    
    //const result = await this.auth.signInWithEmailAndPassword(this.account) 
    // try{
    //   const result: LoginResponse = {
    //      result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password),
    //   }  

    //   this.loginStatus.emit(result);
    // }
    // catch(e){
    //   console.log(e);
    //   const error: LoginResponse = {
    //     error: e
    //   }
    //   this.loginStatus.emit(error);
    //}
  }


  navigateToPage(pageName: string){
    pageName ==='TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  }

}
