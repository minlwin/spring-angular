import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styles: [
  ]
})
export class AuthorEditComponent {

  @Input()
  set data(data: any) {
    if (data) {
      this.form.patchValue(data)
    }
  }

  @Output("saveListener")
  emtter = new EventEmitter

  form: FormGroup

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: 0,
      penName: ["", Validators.required],
      name: "",
      gender: "Male",
      country: "",
      dob: "",
      title: "",
      remark: ""
    })
  }

  save() {
    this.emtter.emit(this.form.value)
    this.form.reset()
  }

  get edit() {
    return this.form.get('id')?.value > 0
  }

}
