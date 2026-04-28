import { Routes } from '@angular/router';
import { BookList } from './books/book-list/book-list';
import { Calculator } from './shared/calculator/calculator';
import { Welcome } from './shared/welcome/welcome';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'books', component: BookList },
  { path: 'calculator', component: Calculator },
];
