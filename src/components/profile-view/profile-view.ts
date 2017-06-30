import { Profile } from './../../models/profile/profile.interface';
import { User } from 'firebase/app';
import { AuthService } from './../../providers/auth/auth.service';
import { DataService } from './../../providers/data/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadingController, Loading } from "ionic-angular";
/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit{

  public userProfile: Profile;

  private loader: Loading;

  private authUser: User;


  @Output() existingProfile: EventEmitter<Profile>;

  ngOnInit(): void{
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).subscribe((profile)=> {
        this.userProfile = <Profile>profile.val();
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss()
      })
    })
  }

  constructor(private data: DataService, private auth: AuthService, private loading: LoadingController) {
    this.existingProfile = new EventEmitter<Profile> ();

    this.loader = this.loading.create({
      content: 'Loading profile...'
    })
  }

}
