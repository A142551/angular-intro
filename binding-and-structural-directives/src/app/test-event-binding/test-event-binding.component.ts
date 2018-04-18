import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome Heolo'">Greet</button>
    {{greeting}}
  `,
  styles: []
})
export class TestEventBindingComponent implements OnInit {

  public name = "Syn-Ee";

  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = "Welcome to Code";
  }

}
