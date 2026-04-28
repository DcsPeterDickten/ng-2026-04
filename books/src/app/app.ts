import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { BookList } from "./books/book-list/book-list";
// import { Calculator } from './shared/calculator/calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookList, RouterLinkWithHref], // Calculator
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public name: string = 'Bücher';
}
