import { Component } from '@angular/core';
import { TvService} from '../../services/tv-series.service';
import { Series } from '../../models/ISeries';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  tvList!:Series
  constructor(private productService:TvService){}

  ngOnInit(){
    this.productService.getTvList().subscribe((data)=>{
      console.log(data);
      this.tvList = data 
    })

  }

  

}