import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class UsersService{
    baseUrl = 'https://reqres.in/api/';
    constructor(
        private _http: HttpClient,
    ){
        
    }
    getPage(callingroute, params) {
        if (callingroute == "users") {
          return this.fetchAllUsers();
        } else if (callingroute == "users/:id") {
            return this.fetchAllUsers(params.id);
          }else if(callingroute == "user/:id"){
          return this.fetchUserDetails(params.id);
        }
      }
  // fetch user information
  fetchAllUsers(page=1) {
      console.log('page',page)
    return this._http.get(`${this.baseUrl}users?page=${page}`)
      .pipe(
        timeout(10000),
        catchError((error) => {
        //   this._errorHandler.routeAccordingToError(error);
          return throwError(error);
        })
      );
  }
  fetchUserDetails(id) {
    return this._http.get(`${this.baseUrl}users/${id}`)
      .pipe(
        timeout(10000),
        catchError((error) => {
        //   this._errorHandler.routeAccordingToError(error);
          return throwError(error);
        })
      );
  }
}