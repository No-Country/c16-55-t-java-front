import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDcShop } from '../interfaces/Idc-shop';

@Injectable({
  providedIn: 'root',
})
export class DcShopsService {
  constructor(private http: HttpClient) {}

  getAllShops(): Observable<IDcShop[]> {
    return this.http.get<IDcShop[]>('assets/db/dc-list-shops.json');
  }
}
