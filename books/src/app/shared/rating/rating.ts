import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rating',
  imports: [],
  templateUrl: './rating.html',
  styleUrl: './rating.css',
})
export class Rating {
  @Input()
  id : string = '?'

  @Input()
  stars : number = 0;

  @Output()
  upVote : EventEmitter<string> = new EventEmitter<string>();

  @Output()
  downVote : EventEmitter<string> = new EventEmitter<string>();

  plus() {
    console.log('Rating.plus', this.id);
    this.upVote.emit(this.id);
  }

  minus() {
    console.log('Rating.minus', this.id);
    this.downVote.emit(this.id);
  }



}
