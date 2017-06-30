import { FirebaseListObservable } from 'angularfire2/database';
import { Channel } from './../../models/channel/channel.interface';

import { ChatService } from './../../providers/chat/chat.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
//import { Observable } from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {

  //channelList: Observable<Channel[]>
  channelList: FirebaseListObservable<Channel[]>

  constructor( private alertCtrl : AlertController, private chat :ChatService,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName)
          }
        }
      ]

    }).present();
  }
  ionViewWillLoad(){
    // Get Channels
    this.getChannels();
  }

  getChannels(){
    this.channelList = this.chat.getChannelListRef()
  }

  selectChannel( channel: Channel){
    this.navCtrl.push('ChannelChatPage', { channel })
  }

}
