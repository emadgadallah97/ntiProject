import { Component, OnInit } from '@angular/core';
import { OrdersDataService } from 'src/app/providers/orders/orders-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit {
  orders :any[]=[]
  orDetails :any
  isLoaded :boolean=false
  constructor(private _order:OrdersDataService,private _rout:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._rout.snapshot.params['id']
    this._order.getAllOrders().subscribe((data)=>{
      this.orders=data.data
      this.orDetails= this.orders.filter( data =>data._id.includes(id))
      // console.log(this.orDetails)
        },
        (err)=>{},
        ()=>{
         this.isLoaded=true
        })
  }

}
