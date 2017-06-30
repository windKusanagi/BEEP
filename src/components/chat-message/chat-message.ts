import { Message } from './../../models/messages/message.interface';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message

  @Input() chatIndex: number;

  constructor() {

  }

}
