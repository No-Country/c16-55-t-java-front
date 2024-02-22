import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../interfaces/sign-up';
import { ApiResponse } from '../interfaces/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DcLoginService {

    //private urlAPI: string = "http://localhost:8080/auth/";

    constructor(
      private http: HttpClient
      ) { }

     saveRegister(request: SignUp): Observable<ApiResponse> {
       return this.http.post<ApiResponse>('http://localhost:8080/auth/login', request);
     }


    // saveRegister(request: SignUp) {
    //   return this.http.post<SignUp>('http://localhost:8080/auth/signup', request);
    // }


  }

