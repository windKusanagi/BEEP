import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelChatPage } from './channel-chat';

@NgModule({
  declarations: [
    ChannelChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelChatPage),
    ComponentsModule
  ],
  exports: [
    ChannelChatPage
  ]
})
export class ChannelChatPageModule {}
