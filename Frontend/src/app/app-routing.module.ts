import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NewbookComponent } from './newbook/newbook.component';

const appRoutes: Routes = [
  // pathMatch: 'full',
  {
    path: '',
    // pathMatch: 'full',
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'booklist',
      //   component: BooksComponent,
      // },
      { path: '', component: BooksComponent },
      { path: 'newbook', component: NewbookComponent },
      { path: 'updatebook', component: NewbookComponent },
      { path: 'updatebook/:id', component: NewbookComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
