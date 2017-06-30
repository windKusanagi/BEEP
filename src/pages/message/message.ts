import { MESSAGE_LIST } from './../../mocks/messages/messages';
import { Message } from './../../models/messages/message.interface';
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

  messageList : Message[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messageList = MESSAGE_LIST
  }

  ionViewWillLoad() {  // the view is about to load
    this.selectedProfile = this.navParams.get('profile')
  }

}
