import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorsComponent } from './authors/authors.component';
import { MasterRoutingModule } from './master-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { MemberTypesComponent } from './member-types/member-types.component';
import { LibariansComponent } from './libarians/libarians.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';



@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorEditComponent,
    CategoriesComponent,
    BooksComponent,
    MembersComponent,
    MemberTypesComponent,
    LibariansComponent,
    CategoryEditComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
