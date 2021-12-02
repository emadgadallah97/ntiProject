import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from 'src/app/providers/orders/orders-data.service';
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
ordersData :any
  constructor(private _ordsrs:OrdersDataService) { }

  ngOnInit(): void {
    this._ordsrs.getAllOrders().subscribe(
      (data)=>{
        this.ordersData=data.data
        // console.log(data.data)
      },
      (err)=>{},
      ()=>{}
    )
  }

}
