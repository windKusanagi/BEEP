//import { database } from 'firebase/app';
import { Profile } from './../../models/profile/profile.interface';
import { FirebaseListObservable } from 'angularfire2/database';

import { DataService } from './../../providers/data/data.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit{

  userList: FirebaseListObservable<Profile[]>

  ngOnInit(){
    this.setUserOnline();
    this.getOnlineUsers();
  }

  constructor(private data: DataService, public navCtrl: NavController, public navParams: NavParams ) {

  }

  setUserOnline(){
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.data.setUserOnline(profile);
    })
  }

  getOnlineUsers(){
    this.userList = this.data.getOnlineUsers();
  }

  openChat(profile: Profile){
    this.navCtrl.push('MessagePage', {profile})
  }

}
