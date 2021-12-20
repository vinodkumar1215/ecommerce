import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl :string = 'http://jsonplaceholder.cypress.io/';
 // baseSerrviceURL = environment.serviceUrl;

  constructor(private http :HttpClient) { }

  listUsers(){
    return this.http.get(this.baseUrl+'users');

  }
  viewuser(id:string){
    return this.http.get(this.baseUrl+'users/'+id);
  }
  // getTeachers(){
  //   return this.http.get(this.baseSerrviceURL+'teacher/getteachers')
  // }

}
