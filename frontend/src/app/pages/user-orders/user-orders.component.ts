import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from 'src/app/providers/orders/orders-data.service';
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  ordersData :any
  constructor(private _orders:OrdersDataService) { }

  ngOnInit(): void {
    this._orders.getUserOrders().subscribe((data)=>{
  this.ordersData=data.data
    //  console.log(this.ordersData)

    })
  }

}
