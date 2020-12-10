import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styles: [
  ]
})
export class CategoryEditComponent {

  form: FormGroup

  @Input()
  set data(data: any) {
    if (data)
      this.form.patchValue(data)
  }

  @Output()
  saveListener = new EventEmitter

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      id: 0,
      name: ['', Validators.required]
    })
  }

  save() {
    this.saveListener.emit(this.form.value)
    this.form.reset()
  }

  get edit() {
    return this.form.get('id')?.value > 0
  }

}
