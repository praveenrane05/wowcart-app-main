import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listof-product',
  templateUrl: './listof-product.component.html',
  styleUrls: ['./listof-product.component.less']
})
export class ListofProductComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {};
  productError: string;
  products: any;
  products1 = [];
  savePrdResponse =[];
  blogs:any;
  constructor(private fb: FormBuilder, private productService: ProductService, private sanitizer:DomSanitizer) {
    
   }

  
  ngOnInit(): void {
    this.productForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.productService.getProducts().subscribe((data:any) => {
      this.products = data
      for (let i = 0; i < this.products.products.length; i++) {
        console.log (this.products.products[i]);
        this.products.products[i].product_image = this.sanitizer.bypassSecurityTrustUrl(this.products.products[i].product_image);
      }
      this.products.products.product_image
    },
      error => this.error = error
    );
    this.productService.getCategory().subscribe((data:[]) => {
      this.blogs = data
    },
      error => this.error = error
    );
  }

  get username() { return this.productForm.get('username'); }
  get password() { return this.productForm.get('password'); }
  onSubmit() {
    this.submitted = true;
   
  }
}
