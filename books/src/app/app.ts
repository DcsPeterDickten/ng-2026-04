import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref], // Calculator
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public name: string = 'Bücher';
}
