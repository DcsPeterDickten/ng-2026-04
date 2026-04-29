import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookData } from '../book-data';

@Component({
  selector: 'app-book-detail',
  imports: [CurrencyPipe],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail {

  public isbn: string = '';
  public book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookData: BookData,
    private changeDetectorRef: ChangeDetectorRef) {
    this.isbn = this.route.snapshot.params['isbn'];
  }

  async ngOnInit() {
    this.book = await this.bookData.getBook(this.isbn);
    this.changeDetectorRef.detectChanges();
  }

}
