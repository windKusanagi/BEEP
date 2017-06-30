import { ChannelMessage } from './../../models/channel/channel-message.interface';
import { FirebaseListObservable } from 'angularfire2/database';
import { ChatService } from './../../providers/chat/chat.service';
import { Channel } from './../../models/channel/channel.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel : Channel; 
  channelMessages: FirebaseListObservable<ChannelMessage[]>;

  constructor( private chat: ChatService,
    private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel')
    this.channelMessages = this.chat.getChannelChatRef(this.channel.$key)
  }

  sendMessage(content: string){
    let channelMessage: ChannelMessage = {
      content
    }

    this.chat.sendChannelChatMessage(this.channel.$key, channelMessage)
  }


}
