import { Component, OnInit } from '@angular/core';
import { showAllProducts } from 'src/app/providers/allProducts/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts: any[] = []
  constructor(private _show:showAllProducts) { }

  ngOnInit(): void {
    this._show.showProducts().subscribe(data=>{
      // console.log(data)
      this.allProducts=data.data
      console.log( data.data[0].images[0].image)
    })
  }

}
