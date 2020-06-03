import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.less']
})
export class ManageProductsComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error: {};
  loginError: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      productName: ['', Validators.required],
      productBrand: ['', Validators.required],
      productDescription: ['', Validators.required],
      productPrice: ['', Validators.required],
      productQty: ['', Validators.required]
    });

    
  }

  get productName() { return this.loginForm.get('productName'); }
  get productBrand() { return this.loginForm.get('productBrand'); }
  get productDescription() { return this.loginForm.get('productDescription'); }
  get productPrice() { return this.loginForm.get('productPrice'); }
  get productQty() { return this.loginForm.get('productQty'); }


  onSubmit() {
    this.submitted = true;
    console.log(this.productName.value, this.productBrand.value, this.productDescription.value, this.productPrice.value, this.productQty.value);
    this.authService.login(this.productName.value, this.productBrand.value, this.productDescription.value, this.productPrice.value, this.productQty.value).subscribe((data) => {
       console.log("product Added",data)
      },
      error => this.error = error
    );
  }
}
