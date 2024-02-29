import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../interfaces/sign-up';
import { ApiResponse } from '../interfaces/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DcLoginService {
  urlAPI: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  saveRegister(request: SignUp): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.urlAPI}auth/login`, request);
  }

}
