import { Profile } from './../../models/profile/profile.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {  // the view is about to load
    this.selectedProfile = this.navParams.get('profile')
  }

}
