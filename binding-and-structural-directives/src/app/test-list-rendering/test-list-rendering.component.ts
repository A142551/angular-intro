import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list-rendering',
  template: `
    <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
      <h2 class="{{i}}">{{f}} {{l}} {{o}} {{e}} {{color}}</h2>
    </div>
  `,
  styles: []
})
export class TestListRenderingComponent implements OnInit {
  public colors = ["red","blue","green","yellow"];
  constructor() { }

  ngOnInit() {
  }

}
