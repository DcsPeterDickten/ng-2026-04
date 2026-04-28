import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating implements OnChanges {
  @Input()
  id: string = '?';

  @Input()
  stars: number = 0;

  @Output()
  upVote: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  downVote: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes: { [propName: string]: SimpleChange<any> }): void {
    console.log('Rating ngOnChanges', this.id, changes);
  }

  plus() {
    console.log('Rating.plus', this.id);
    this.upVote.emit(this.id);
  }

  minus() {
    console.log('Rating.minus', this.id);
    this.downVote.emit(this.id);
  }
}
