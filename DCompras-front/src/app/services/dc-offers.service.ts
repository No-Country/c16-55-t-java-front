import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDcProduct } from '../interfaces/Idc-product';

@Injectable({
  providedIn: 'root',
})
export class DcOffersService {
  constructor(private http: HttpClient) {}

  getAllOffers(): Observable<IDcProduct[]> {
    return this.http.get<IDcProduct[]>('assets/db/dc-list-offers.json');
  }
}
