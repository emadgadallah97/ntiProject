import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from 'src/app/providers/orders/orders-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orders :any[]=[]
  orDetails :any
  isLoaded :boolean=false
  constructor(private _order:OrdersDataService,private _rout:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._rout.snapshot.params['id']
    this._order.getUserOrders().subscribe((data)=>{
      this.orders=data.data
      this.orDetails= this.orders.filter( data =>data._id.includes(id))
        },
        (err)=>{},
        ()=>{
         this.isLoaded=true
        })
  }

}
