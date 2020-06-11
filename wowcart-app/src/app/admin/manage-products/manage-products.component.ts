import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductService } from '../../products/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Products } from './../../products/products';

@Component({
  selector: 'app-login',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.less']
})
export class ManageProductsComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  error: {};
  productFormError: String;
  products: any;
  formName:String;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) { }
  
  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data
      for (let i = 0; i < this.products.products.length; i++) {
        this.products.products[i].product_image = this.sanitizer.bypassSecurityTrustUrl(this.products.products[i].product_image);
      }
      this.products.products.product_image
    },
      error => this.error = error
    );

    this.productForm = this.fb.group({
      product_title: ['', Validators.required],
      product_brand: ['', Validators.required],
      product_model: ['', Validators.required],
      product_selling_price: ['', Validators.required],
      product_mrp: ['', Validators.required],
      product_discount: ['', Validators.required],
      product_delivery: ['', Validators.required],
      product_quantity: ['', Validators.required],
      product_services: ['', Validators.required],
      product_image: ['', Validators.required],
      product_seller: ['', Validators.required],
      product_cat_name: ['', Validators.required],
      product_sub_cat_name: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onClick(event, product) {
    let btn = event.target.id;
    
    if(btn==='addproduct'){
      this.formName = "Add";
      this.productForm.reset();
     
    }
    if(btn==='editproduct'){
      this.formName = "Edit";
      this.productForm.patchValue(
        product
       )
       
    }
    if(btn==='deleteproduct'){
      this.formName = "Delete";
     
    }
  }
  get productTitle() { return this.productForm.get('product_title'); }
  get productBrand() { return this.productForm.get('product_brand'); }
  get productModel() { return this.productForm.get('product_model'); }
  get productSellingPrice() { return this.productForm.get('product_selling_price'); }
  get productMrp() { return this.productForm.get('product_mrp'); }
  get productDiscount() { return this.productForm.get('product_discount'); }
  get productDelivery() { return this.productForm.get('product_delivery'); }
  get productQuantity() { return this.productForm.get('product_quantity'); }
  get productServices() { return this.productForm.get('product_services'); }
  get productImage() { return this.productForm.get('product_image'); }
  get productSeller() { return this.productForm.get('product_seller'); }
  get productCatName() { return this.productForm.get('product_cat_name'); }
  get productSubCatName() { return this.productForm.get('product_sub_cat_name'); }
  get productType() { return this.productForm.get('type'); }


  onSubmit() {

    const formData = new FormData();
    formData.append('productTitle', this.productTitle.value);
    formData.append('productBrand', this.productBrand.value);
    formData.append('productModel', this.productModel.value);
    formData.append('productSellingPrice', this.productSellingPrice.value);
    formData.append('productMrp', this.productMrp.value);
    formData.append('productDiscount', this.productDiscount.value);
    formData.append('productDelivery', this.productDelivery.value);
    formData.append('productQuantity', this.productQuantity.value);
    formData.append('productServices', this.productServices.value);
    formData.append('productImage', this.productImage.value);
    formData.append('productSeller', this.productSeller.value);
    formData.append('productCatName', this.productCatName.value);
    formData.append('productSubCatName', this.productSubCatName.value);
    formData.append('productType', this.productType.value);
    formData.append('productSubCatId', "uuid()");
    formData.append('productCatId', "uuid()");

    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    this.submitted = true;
    if(this.formName.toLowerCase()==='add'){
      console.log('add Data') 
      console.log(json) 

      // this.productService.saveProducts(json).subscribe((data) => {
      //   if (data) {
      //     console.log("product Added", data)
      //   } else {
      //     this.productFormError = "Oop's Something Went Wrong";
      //   }
      // },
      //   error => this.error = error
      // );
    }
    if(this.formName.toLowerCase()==='edit'){
      console.log('add Data')
      console.log(json)
    }
    
  }
}
