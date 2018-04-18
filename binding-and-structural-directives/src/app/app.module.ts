import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestBindingComponent } from './test-binding/test-binding.component';
import { TestClassBindingComponent } from './test-class-binding/test-class-binding.component';
import { TestStyleBindingComponent } from './test-style-binding/test-style-binding.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestTemplateReferenceVarsComponent } from './test-template-reference-vars/test-template-reference-vars.component';
import { TestTwoWayBindComponent } from './test-two-way-bind/test-two-way-bind.component';
import { TestStructuralDirComponent } from './test-structural-dir/test-structural-dir.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestListRenderingComponent } from './test-list-rendering/test-list-rendering.component';
import { TestCompInteractionComponent } from './test-comp-interaction/test-comp-interaction.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestBindingComponent,
    TestClassBindingComponent,
    TestStyleBindingComponent,
    TestEventBindingComponent,
    TestTemplateReferenceVarsComponent,
    TestTwoWayBindComponent,
    TestStructuralDirComponent,
    TestNgSwitchComponent,
    TestListRenderingComponent,
    TestCompInteractionComponent,
    TestPipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
