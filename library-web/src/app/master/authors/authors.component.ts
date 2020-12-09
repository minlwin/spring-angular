import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/common/services/author.service';

declare var $: any

@Component({
  templateUrl: './authors.component.html',
  styles: [
  ]
})
export class AuthorsComponent {

  form: FormGroup
  list: any[] = []

  targetData: any

  constructor(buider: FormBuilder, private service: AuthorService) {
    this.form = buider.group({
      name: "",
      bookName: ""
    })
  }

  addNew() {
    $('#editDialog').modal('show')
  }

  edit(data: any) {
    this.targetData = data
    $('#editDialog').modal('show')
  }

  save(data: any) {
    this.service.save(data).subscribe(() => this.search())
    $('#editDialog').modal('hide')
  }

  search() {
    this.service.search(this.form.value).subscribe(result => {
      this.list = result
    })
  }

  export() {

  }

}
