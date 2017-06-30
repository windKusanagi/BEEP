import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchUserPage } from './search-user';

@NgModule({
  declarations: [
    SearchUserPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchUserPage),
    ComponentsModule
  ],
  exports: [
    SearchUserPage
  ]
})
export class SearchUserPageModule {}
