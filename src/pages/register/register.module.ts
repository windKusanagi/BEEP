import { AngularFireModule } from 'angularfire2';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ComponentsModule,
    AngularFireModule
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
