import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IDCProfile } from '../interfaces/Idc-profile';
import { DcProfileEdit } from '../interfaces/Idc-profile-update';

@Injectable({
  providedIn: 'root',
})
export class DCProfileService {
  id!: string;

  constructor(private http: HttpClient) {}

  private profileUpdated = new Subject<void>();
  profileUpdated$ = this.profileUpdated.asObservable();

  triggerProfileUpdate(): void {
    this.profileUpdated.next();
  }

  getProfileData(): Observable<IDCProfile> {
    return this.http.get<IDCProfile>(``);
  }

  updateProfileData(newDataProfile: DcProfileEdit): Observable<any> {
    return this.http.put<IDCProfile>(``, newDataProfile);
  }
}
