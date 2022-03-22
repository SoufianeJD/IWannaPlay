// import { Injectable } from '@angular/core';
// import { catchError, map } from 'rxjs/operators';
// import { Observable, throwError } from 'rxjs';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { User } from '../models/User';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//     //baseUrl = 'http://10.30.40.121:3015'
//     baseUrl = 'http://localhost:8080/user'
//      // Http Header
//   httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

//   constructor(private HttpClient : HttpClient) { }

// Users(): Observable<User[]> {

// return this.HttpClient.get<User[]>(`${this.baseUrl}/users`);

// }
// createUser(user:User){

//   console.log(user);

//   return this.HttpClient.post<User> (`${this.baseUrl}/createUser`,user).subscribe(

//   ()=>{

//     console.log("Ok");



//   },
//   (error)=>{

//   console.log('Erreur')

// }

//   );
// }

//   // Get single object
//   getUser(id:any): Observable<any> {
//     let API_URL = `${this.baseUrl}/users/${id}`;
//     return this.HttpClient.get(API_URL, { headers: this.httpHeaders })
//       .pipe(map((res: any) => {
//           return res || {}
//         }),
//         catchError(this.handleError)
//       )
//   }

// // Update
// updateUser(id:any, data:any): Observable<any> {
//   let API_URL = `${this.baseUrl}/updateUser/${id}`;
//   return this.HttpClient.put(API_URL, data, { headers: this.httpHeaders })
//     .pipe(
//       catchError(this.handleError)
//     )
// }



// deleteUser(user:User){

//   console.log(user);

//   return this.HttpClient.delete<User> (`${this.baseUrl}/deleteUser/`+user._id).subscribe(

//   ()=>{
//     location.reload();
//     console.log("Is deleted succesfully");


//   },
//   (error)=>{

//   console.log('Erreur')

// }

//   );
// }

//   // Error
//   handleError(error: HttpErrorResponse) {
//     let errorMessage = '';
//     if (error.error instanceof ErrorEvent) {
//       // Handle client error
//       errorMessage = error.error.message;
//     } else {
//       // Handle server error
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     console.log(errorMessage);
//     return throwError(errorMessage);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
