import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';

import { DepartmentDetailComponent } from './department-detail/department-detail.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MySqlComponent } from './my-sql/my-sql.component';



// http://localhost:4200/departments
// http://localhost:4200/employees

const routes: Routes = [
	{path: '', redirectTo: '/departments', pathMatch: 'full' }, 	//<=== ['prefix': !!!] ['full': if full url is empty}
	{path: 'departments', component: DepartmentListComponent},
	{path: 'departments/:id', component: DepartmentDetailComponent},
	{path: 'employees', component: EmployeeListComponent},
	{path: 'mysql', component: MySqlComponent},
	{path: '**', component: PageNotFoundComponent}
	
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent,
								  EmployeeListComponent, 
								  PageNotFoundComponent, 
								  DepartmentDetailComponent,
								  MySqlComponent]
