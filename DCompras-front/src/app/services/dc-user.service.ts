import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IdcUser } from '../interfaces/idc-user';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class DcUserService {
  private urlAPI: string = environment.endpoint;

  constructor(private http: HttpClient) {}

  editUser(userEdit: IdcUser): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.urlAPI}/user/update/info`,
      userEdit
    );
  }

  editpassWord(userEdit: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.urlAPI}/user/update/password`,
      userEdit
    );
  }

  newPassWord(userEdit: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.urlAPI}/user/reset/password`,
      userEdit
    );
  }
}
