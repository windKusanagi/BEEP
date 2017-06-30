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
            ProfileSearchComponent
        ],
    imports: [IonicModule],
    exports: [
            LoginFormComponent,
            RegisterFormComponent,
            EditProfileFormComponent,
            ProfileViewComponent,
            ProfileSearchComponent
        ]
})

export class ComponentsModule {

}