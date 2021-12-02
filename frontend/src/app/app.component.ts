import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { usersRegisterationService } from 'src/app/providers/services/users-registeration.service';
import { Router } from '@angular/router';
import { AdminsDataService } from 'src/app/providers/admins/admins-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';


  //admin nav
  isLoaded = false
role:any
  constructor(public _auth:usersRegisterationService,private _router:Router,public _adminAuth:AdminsDataService) { }

  ngOnInit(): void {
    this._adminAuth.adminProfile().subscribe(
     (data)=> {
       this._adminAuth.adminData = data
       this.role=data.role
     },
     ()=> {
      this.isLoaded=true
      this._adminAuth.isAuthed=false

     },
     ()=> {
      this.isLoaded=true
      this._adminAuth.isAuthed=true

     }
    )


//userpart
this._auth.userProfile().subscribe(
  (data)=> {
    this._auth.userData = data.data
    this.role=data.role
  },
  ()=> {
   this.isLoaded=true
   this._auth.isAuthed=false

  },
  ()=> {
   this.isLoaded=true
   this._auth.isAuthed=true

  }
 )
}
}
