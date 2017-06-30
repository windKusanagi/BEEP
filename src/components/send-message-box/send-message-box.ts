import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'send-message-box',
  templateUrl: 'send-message-box.html'
})
export class SendMessageBoxComponent {


  @Output() sendMessage: EventEmitter<string>;

  content: string;

  constructor() {
    this.sendMessage = new EventEmitter<string>();

  }

  send() {
    this.sendMessage.emit(this.content);
    this.content = "";
  }

}
