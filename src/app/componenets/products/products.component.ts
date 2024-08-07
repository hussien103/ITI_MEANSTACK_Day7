import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../services/products';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:Product[]=[]
  constructor(private productService:ProductsService){}

  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      this.products=data
    })

  }

  

}