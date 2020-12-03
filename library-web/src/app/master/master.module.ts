import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorsComponent } from './authors/authors.component';
import { MasterRoutingModule } from './master-routing.module';



@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorEditComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
