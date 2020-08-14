import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup

  constructor(builder: FormBuilder, private service: ProductService, private router: Router) {
    this.form = builder.group({
      id: 0,
      name: ["", Validators.required],
      price: 0
    })
  }

  ngOnInit(): void {
  }

  save() {
    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(["/list"])
    })
  }

}
