import { Observable } from 'rxjs/Observable';
import { ChatService } from './../../providers/chat/chat.service';
import { DataService } from './../../providers/data/data.service';
import { AuthService } from './../../providers/auth/auth.service';

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

  userId: string;

  
  messageList : Observable<Message[]>

  userProfile: Profile

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private auth:AuthService, private data:DataService, private chat: ChatService) {
      //this.messageList = MESSAGE_LIST
  }

  ionViewWillLoad() {  // the view is about to load
    this.selectedProfile = this.navParams.get('profile')
    //this.auth.getAuthenticatedUser().subscribe( auth => this.userId = auth.uid)
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userProfile = profile
      this.userId = profile.$key
    })
    this.messageList = this.chat.getChats( this.selectedProfile.$key);
  }

  async sendMessage(content: string) {
    try{
      const message: Message = {
        userToId: this.selectedProfile.$key,
        userToProfile:{
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromId: this.userProfile.$key,
        userFromProfile:{
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        content: content
      }
      await this.chat.sendChat(message);
      //console.log(message);
    }
    catch(e){
      console.error(e);
    }
  }

}
