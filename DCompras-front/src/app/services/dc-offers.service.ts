import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { IDcProduct } from '../interfaces/Idc-product';
import { IAllProducts } from '../interfaces/IAllProducts';
import { DcListService } from './lista.service';
import { SignUpService } from './sign-up.service';
interface Product {
  cantSucursalesDisponible: number;
  id: string;
  marca: string;
  nombre: string;
  precioMax: number;
  precioMin: number;
  presentacion: string;
  title?: string;
}
@Injectable({
  providedIn: 'root',
})
export class DcOffersService {
  constructor(
    private http: HttpClient,
    private dcListService: DcListService,
    private signUpService: SignUpService
  ) {}

  searchProducts(idsSucursales: string[], categoryId: string): Observable<any> {
    const url = `https://d3e6htiiul5ek9.cloudfront.net/prod/productos?&id_categoria=${categoryId}&array_sucursales=${idsSucursales.join(
      ','
    )}&offset=80&limit=99&sort=-cant_sucursales_disponible`;
    return this.http.get<any>(url);
  }

  getImg(): Observable<any> {
    return this.http.get<any>('assets/db/dc-imgProduct.json');
  }
  getProvinceFromLocalStorage(): Observable<any[]> {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);

      return new Observable((observer) => {
        this.signUpService.getState().subscribe((res) => {
          const provinciaBuscada = res.find(
            (provinces: any) => provinces.name === userInfo.province
          );

          if (provinciaBuscada) {
            const provinceUrl = `https://d3e6htiiul5ek9.cloudfront.net/prod/sucursales?lat=${provinciaBuscada.centroide.lat}&lng=${provinciaBuscada.centroide.lng}&limit=30`;
            this.http.get<any[]>(provinceUrl).subscribe((data) => {
              observer.next(data);
              observer.complete();
            });
          } else {
            observer.next([]);
            observer.complete();
          }
        });
      });
    } else {
      console.error('No se encontró userInfo en el almacenamiento local');
      throw new Error('No se encontró userInfo en el almacenamiento local');
    }
  }
  getDataFromAPI(ids: string[]): Observable<any> {
    const idsString = ids.join(',');
    const apiUrl = `https://d3e6htiiul5ek9.cloudfront.net/prod/productos?&id_categoria=01&array_sucursales=${idsString}&offset=80&limit=99&sort=-cant_sucursales_disponible`;
    return this.http.get(apiUrl);
  }
  getCategories(): Observable<any> {
    return this.http.get<any>('assets/db/dc-category.json');
  }

  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }

  apiUrl = 'https://d3e6htiiul5ek9.cloudfront.net/prod/productos';

  searchProductosos(searchInput: string, ids: string[]): Observable<any> {
    const idsString = ids.join(',');
    const url = `${this.apiUrl}?string=${searchInput}&array_sucursales=${idsString}&offset=0&limit=50&sort=-cant_sucursales_disponible`;
    return this.http.get(url);
  }
}
