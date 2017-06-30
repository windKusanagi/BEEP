import { AuthService } from './../../providers/auth/auth.service';
import { Profile } from './../../models/profile/profile.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(private navCtrl: NavController, private navParams: NavParams, private auth : AuthService) {
  }

  getExistingProfile(profile: Profile ){
    this.existingProfile = profile;
  }

  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage', { existingProfile: this.existingProfile })
  }
  signout(){
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
