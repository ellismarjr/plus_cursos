import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: ProductsCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
