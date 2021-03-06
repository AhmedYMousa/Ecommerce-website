import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly BaseUrl = "https://localhost:5001/api/users";

  private loginSource = new BehaviorSubject<boolean>(this.IsLoggedIn());
  loginStatus = this.loginSource.asObservable();

  constructor(private http: HttpClient) {

  }

  Register(user): Observable<any> {
    return this.http.post(this.BaseUrl, user, httpOptions);
  }

  Login(loginData): Observable<any> {
    return this.http
      .post<any>(
        "https://localhost:5001/api/users/token",
        loginData,
        httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      `Something bad happened; please try again later. ${error}`);
  };

  Logout() {
    if (this.IsLoggedIn()) {
      localStorage.removeItem("token");
    }
  }

  IsLoggedIn(): boolean {
    // !!localStorage.getItem("token") return boolean value using !!
    return !!localStorage.getItem("token");
  }
  changeLoginStatus(login: boolean) {
    this.loginSource.next(login);
  }
}
