import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-template-reference-vars',
  template: `
    <h1>hello</h1>
    <input #myInput type="text" value="hello">
    <button (click)="logger(myInput.value)">Log</button>
  `,
  styles: []
})
export class TestTemplateReferenceVarsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logger(value) {
    console.log(value);
  }

}
