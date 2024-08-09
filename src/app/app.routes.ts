import { Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { ProductsComponent } from './componenets/products/products.component';
import { ProductDetailsComponent } from './componenets/product-details/product-details.component';
import { AboutComponent } from './componenets/about/about.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { PageNotFoundComponent } from './componenets/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path :"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"products",component:ProductsComponent},
    {path:"product-details/:id",component:ProductDetailsComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"**",component:PageNotFoundComponent},
];
