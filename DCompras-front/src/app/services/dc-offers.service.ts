import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDcProduct } from '../interfaces/Idc-product';
import { IAllProducts } from '../interfaces/IAllProducts';
interface OfferResponse {
  items: any[]; // Aquí puedes definir una estructura más específica si es posible
}
@Injectable({
  providedIn: 'root',
})
export class DcOffersService {
  constructor(private http: HttpClient) {}

  getAllOffers(): Observable<IDcProduct[]> {
    return this.http.get<IDcProduct[]>('assets/db/dc-list-offers.json');
  }
  offers1(): Observable<any> {
    return this.http.get<any>(
      'https://d3e6htiiul5ek9.cloudfront.net/prod/productos?&id_categoria=02&array_sucursales=10-3-785,10-3-768,9-2-444,10-3-720,10-3-648,10-3-770,16-2-4104,10-3-765,9-1-440,10-3-769,9-2-435,2002-1-81,10-3-610,16-2-5204,10-3-772,10-3-793,10-3-607,9-2-441,10-3-790,10-3-776,10-3-642,9-1-476,10-3-641,16-2-5404,2002-1-82,10-3-606,9-1-434,10-3-764,16-2-4804,9-2-439&offset=0&limit=88&sort=-cant_sucursales_disponible'
    );
  }

  /*   obtenerProductosOtraLlamada(): Observable<any> {
    return this.http.get<any>(
      'https://d3e6htiiul5ek9.cloudfront.net/prod/productos?&id_categoria=02&array_sucursales=10-3-785,10-3-768,9-2-444,10-3-720,10-3-648,10-3-770,16-2-4104,10-3-765,9-1-440,10-3-769,9-2-435,2002-1-81,10-3-610,16-2-5204,10-3-772,10-3-793,10-3-607,9-2-441,10-3-790,10-3-776,10-3-642,9-1-476,10-3-641,16-2-5404,2002-1-82,10-3-606,9-1-434,10-3-764,16-2-4804,9-2-439&offset=89&limit=230&sort=-cant_sucursales_disponible'
    );
  } */
}
