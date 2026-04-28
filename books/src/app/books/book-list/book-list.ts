import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'book-list',
  imports: [FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  public breite = 70;
  public books: any[] = [
    { name: 'Angular 18 for Beginners', isbn: '1234567890', price: 10.99, rating: 3.5,
      coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY522_.jpg' },
    { name: 'Angular 20 for Freaks', isbn: '1234567891', price: 12.99, rating: 3.6, coverUrl:'https://m.media-amazon.com/images/I/61IEJY3sWWL._AC_UY436_QL65_.jpg' },
    { name: 'Angular 22 for Nerds', isbn: '1234567892', price: 14.99, rating: 3.9, coverUrl:'https://m.media-amazon.com/images/I/71le4bCnY1L._AC_UY436_QL65_.jpg' },
  ];
  public coverIsVisible = true;
searchValue: any;
  // public myVar : boolean | null = null;
  // alter : 43 | 44 | 45 = 43;

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

}
