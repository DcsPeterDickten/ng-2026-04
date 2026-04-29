import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Book } from '../book';
import { BookFilterPipe } from '../book-filter-pipe';
import { Rating } from '../../shared/rating/rating';
import { BookData } from '../book-data';

@Component({
  selector: 'book-list',
  imports: [
    FormsModule,
    CurrencyPipe,
    BookFilterPipe,
    Rating,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit, OnChanges, OnDestroy {
  public breite = 70;
  public books: Array<Book> = [];
  public coverIsVisible = true;
  public searchValue: string = '';
  public displayedColumns = ['isbn', 'name', 'price', 'rating', 'cover'];

  constructor(
    private bookData: BookData,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    console.log('BookList constructor');
  }

  async ngOnInit(): Promise<void> {
    console.log('BookList ngOnInit');
    this.books = await this.bookData.getBooks();
    this.changeDetectorRef.detectChanges();
    console.log('BookList ngOnInit', this.books);
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange<any> }): void {
    console.log('BookList ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('BookList ngOnDestroy');
  }

  upVote(isbn: string) {
    debugger;
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
