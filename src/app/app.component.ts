import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './componenets/products/products.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { ProductDetailsComponent } from './componenets/product-details/product-details.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { AboutComponent } from './componenets/about/about.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { HomeComponent } from './componenets/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,NavbarComponent,ProductDetailsComponent,FooterComponent,AboutComponent,ContactComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day6';
}
