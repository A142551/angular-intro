import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-structural-dir',
  template: `
    <h1 *ngIf="displayName; else elseBlocker">Yo</h1>
    <ng-template #elseBlocker>
      <h1>Name is hidden</h1>
    </ng-template>

    <section *ngIf="displayName; then thenBlock; else elseBlock"></section>
    <ng-template #thenBlock>
      Then block
    </ng-template>

    <ng-template #elseBlock>
      Else block
    </ng-template>
  `,
  styles: []
})
export class TestStructuralDirComponent implements OnInit {
  public displayName = false;
  constructor() { }

  ngOnInit() {
  }

}
