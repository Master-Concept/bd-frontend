import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Header } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // For jsonplaceholder
  // baseUrl: string = 'https://jsonplaceholder.typicode.com/'
  baseUrl: string = 'https://localhost:7106/api/'
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(this.baseUrl + 'users')
  }
  viewUser(id: string){
    return this.http.get(this.baseUrl + 'users/' + id)
  }
  addUser(userObj:any){
    return this.http.post(this.baseUrl + 'users' , userObj)
  }
  // For jsonplaceholder
  updateUser(id:string, userObj:any){
    const headers = { 'Content-type': 'application/json; charset=UTF-8' };
    const body =  JSON.stringify(userObj);
    return this.http.put<any>(this.baseUrl + 'users/' + id, body, { headers })
    .subscribe(data=>JSON.stringify(userObj))
  }
  deleteUser(id:string){
    return this.http.delete(this.baseUrl + 'users/' + id)
  }
}
