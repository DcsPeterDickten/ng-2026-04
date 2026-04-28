import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from "./books/book-list/book-list";
// import { Calculator } from './shared/calculator/calculator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookList, ], // Calculator
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public name: string = 'Bücher';
}
