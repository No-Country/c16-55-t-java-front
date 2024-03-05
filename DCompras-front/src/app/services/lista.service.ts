import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DcListService {
  constructor(private http: HttpClient) {}

  productos: any[] = [];
  agregarProducto(producto: any): void {
    if (producto.sucursalSelect) {
      const index = this.productos.findIndex((prod) => prod.id === producto.id);
      if (index !== -1) {
        console.log('productos para reemplazar', producto);

        this.productos[index] = producto;
      } else {
        this.productos.push(producto);
      }
    } else {
      const productosFavoritosString =
        window.localStorage.getItem('productosFavoritos');
      let productosFavoritos: any[] = [];

      if (productosFavoritosString) {
        productosFavoritos = JSON.parse(productosFavoritosString);
      }

      const index = this.productos
        .concat(productosFavoritos)
        .findIndex((p) => p.id === producto.id);
      if (index === -1) {
        this.productos.push(producto);
      } else {
        this.productos.splice(index, 1);
      }
    }
    console.log('prodListaServicio', this.productos);
  }

  obtenerProductos(): any[] {
    return this.productos;
  }

  getItemDetail(product: any) {
    return this.http.get<any>(
      `https://d3e6htiiul5ek9.cloudfront.net/dev/producto?entorno=mayoristas&limit=30&id_producto=${product.id}&array_sucursales=61-1-17,60-1-0019,63-1-35,63-1-66,60-1-0022,61-1-14,61-1-11,63-1-28,62-1-2,63-1-34,63-1-43,61-1-18,63-1-65,61-1-19,63-1-42,63-1-31,63-1-23,60-1-0021,61-1-12,63-1-8,62-1-3,63-1-27,61-1-4,61-1-21,63-1-33,61-1-5,63-1-37,63-1-13,60-1-0006,63-1-45`
    );
  }
}
