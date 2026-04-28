import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'welcome',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {}
