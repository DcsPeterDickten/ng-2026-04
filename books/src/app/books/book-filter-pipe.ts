import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {

// books | bookFilter:searchValue
  transform(books: Book[], searchValue: string = ''): Book[] {
    searchValue = searchValue.toLowerCase();
    books = books.filter(book => book.name.toLowerCase().indexOf(searchValue) !== -1);
    return books;
  }
}
