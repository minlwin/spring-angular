import { Component } from '@angular/core';
import { CategoryService } from 'src/app/common/services/category.service';

declare var $: any

@Component({
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent {

  list: any[] = []
  target: any

  constructor(private service: CategoryService) {
    this.reload()
  }

  addNew() {
    $('#editDialog').modal('show')
  }

  edit(data: any) {
    this.target = data
    $('#editDialog').modal('show')
  }

  save(data: any) {
    this.service.save(data).subscribe(() => this.reload())
    $('#editDialog').modal('hide')
  }

  private reload() {
    this.service.getAll().subscribe(data => this.list = data)
  }

}
