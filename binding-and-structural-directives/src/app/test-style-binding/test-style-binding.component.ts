import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-style-binding',
  template: `
    <h2>Welcome {{name}}</h2>
    <h3 [style.color]="hasError ? 'red' : 'green'">Style Binding</h3>
    <h3 [style.color]="highlightColor">Style Binding 2</h3>
    <h3 [ngStyle]="titleStyles">Hey</h3>
  `,
  styles: []
})
export class TestStyleBindingComponent implements OnInit {
  public name = "Codevolution";

  public hasError = false;

  public isSpecial = true;

  public highlightColor = 'orange';

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

}
