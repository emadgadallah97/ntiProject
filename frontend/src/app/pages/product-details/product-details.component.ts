import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { showAllProducts } from 'src/app/providers/allProducts/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails :any
  finalPrice :any=null
  images :any
  isLoaded :boolean=false

  addToCartForm = new FormGroup({
    quantity:new FormControl(1)
  })
  constructor(private _proData:showAllProducts,private _rout:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.getProductData()
  }
  // ngAfterViewChecked(): void{
  //   this.editForm.patchValue(this._auth.userData)
  // }
  getProductData(){
    this._proData.showProductDetails(this._rout.snapshot.params['id']).subscribe(
      (res)=>{
         this.productDetails=res.data
       this.finalPrice=this.productDetails.price - ((this.productDetails.sale * this.productDetails.price)/100)
        this.images=this.productDetails.images
      },
      (err)=>{
        console.log(err)
      },
      ()=>{
        this.isLoaded=true
      }
    )
  }
  handelAdd(){
    this._proData.addToCart(this._rout.snapshot.params['id'],this.addToCartForm.value).subscribe(
      (res)=>{},
      (err)=>{},
      ()=>{
        this._router.navigateByUrl('/cart')
     // console.log(this.addToCartForm.value)
      }
    )

  }
}
