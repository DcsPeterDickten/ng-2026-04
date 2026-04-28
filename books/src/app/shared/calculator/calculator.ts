import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'calculator',
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  public x: number = 0;
  public y: number = 0;
  public result: number = 0;

  add() {
    this.result = this.x + this.y;
  }

  subtract() {
    this.result = this.x - this.y;
  }

  clear() {
    this.x = 0;
    this.y = 0;
    this.result = 0;
  }
}
