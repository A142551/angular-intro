import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-switch',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red</div>
      <div *ngSwitchCase="'blue'">You picked blue</div>
      <div *ngSwitchCase="'green'">You picked green</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
  `,
  styles: []
})
export class TestNgSwitchComponent implements OnInit {

  public color = "orange";

  constructor() { }

  ngOnInit() {
  }

}
