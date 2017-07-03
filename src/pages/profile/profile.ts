import { DataService } from './../../providers/data/data.service';
import { AuthService } from './../../providers/auth/auth.service';
import { Profile } from './../../models/profile/profile.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { database } from 'firebase/app';
//
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
    // this.data.getAuthenticatedUserProfile().subscribe(profile => {
    //   console.log(profile)
    // //     const ref = database().ref('online-users/'+profile.$key)
    // //     // try{
    // //     //   //ref.remove();
    // //     //   //database().goOffline();
    // //     //   ref.onDisconnect().remove();
    // //     // }
    // //     // catch(e){
    // //     //   console.error(e);
    // //     // }
    // //     console.log(ref)
    //  });
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
