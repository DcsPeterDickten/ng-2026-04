import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookList } from "./books/book-list/book-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public name: string = 'Bücher';
}
