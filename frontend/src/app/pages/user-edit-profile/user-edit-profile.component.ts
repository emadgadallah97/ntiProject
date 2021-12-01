import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usersRegisterationService } from 'src/app/providers/services/users-registeration.service';
@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {

  isSubmitted : boolean = false
emailUsedBefore :boolean = false
formdata :any

  editForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required]),
    birthDate:new FormControl()


  })

  constructor(public _auth:usersRegisterationService, private _router:Router) { }
  ngOnInit(): void {
// console.log(Date.parse(this.editForm.get('birthdate')))
if(this._auth.userData==null){
  this._router.navigateByUrl('/home')
}

  }
  ngAfterViewChecked(): void{

    this.editForm.patchValue(this._auth.userData)
// this.formdata=this._auth.userData
    // this.editForm.value.name="sfsfdf"
//  let date=this._auth.userData.birthDate.toDate()
// // let x=Date.parse(date)
// console.log(new  Date(this._auth.userData))
// // // this.d=date
// // let y=1980-08-16
//  console.log(typeof(date) )
  }
  get name(){return this.editForm.get('name')}
  get email(){return this.editForm.get('email')}
  get password(){return this.editForm.get('password')}
  get phone(){return this.editForm.get('phone')}
  get birthDate(){return this.editForm.get('birthdate')}

  handelEdit(){
    this.isSubmitted=true
  if(this.editForm.valid){
    this._auth.edit(this.editForm.value).subscribe(
      (res)=>{},
      (err)=>{
        this.emailUsedBefore=true
      },
      ()=>{

          this.editForm.reset()
          this.isSubmitted=false
          this._router.navigateByUrl('/profile')
      }
    )
  }
  }
  logoutAll(){
    this._auth.logoutAll().subscribe(
      (data)=>{},
      (err)=>{},
      ()=>{

        localStorage.removeItem('userToken')
        this._auth.isAuthed=false
        this._router.navigateByUrl('/home')
      }
    )
  }

}
