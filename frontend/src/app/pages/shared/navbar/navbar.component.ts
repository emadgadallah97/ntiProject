import { Component, OnInit } from '@angular/core';
import { usersRegisterationService } from 'src/app/providers/services/users-registeration.service';
import { Router } from '@angular/router';
import { AdminsDataService } from 'src/app/providers/admins/admins-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoaded = false

  constructor(public _auth:usersRegisterationService,private _router:Router,public _adminAuth:AdminsDataService) { }

  ngOnInit(): void {
    this._auth.userProfile().subscribe(
     (data)=> {
       this._auth.userData = data
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

//admins part
    this._adminAuth.adminProfile().subscribe(
      (data)=> {
        this._adminAuth.adminData = data
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
  logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data)},
      (err)=>{console.log(err)},
      ()=>{

        localStorage.removeItem('userToken')
        this._auth.isAuthed=false
        this._router.navigateByUrl('/home')
      }
    )
  }

}
