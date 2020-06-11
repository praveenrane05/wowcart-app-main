import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common'
import * as $ from 'jquery';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule  } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageProductsComponent, ManageCategoriesComponent, ManagePagesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminRoutingModule
  ],
  providers: [DatePipe]
})
export class AdminModule { }
