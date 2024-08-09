import { Component } from '@angular/core';
import { SingleSeries } from '../../models/ISeries';
import {  TvService } from '../../services/tv-series.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {
  public series!: SingleSeries; // Added definite assignment assertion
  private id!: number;
  private route!: ActivatedRoute; // Declare route

  constructor(private tvService: TvService, route: ActivatedRoute) { // Inject ActivatedRoute
    this.route = route; // Assign to the class property
  }
  //when creating the class and the html is loaded it will be invoked
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

     this.tvService.getSeriesByID(this.id).subscribe(data => {
       this.series = data;

       console.log(data)

    });

  }

}