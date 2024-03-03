import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/api-response';
import { SignUp } from '../interfaces/sign-up';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private urlAPI: string = environment.endpoint;

  constructor(private http: HttpClient) {}

  saveRegister(request: SignUp): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.urlAPI}/auth/signup`, request);
  }

  getState(): Observable<any[]> {
    return this.http.get<any[]>('assets/db/dc-all-state.json');
  }
}
