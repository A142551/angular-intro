import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with id = {{departmentId}}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </p>
    <p>
      <button (click)="backToDepartmentList()">Back</button>
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // ## Using the snapshot has drawbacks that the component was re-used and thus did not re-render
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    // Use paramMap Observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments',previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments',nextId]);
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo:this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo:this.route});
  }

  backToDepartmentList() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // Optional Route Parameters, you don't need to write this in routing.module
    // ## This is absolute path
    // this.router.navigate(['/departments', {id: selectedId, test: 'testValue'}]);

    // ## This is relative path
    this.router.navigate(['../', {id: selectedId, test: 'testValue'}], {relativeTo: this.route});
  }

}
