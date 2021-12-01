import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersDataService } from 'src/app/providers/orders/orders-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {

  isSubmitted : boolean = false

  orderForm = new FormGroup({
    paymentMethod:new FormControl(''),
    deliveryAddress:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    phone:new FormControl('',[Validators.required])
  })

  constructor(private _order:OrdersDataService,private _router:Router) { }

  ngOnInit(): void {
  }

  get paymentMethod(){return this.orderForm.get('paymentMethod')}
  get deliveryAddress(){return this.orderForm.get('deliveryAddress')}
  get phone(){return this.orderForm.get('phone')}
  handelorder(){
    this.isSubmitted=true
  if(this.orderForm.valid){
    this._order.makeOrder(this.orderForm.value).subscribe(
      (res)=>{
       // console.log(res)
      },
      (err)=>{
        console.log(err)
      },
      ()=>{

          this.orderForm.reset()
          this.isSubmitted=false
          this._router.navigateByUrl('/orders')
      }
    )
  }
  }
}
