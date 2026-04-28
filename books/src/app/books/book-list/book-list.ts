import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';
import { BookFilterPipe } from "../book-filter-pipe";

@Component({
  selector: 'book-list',
  imports: [FormsModule, CurrencyPipe, DecimalPipe, BookFilterPipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
  //encapsulation: ViewEncapsulation.None
})
export class BookList implements OnInit, OnChanges, OnDestroy {
  public breite = 70;
  public books: Array<Book> = [
    { name: 'Angular 18 for Beginners', isbn: '1234567890', price: 10.99, rating: 3.5,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY522_.jpg' },
    { name: 'Angular 20 for Freaks', isbn: '1234567891', price: 12.99, rating: 3.6, coverUrl:'https://m.media-amazon.com/images/I/61IEJY3sWWL._AC_UY436_QL65_.jpg' },
    { name: 'Angular 22 for Nerds', isbn: '1234567892', price: 14.99, rating: 3.9, coverUrl:'https://m.media-amazon.com/images/I/71le4bCnY1L._AC_UY436_QL65_.jpg' },
  ];
  public coverIsVisible = true;
  public searchValue: string = '';

  constructor() {
    console.log('BookList constructor');
  }

  ngOnInit(): void {
    console.log('BookList ngOnInit');
  }
  ngOnChanges(changes: { [propName: string]: SimpleChange<any>; }): void {
    console.log('BookList ngOnChanges', changes);
  }
  ngOnDestroy(): void {
    console.log('BookList ngOnDestroy');
  }


  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

}
