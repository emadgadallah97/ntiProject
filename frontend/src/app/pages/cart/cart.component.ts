import { Component, OnInit } from '@angular/core';
import { usersRegisterationService } from 'src/app/providers/services/users-registeration.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartData :any
  constructor(private _cart:usersRegisterationService) { }

  ngOnInit(): void {
    this._cart.userProfile().subscribe((data)=>{

      this.cartData=data.cart
    })

  }

}
