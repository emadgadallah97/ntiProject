import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class usersRegisterationService {
 public isAuthed = false
 public userData:any =null
  private commonLink="http://localhost:3000/api/users/";

  constructor(private _http:HttpClient) { }

  register(userData:User): Observable<any>{
return this._http.post(`${this.commonLink}register`,userData)
  }
  usersLogin(userData:any): Observable<any>{
    return this._http.post(`${this.commonLink}login`,userData)
      }
  userProfile(): Observable<any>{
        return this._http.get(`${this.commonLink}profile`)
          }
  edit(userData:User): Observable<any>{
            return this._http.post(`${this.commonLink}edit`,userData)
              }
  logout(): Observable<any>{
                return this._http.post(`${this.commonLink}logout`,null)
                  }
  logoutAll(): Observable<any>{
                    return this._http.post(`${this.commonLink}logoutAll`,null)
                      }
}
