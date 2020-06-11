import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.less']
})
export class ManageCategoriesComponent implements OnInit {

  categoryForm: FormGroup;
  submitted = false;
  error: {};
  categoryFormError: String;
  categories: any;
  formName:String;
  date:Date;

  constructor(
    private fb: FormBuilder,
    public datepipe: DatePipe,
    private productService: ProductService,
    private sanitizer: DomSanitizer
  ) { }
  
  ngOnInit() {
    this.productService.getCategory().subscribe((data: any) => {
      this.categories = data
      this.categories.categories.product_image
    },
      error => this.error = error
    );

    this.categoryForm = this.fb.group({
      category_name: ['', Validators.required]
    });
  }

  onClick(event, category) {
    let btn = event.target.id;
    
    if(btn==='addproduct'){
      this.formName = "Add";
      this.categoryForm.reset();
     
    }
    if(btn==='editproduct'){
      this.formName = "Edit";
      this.categoryForm.patchValue(
        category
       )
       
    }
    if(btn==='deleteproduct'){
      this.formName = "Delete";
     
    }
  }
  get productTitle() { return this.categoryForm.get('category_name'); }
  


  onSubmit() {
    this.date=new Date();
    let latest_date =this.datepipe.transform(this.date, 'medium');
    const formData = new FormData();
    formData.append('category_name', this.productTitle.value);
    formData.append('last_updated', latest_date);
    formData.append('updated_by', "Praveen");
    formData.append('url', this.productTitle.value. replace(" ", "_"));

    
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    this.submitted = true;
    if(this.formName.toLowerCase()==='add'){
      console.log(json);
      this.productService.saveCategory(json).subscribe((data) => {
        if (data) {
          console.log("category Added", data)
        } else {
          this.categoryFormError = "Oop's Something Went Wrong";
        }
      },
        error => this.error = error
      );
    }
    if(this.formName.toLowerCase()==='edit'){
      console.log('add Data')
      console.log(json)
    }
    
  }

}
