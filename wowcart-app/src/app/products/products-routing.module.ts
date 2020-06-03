import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofProductComponent } from './listof-product/listof-product.component';
import { DetailofProductComponent } from './detailof-product/detailof-product.component';

const routes: Routes = [
  {path: 'products', component: ListofProductComponent},
  {path: 'product/:id', component: DetailofProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
