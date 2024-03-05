import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService {
  private productListSource = new Subject<any[]>();
  productList$ = this.productListSource.asObservable();

  constructor() {}

  sendProductList(products: any[]) {
    this.productListSource.next(products);
  }
}
