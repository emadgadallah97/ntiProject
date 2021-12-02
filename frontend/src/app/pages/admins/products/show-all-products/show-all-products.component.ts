import { Component, OnInit } from '@angular/core';
import { showAllProducts } from 'src/app/providers/allProducts/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit {

  productsData:any
  constructor(private _products:showAllProducts,private _router:Router) { }

  ngOnInit(): void {
    this._products.showProducts().subscribe((data)=>{

      this.productsData=data.data
      // console.log(this.productsData)

    })
  }
  removeProduct(id:string){
    console.log(id)
    this._products.deleteProduct(id).subscribe(
      (res)=>{},
      (err)=>{
        console.log(err)
      },
      ()=>{
        this._router.navigateByUrl("/admins/allProducts")
        console.log("deleted")
      }
    )

  }

}











































































// import { Component, OnInit } from '@angular/core';
// import { showAllProducts } from 'src/app/providers/allProducts/products.service';
// @Component({
//   selector: 'app-show-all-products',
//   templateUrl: './show-all-products.component.html',
//   styleUrls: ['./show-all-products.component.css']
// })
// export class ShowAllProductsComponent implements OnInit {
//   images=[]
//   file:FileList
//   constructor(private _img:showAllProducts) { }

//   ngOnInit(): void {
//   }

//   onChange(event:any){
//     this.file = event.target.files
//   }
//   submitfile(){
//     const myData = new FormData()
//     myData.append('img', this.file[0], this.file[0].name)
// this._img.addProductImage("61a566f621b99b2cc929d21a", myData).subscribe(data=>console.log(data))
//   }
// }
