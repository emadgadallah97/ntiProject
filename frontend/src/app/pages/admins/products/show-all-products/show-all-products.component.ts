import { Component, OnInit } from '@angular/core';
import { showAllProducts } from 'src/app/providers/allProducts/products.service';
@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit {
  images=[]
  file:FileList
  constructor(private _img:showAllProducts) { }

  ngOnInit(): void {
  }

  onChange(event:any){
    this.file = event.target.files
  }
  submitfile(){
    const myData = new FormData()
    myData.append('img', this.file[0], this.file[0].name)
this._img.addProductImage("61a566f621b99b2cc929d21a", myData).subscribe(data=>console.log(data))
  }
}
