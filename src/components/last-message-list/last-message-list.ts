import { NavController, NavParams } from 'ionic-angular';
import { Message } from './../../models/messages/message.interface';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './../../providers/chat/chat.service';
import { Component, OnInit } from '@angular/core';

/**
 * Generated class for the LastMessageListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'last-message-list',
  templateUrl: 'last-message-list.html'
})
export class LastMessageListComponent implements OnInit{

  messageList$: Observable < Message[]>

  constructor(private chat: ChatService, private navCtrl: NavController, private navParams: NavParams) {

  }

  ngOnInit(){
    this.messageList$ = this.chat.getLastMessageForUser()
  }

  navigateToMessage(message: Message){
    const selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      LastName: message.userToProfile.lastName
    }

    this.navCtrl.push('MessagePage', {profile: selectedProfile})
  }

}
