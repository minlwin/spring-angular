import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  list: any[]

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => this.list = data)
  }

}
