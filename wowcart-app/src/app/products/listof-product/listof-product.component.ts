import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listof-product',
  templateUrl: './listof-product.component.html',
  styleUrls: ['./listof-product.component.less']
})
export class ListofProductComponent implements OnInit {
  panelOpenState = false;
  products: Products;
  error: {};
  constructor(private productService: ProductService) {
    
   }

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe(
      (data: Products) => this.products = data,
      error => this.error = error
    );
  }

}
