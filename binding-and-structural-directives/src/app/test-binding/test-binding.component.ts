import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-binding',
  template: `
    <h2>
      Welcome {{name}}
    </h2>

    <input [id]="myId" type="text" value="Syn-Ee">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Syn-Ee">
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Syn-Ee">
  `,
  styles: []
})
export class TestBindingComponent implements OnInit {
  public name = "Codevolution";
  public myId = "testId";
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

}
