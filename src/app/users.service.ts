import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {IUsers} from './users';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

			
@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  
  private _url: string = "/assets/data/users.json";
  
  getUsers(): Observable<IUsers[]>{
  	return this.http.get<IUsers[]>(this._url)
  								.catch(this.errorHandler);
  }
  
  errorHandler(error: HttpErrorResponse){
	return Observable.throw(error.message || "Server Error"); //<==== if null then 'Server Error'
  }
  
  
  
/*
  getUsers(){
		return [
			{"id": 1, "name": "Andrew", "age": 30},
			{"id": 2, "name": "Brandon", "age": 25},
			{"id": 3, "name": "Christina", "age": 26},
			{"id": 4, "name": "Elena", "age": 28}	
		]
 }
*/

}
