import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from 'src/app/interfaces/orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersDataService {

  private commonLink="http://localhost:3000/api/orders/"
  constructor(private _http:HttpClient) { }
  makeOrder(orderData:Orders): Observable<any>{
    return this._http.post(`${this.commonLink}makeOrder`,orderData)
      }
  getUserOrders(): Observable<any>{
        return this._http.get(`${this.commonLink}`)
          }
}
