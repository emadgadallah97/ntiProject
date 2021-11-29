import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usersRegisterationService } from 'src/app/providers/services/users-registeration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

isSubmitted : boolean = false
emailUsedBefore :boolean = false



registerForm = new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  phone:new FormControl('',[Validators.required]),
  birthDate:new FormControl()


})
  constructor(private _auth:usersRegisterationService, private _router:Router) { }

  ngOnInit(): void {
  }
  get name(){return this.registerForm.get('name')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get phone(){return this.registerForm.get('phone')}
  get birthDate(){return this.registerForm.get('birthdate')}

handelRegister(){
  this.isSubmitted=true
  if(this.registerForm.valid){
    this._auth.register(this.registerForm.value).subscribe(
      (res)=>{
      },
      (err)=>{
        this.emailUsedBefore=true
      },
      ()=>{

          this.registerForm.reset()
          this.isSubmitted=false
          this._router.navigateByUrl('/login')
      }
    )
  }
}


}
