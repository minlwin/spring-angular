import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { LibariansComponent } from './libarians/libarians.component';
import { MemberTypesComponent } from './member-types/member-types.component';
import { MembersComponent } from './members/members.component';


const routes: Routes = [
  { path: "authors", component: AuthorsComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "books", component: BooksComponent },
  { path: "member-types", component: MemberTypesComponent },
  { path: "members", component: MembersComponent },
  { path: "libarians", component: LibariansComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
