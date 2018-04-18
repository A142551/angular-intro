import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee detail</h2>
    <span>{{errorMessage}}</span>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }} {{ employee.name }} {{ employee.age }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {
  
  public employees = [];
  public errorMessage;
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMessage = error);
  }

}
