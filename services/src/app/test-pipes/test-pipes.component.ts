import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  template: `
    <h1>Pipes are cool assss</h1>

    <h2>{{ name }}</h2>
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ name | titlecase }}</h2>
    <h2>{{ name | slice:3:5 }}</h2>
    <h2>{{ person | json}}</h2>

    <h2>{{ 5.678 | number: '1.2-3'}}</h2>
    <h2>{{ 5.678 | number: '4.4-5'}}</h2>
    <h2>{{ 5.678 | number: '3.1-2'}}</h2>

    <h2>{{ 0.25 | percent }}</h2>

    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency: 'GBP' }}</h2>
    <h2>{{ 0.25 | currency: 'AUD' : 'code' }}</h2>

    <h2>{{ date }}</h2>
    <h2>{{ date | date:'short' }}</h2>
    <h2>{{ date | date:'shortDate' }}</h2>
    <h2>{{ date | date:'shortTime' }}</h2>

    <h2>{{ date | date:'medium' }}</h2>
    <h2>{{ date | date:'mediumDate' }}</h2>
    <h2>{{ date | date:'mediumTime' }}</h2>

    <h2>{{ date | date:'long' }}</h2>
    <h2>{{ date | date:'longDate' }}</h2>
    <h2>{{ date | date:'longTime' }}</h2>
  `,
  styles: []
})
export class TestPipesComponent implements OnInit {

  public name = "Syn-Ee Wong";
  public message = "Welcome to codevolution";
  public person = {
    firstName: "John",
    lastName: "Smith"
  }

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
