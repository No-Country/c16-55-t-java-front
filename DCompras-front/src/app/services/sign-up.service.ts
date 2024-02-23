import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/api-response';
import { SignUp } from '../interfaces/sign-up';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private urlAPI: string = environment.endpoint + "auth/";

  //private urlAPI: string = "http://localhost:8080/auth/";

  constructor(
    private http: HttpClient) { }

   saveRegister(request: SignUp): Observable<ApiResponse> {
     //return this.http.post<ApiResponse>('http://localhost:8080/auth/signup', request);
     return this.http.post<ApiResponse>(`${this.urlAPI}signup`, request)
   }


}
