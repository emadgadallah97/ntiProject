import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { showAllProducts } from 'src/app/providers/allProducts/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isSubmitted : boolean = false
  productnameUsedBefore :boolean = false

  addProductForm = new FormGroup({
    productname:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(40)]),
    category:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    brand:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    price:new FormControl('',[Validators.min(1),Validators.required]),
    sale:new FormControl(''),
    amount:new FormControl('',[Validators.min(1),Validators.required]),
    discription:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(100)])


  })
    constructor(private product:showAllProducts, private _router:Router) { }

    ngOnInit(): void {
    }
    get productname(){return this.addProductForm.get('productname')}
    get category(){return this.addProductForm.get('category')}
    get brand(){return this.addProductForm.get('brand')}
    get price(){return this.addProductForm.get('price')}
    get sale(){return this.addProductForm.get('sale')}
    get amount(){return this.addProductForm.get('amount')}
    get discription(){return this.addProductForm.get('discription')}

    handeladdProduct(){
    this.isSubmitted=true
    if(this.addProductForm.valid){
      this.product.addProduct(this.addProductForm.value).subscribe(
        (res)=>{
        },
        (err)=>{
          console.log(err)
          this.productnameUsedBefore=true
        },
        ()=>{

            this.addProductForm.reset()
            this.isSubmitted=false
            this._router.navigateByUrl('/admins/allProducts')
        }
      )
    }
  }


  }
