import { Routes } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { Calculator } from './shared/calculator/calculator';
import { Welcome } from './shared/welcome/welcome';
import { BookDetail } from './books/book-detail/book-detail';
import { bookGuard } from './books/book-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'books', component: BookList },
  { path: 'books/:isbn', component: BookDetail, canActivate: [bookGuard] },
  { path: 'calculator', component: Calculator },
];
