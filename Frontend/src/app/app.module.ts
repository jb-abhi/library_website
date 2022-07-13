import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header/header.component';
import { NewbookComponent } from './newbook/newbook.component';
import { HttpClientModule } from '@angular/common/http';
import { BookserviceService } from './bookservice.service';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookImageComponent } from './books/book-detail/book-image/book-image.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    HeaderComponent,
    NewbookComponent,
    BookDetailComponent,
    BookImageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
