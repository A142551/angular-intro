import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-two-way-bind',
  template: `
    <h2>Hello</h2>
    <input [(ngModel)]="name" type="text">
    {{name}}
  `,
  styles: []
})
export class TestTwoWayBindComponent implements OnInit {
  public name = "";
  constructor() { }

  ngOnInit() {
  }

}
