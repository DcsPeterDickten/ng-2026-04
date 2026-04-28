import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { BookFilterPipe } from '../book-filter-pipe';
import { Rating } from '../../shared/rating/rating';
import { BookData } from '../book-data';

@Component({
  selector: 'book-list',
  imports: [FormsModule, CurrencyPipe, DecimalPipe, BookFilterPipe, Rating],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  //encapsulation: ViewEncapsulation.None
})
export class BookList implements OnInit, OnChanges, OnDestroy {
  public breite = 70;
  public books: Array<Book> = [];
  public coverIsVisible = true;
  public searchValue: string = '';

  constructor(private bookData: BookData) {
    console.log('BookList constructor');
  }

  ngOnInit(): void {
    console.log('BookList ngOnInit');
    this.books = this.bookData.getBooks();
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange<any> }): void {
    console.log('BookList ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('BookList ngOnDestroy');
  }

  upVote(isbn: string) {
    console.log('BookList.upVote', isbn);
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      book.rating = +Math.min(5, book.rating + 0.1).toFixed(1);
    }
  }

  downVote(isbn: string) {
    console.log('BookList.downVote', isbn);
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      book.rating = +Math.max(1, book.rating - 0.1).toFixed(1);
    }
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }
}
