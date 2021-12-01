import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usersRegisterationService } from 'src/app/providers/services/users-registeration.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {

  isSubmitted :boolean=false
  invalidData :boolean=false


  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('pasword')}

  constructor(private _auth:usersRegisterationService, private _router:Router ) { }

  ngOnInit(): void {
  }

  handelLogin(){
    this.isSubmitted=true
    if(this.loginForm.valid){
      this._auth.usersLogin(this.loginForm.value).subscribe(
        (res)=>{
          console.log(res)
          this._auth.userData= res.data.user
          localStorage.setItem('userToken',res.data.token)
        },
        (err)=>{
        console.log(err)
          this.invalidData=true
        },
        ()=>{

      this._auth.userProfile().subscribe(
            ()=> {},
            ()=> {
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
