import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { ProductsService } from '../../services/products.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  public product!: Product; // Added definite assignment assertion
  private id: number = 15;
  constructor(private productService: ProductsService) {
  }
  
  ngOnInit() {
    this.productService.getProductDetails(this.id).subscribe((data) => {
      this.product = data;
    });
  }
}