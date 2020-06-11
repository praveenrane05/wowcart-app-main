import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';


import { ProductsRoutingModule } from './products-routing.module';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { ListofProductComponent } from './listof-product/listof-product.component';
import { DetailofProductComponent } from './detailof-product/detailof-product.component';


@NgModule({
  declarations: [FeaturedProductComponent, ListofProductComponent, DetailofProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],
  exports:[FeaturedProductComponent]
})
export class ProductsModule { }
