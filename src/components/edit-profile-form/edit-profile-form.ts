import { AuthService } from './../../providers/auth/auth.service';
import { DataService } from './../../providers/data/data.service';
import { Profile } from './../../models/profile/profile.interface';
import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';
/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy{

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  //profile = {} as Profile;
  
  @Output() saveProfileResult: EventEmitter <Boolean>;

  @Input() profile: Profile;

  constructor(private data: DataService, private auth: AuthService) {

    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User ) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    if( this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email
      const result = await this.data.saveProfile(this.authenticatedUser, this.profile); 
      this.saveProfileResult.emit(result);
    }
  }

  ngOnInit(): void {
    if (!this.profile){
      this.profile = {} as Profile
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }

}
