import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PageNotFoundComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    ProductsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
