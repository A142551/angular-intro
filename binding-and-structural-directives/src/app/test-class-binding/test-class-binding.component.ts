import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class-binding',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>
    <h2 class="text-special" [class]="successClass">Hello</h2>
    <h2 [class.text-danger]="hasError">Hello</h2>
    <h2 [ngClass]="messageClasses">Get it :)</h2> // ngClass directive is a custom HTML attribute that Angular provides  
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestClassBindingComponent implements OnInit {

  public name = "Codevolution";

  public successClass= "text-success";

  public hasError = false;

  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
