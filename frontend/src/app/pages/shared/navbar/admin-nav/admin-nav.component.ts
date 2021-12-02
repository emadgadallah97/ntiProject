import { Component, OnInit } from '@angular/core';
import { AdminsDataService } from 'src/app/providers/admins/admins-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(public _auth:AdminsDataService,private _router:Router) { }

  ngOnInit(): void {

  }
 logout(){
  this._auth.logout().subscribe(
    (data)=>{console.log(data)},
    (err)=>{console.log(err)},
    ()=>{

      localStorage.removeItem('adminToken')
      this._auth.isAuthed=false
      this._router.navigateByUrl('/home')
    }
  )
 }
}
