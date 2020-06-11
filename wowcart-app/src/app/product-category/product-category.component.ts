import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.less']
})
export class ProductCategoryComponent implements OnInit {
  catgory:any;
  error:{}
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(
      (data: []) => this.catgory = data,
      error => this.error = error
    );
  }

}
