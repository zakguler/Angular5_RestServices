import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      you selected department department with id= {{departmentId}}
    </p>
    
    <a (click)="goPrevious()" >Previous</a>
    <a (click)="goNext()" >Next</a>
    
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
  		//from the current route snapshot..  get the id parameter from the URL:
  		//		http://localhost:4200/departments/2
		//{path: 'departments/:id', component: DepartmentDetailComponent},
		
//		let id =parseInt(this.route.snapshot.paramMap.get("id"));	//<======= [ActivatedRoute] read/receive the parameter ':id'		
//		this.departmentId = id;

		this.route.paramMap.subscribe( (params: ParamMap) => {
			let id = parseInt(params.get("id"));
			this.departmentId = id;
		});

  }

  
  
 goPrevious(){
 		let previousId = this.departmentId - 1;
 	 	this.router.navigate(['/departments', previousId]);

 } 
  
  
   goNext(){
 		let previousId = this.departmentId + 1;
 	 	this.router.navigate(['/departments', previousId]);

 } 
  
  

}
