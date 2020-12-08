import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from 'src/app/common/services/author.service';

declare var $: any

@Component({
  templateUrl: './authors.component.html',
  styles: [
  ]
})
export class AuthorsComponent implements OnInit {

  form: FormGroup
  list: any[] = []

  constructor(buider: FormBuilder, private service: AuthorService) {
    this.form = buider.group({
      name: "",
      bookName: ""
    })
  }

  ngOnInit(): void {
  }

  addNew() {
    $('#editDialog').modal('show')
  }

  edit(data: any) {
    $('#editDialog').modal('show')
  }

  search() {
    this.service.search(this.form.value).subscribe(result => {
      console.log(result)
      this.list = result
    })
  }

  export() {

  }

}
