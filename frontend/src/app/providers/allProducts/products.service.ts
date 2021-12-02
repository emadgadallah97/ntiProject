import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
@Injectable({
  providedIn: 'root'
})
export class showAllProducts {

  private urlCommonLink="http://localhost:3000/api/products/"
  constructor(private _http:HttpClient) { }
  showProducts():Observable<any>{
return this._http.get(`${this.urlCommonLink}`)
  }
  showProductDetails(proId:string):Observable<any>{
    return this._http.get(`${this.urlCommonLink}${proId}`)
      }
  addToCart(proId:string,quantity:number):Observable<any>{
        return this._http.post(`${this.urlCommonLink}${proId}/addToCart`,quantity)
          }
    addProductImage(proId:string, data:any):Observable<any>{
            return this._http.post(`${this.urlCommonLink}${proId}/addImage`,data)
              }
    deleteProduct(proId:string):Observable<any>{
                return this._http.delete(`${this.urlCommonLink}delete/${proId}`)
                  }
    addProduct(productData:Products):Observable<any>{
                    return this._http.post(`${this.urlCommonLink}add`,productData)
                      }
}
