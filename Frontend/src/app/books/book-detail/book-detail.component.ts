import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/bookservice.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  @Output() booklistUpdated = new EventEmitter();

  individualbook = {
    id: '',
    title: '',
    author: '',
    image: '',
    about: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookserviceService
  ) {}

  private _getbooklist() {
    this.bookService.getData().subscribe((data) => {
      // console.log('getbooklist called');
      this.individualbook.id = data.id;
      this.individualbook.title = data.title;
      this.individualbook.author = data.author;
      this.individualbook.image = data.image;
      this.individualbook.about = data.about;
    });
  }

  ngOnInit() {
    this._getbooklist();
  }
  OnUpdateForm(bookId: string) {
    this.router.navigateByUrl(`updatebook/${bookId}`);
  }
  reloadCurrentPage() {
    let currentUrl = this.router.url;
    this.router
      .navigateByUrl('/updatebook', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentUrl]);
      });
  }

  OnDeleteBook(bookId: string) {
    if (confirm('Are you sure you want to delete the selected book')) {
      this.bookService.deleteBook(bookId).subscribe(() => {
        // console.log('The book has been deleted');
        this.booklistUpdated.emit();
        this.reloadCurrentPage();
      });
    }
  }
}
