import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()" >Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
  @Output() clicked = new EventEmitter<String>();
  @Output('clickable') anotherClicked = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    this.clicked.emit('it Works');
    this.anotherClicked.emit('it Works too');
  }

}
