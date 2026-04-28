import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const URL = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root',
})
export class BookData {
  constructor(private http: HttpClient) {}

  getBooks(): Promise<Book[]> {
    const datenstrom = this.http.get<Book[]>(URL);
    return firstValueFrom(datenstrom);
  }

  getBook(isbn: string): Promise<Book | null> {
    const datenstrom = this.http.get<Book>(URL + '/' + isbn);
    return firstValueFrom(datenstrom);
  }

}
