import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookData {
  getBooks(): Book[] {
    return [
      {
        name: 'Angular 18 for Beginners',
        isbn: '1234567890',
        price: 10.99,
        rating: 3.5,
        coverUrl: 'https://m.media-amazon.com/images/I/71Wv+d6oP6L._SY522_.jpg',
      },
      {
        name: 'Angular 20 for Freaks',
        isbn: '1234567891',
        price: 12.99,
        rating: 3.6,
        coverUrl: 'https://m.media-amazon.com/images/I/61IEJY3sWWL._AC_UY436_QL65_.jpg',
      },
      {
        name: 'Angular 22 for Nerds',
        isbn: '1234567892',
        price: 15.99,
        rating: 3.9,
        coverUrl: 'https://m.media-amazon.com/images/I/71le4bCnY1L._AC_UY436_QL65_.jpg',
      },
    ];
  }

  getBook(isbn: string): Book | null {
    return null;
  }


}
