import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      department-list
    </h3>
    
    <ul class="items">
    	<li (click)="onSelect(department)"  *ngFor="let department of departments">
    		<span class="badge">{{department.id}}</span> {{department.name}}
    	</li>
    </ul> 
    
  `,
  styles: []
})


export class DepartmentListComponent implements OnInit {

  ngOnInit() {
  }
  
  departments = [
  	{"id": 1, "name": "Angular"},
  	{"id": 2, "name": "Node"},
  	{"id": 3, "name": "MongoDB"},
  	{"id": 4, "name": "Ruby"},
  	{"id": 5, "name": "Bootstrap"}
  ]
  
  constructor(private router: Router) { }

  onSelect(department){
  
  	console.log("I am in onSelect()"); 
    //{path: 'departments/:id', component: DepartmentDetailComponent},
  	
  	this.router.navigate(['/departments', department.id]); //<=== 'navigate': like 'forward/redirect'-- http://localhost:4200/departments/x
  }

}
