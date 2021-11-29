import { Component, OnInit } from '@angular/core';
import { usersRegisterationService } from 'src/app/providers/services/users-registeration.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _auth:usersRegisterationService) { }

  ngOnInit(): void {
    this._auth.userProfile().subscribe(
      res=>{console.log(res)},
      (err)=>{console.log(err)},
      ()=>{console.log("done")}
    )
  }

}
