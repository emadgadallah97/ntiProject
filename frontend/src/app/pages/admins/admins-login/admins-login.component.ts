import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminsDataService } from 'src/app/providers/admins/admins-data.service';
@Component({
  selector: 'app-admins-login',
  templateUrl: './admins-login.component.html',
  styleUrls: ['./admins-login.component.css']
})
export class AdminsLoginComponent implements OnInit {


  isSubmitted :boolean=false
  invalidData :boolean=false


  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('pasword')}

  constructor(private _auth:AdminsDataService, private _router:Router ) { }

  ngOnInit(): void {
  }

  handelLogin(){
    this.isSubmitted=true
    if(this.loginForm.valid){
      this._auth.adminsLogin(this.loginForm.value).subscribe(
        (res)=>{
          console.log(res)
          this._auth.adminData= res.data.admin
          localStorage.setItem('adminToken',res.data.token)

        },
        (err)=>{
        console.log(err)
          this.invalidData=true
        },
        ()=>{
          this._auth.isAuthed=true
          this.loginForm.reset()
          this.isSubmitted=false
      this._auth.adminProfile().subscribe(
            (res)=> {},
            (err)=> {
             this._auth.isAuthed=false

            },
            ()=> {
             this._auth.isAuthed=true
             this.loginForm.reset()
             this.isSubmitted=false
             this._router.navigateByUrl('/home')

            }
           )



        }
      )
    }
  }
}
