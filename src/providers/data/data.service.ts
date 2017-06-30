import { AuthService } from './../auth/auth.service';
import { Profile } from './../../models/profile/profile.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database'
import { User } from 'firebase/app';
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>

  profileList: FirebaseListObservable<Profile>

  constructor(private database: AngularFireDatabase, private auth: AuthService) {
 
  }

  getAuthenticatedUserProfile(){
    return this.auth.getAuthenticatedUser() 
      .map(user => user.uid)
      .mergeMap(authId => this.database.object('/profiles/'+authId))
      .take(1)
  }

  getProfile(user: User){
    this.profileObject = this.database.object('/profiles/'+user.uid, {preserveSnapshot: true});
    return this.profileObject.take(1);
  }


  searchUser(firstName: string){
    const query = this.database.list('/profiles', {
      query: {
        orderByChild: 'firstName',
        equalTo: firstName
      }
    })

    return query.take(1);
  }


  
  async saveProfile(user: User, profile: Profile){
    this.profileObject = this.database.object('/profiles/'+user.uid);
    
    try{
      await this.profileObject.set(profile);
      return true;
    }
    catch(e){
      console.error(e);
      return false;
    }
  }

}
