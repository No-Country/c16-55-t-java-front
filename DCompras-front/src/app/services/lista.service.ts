import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DcListService {
  constructor(private http: HttpClient) {}

  productos: any[] = [];

  precioFinal: number = 0; // Variable para almacenar el precio final

  sumarPrecios(): void {
    let total = 0;
    this.productos.forEach((producto: any) => {
      if (producto.sucursalSelect && producto.sucursalSelect.preciosProducto) {
        total +=
          producto.sucursalSelect.preciosProducto.precio_unitario_con_iva;
      }
    });

    this.precioFinal = total;
  }

  agregarProducto(producto: any): void {
    if (producto.sucursalSelect) {
      const index = this.productos.findIndex((prod) => prod.id === producto.id);
      if (index !== -1) {
        console.log('productos para reemplazar', producto);

        this.productos[index] = producto;
        this.sumarPrecios();
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

  getItemDetail(product: any, idsSucursales: string[]): Observable<any> {
    const idsString = idsSucursales.join(',');

    const url = `https://d3e6htiiul5ek9.cloudfront.net/dev/producto?entorno=mayoristas&limit=30&id_producto=${product.id}&array_sucursales=${idsString}`;

    return this.http.get<any>(url);
  }

  /* image(nombre : any): Observable<any> {
    return this.http.get<any>(
      `https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=${nombre}`
    );
  } */

  image(nombre: string): Observable<string | null> {
    return this.http
      .get<any>(
        `https://api.mercadolibre.com/products/search?status=active&site_id=MLA&q=${nombre}`
      )
      .pipe(
        map((response: any) => {
          /*    const matchingProduct = response.results.find(
            (product: any) => product.title === nombre
          ); */
          console.log('imagen del producto', response.results[0]);

          return response.results[0].pictures[0].url;
        }),
        catchError(() => of(null)) // Manejo de errores, devolvemos null si hay un error
      );
  }
}
