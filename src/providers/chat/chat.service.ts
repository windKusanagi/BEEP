import { ChannelMessage } from './../../models/channel/channel-message.interface';
import { Channel } from './../../models/channel/channel.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase) {
    console.log('Hello ChatProvider Provider');
  }

  addChannel(channelName: string){
    this.database.list('/channel-names/').push({name: channelName });

  }
  
  getChannelListRef(): FirebaseListObservable<Channel>{
    return this.database.list('channel-names');
  }

  getChannelChatRef(channelKey: string){
    return this.database.list('channels/'+channelKey)
  }

  async sendChannelChatMessage( channelKey: string, message: ChannelMessage){
    await this.database.list('/channels/'+channelKey).push(message);
  }

}
