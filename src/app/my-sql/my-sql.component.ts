import { Component, OnInit } from '@angular/core';

import { UsersService } from './../users.service';

@Component({
  selector: 'app-my-sql',
  template: `
  
    <h2>Users Details</h2>
    <h3>{{errorMsg}}</h3>  
  
  	<ul *ngFor="let user of users">
  		<li>{{user.id}}. {{user.name}} - {{user.age}} </li>
  	</ul>
  
  
  `,
  styleUrls: ['./my-sql.component.css']
})


export class MySqlComponent implements OnInit {

	public users = [];
	
	public errorMsg;

  	constructor(private _usersService: UsersService) { }

  	ngOnInit() {
    		this._usersService.getUsers()
  			.subscribe(data => this.users = data,
							error => this.errorMsg = error);
  
  	}

}
