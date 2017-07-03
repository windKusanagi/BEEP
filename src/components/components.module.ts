import { LastMessageListComponent } from './last-message-list/last-message-list';
import { OnlineUsersComponent } from './online-users/online-users';
import { ChatMessageComponent } from './chat-message/chat-message';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { ProfileViewComponent } from './profile-view/profile-view';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { RegisterFormComponent } from './register-form/register-form';
import { LoginFormComponent } from './login-form/login-form';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';


@NgModule({
    declarations: [
            LoginFormComponent,
            RegisterFormComponent,
            EditProfileFormComponent,
            ProfileViewComponent,
            ProfileSearchComponent,
            SendMessageBoxComponent,
            ChatMessageComponent,
            OnlineUsersComponent,
            LastMessageListComponent
        ],
    imports: [IonicModule],
    exports: [
            LoginFormComponent,
            RegisterFormComponent,
            EditProfileFormComponent,
            ProfileViewComponent,
            ProfileSearchComponent,
            SendMessageBoxComponent,
            ChatMessageComponent,
            OnlineUsersComponent,
            LastMessageListComponent
        ]
})

export class ComponentsModule {

}