import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-comp-interaction',
  template: `
    <h2>{{'Hello ' + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class TestCompInteractionComponent implements OnInit {

  // Use name as an alias for the input from parent
  @Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey Wong Syn-Ee');
  }

}
