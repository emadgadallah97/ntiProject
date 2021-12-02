import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminsDataService {
  public isAuthed = false
  public adminData:any =null
   private commonLink="http://localhost:3000/api/admins/";
  constructor(private _http:HttpClient) { }



  adminsLogin(adminData:any): Observable<any>{
    return this._http.post(`${this.commonLink}login`,adminData)
      }
  showAllProduts(): Observable<any>{
        return this._http.get("http://localhost:3000/api/products")
          }

    adminProfile(): Observable<any>{
            return this._http.get(`${this.commonLink}profile`)
              }
    logout(): Observable<any>{
                return this._http.post(`${this.commonLink}logout`,null)
                  }
}
