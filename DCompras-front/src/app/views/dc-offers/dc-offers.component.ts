import { Component } from '@angular/core';
import { IAllProducts } from 'src/app/interfaces/IAllProducts';
import { DcOffersService } from 'src/app/services/dc-offers.service';
interface OfferResponse {
  items: any[]; // Aquí puedes definir una estructura más específica si es posible
}
@Component({
  selector: 'app-dc-offers',
  templateUrl: './dc-offers.component.html',
  styleUrls: ['./dc-offers.component.scss'],
})
export class DcOffersComponent {
  products!: any;
  province!: any;

  infoProduct!: any;
  productosLocal: any;
  ofertas: any[] = [];

  constructor(private dcOffersService: DcOffersService) {}

  ngOnInit(): void {
    /*  this.dcOffersService.getProductosLocal().subscribe((res) => {
      this.productosLocal = res;
      console.log('holaaa', this.productosLocal);
    }); */

    /* 
    this.getInfoProduct(); */
    this.getShopProvince();
  }
  /*   getOffers() {
    this.dcOffersService.getAllOffers().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  } */

  /*  getComercios() {
    this.dcOffersService.obtenerOfertas().subscribe((data) => {
      this.ofertas = data.items;
    });
  } */

  /*   getProduct() {
    this.dcOffersService.offers1().subscribe((res) => {
      this.products = res.productos;
      console.log(this.products);
    });
  } */

  getProduct(idsSucursales: string[]): void {
    this.dcOffersService.getImg().subscribe((res: any[]) => {
      if (res && res.length > 0) {
        this.dcOffersService
          .buscarProductos(idsSucursales)
          .subscribe((response) => {
            if (response && response.productos) {
              this.products = response.productos.map((product: any) => {
                const matchingProduct = res.find(
                  (item: any) => item.id === product.id
                );
                if (matchingProduct) {
                  product.title = matchingProduct.imgUrl;
                } else {
                  product.title = null; // O algún otro valor por defecto si no quieres null
                }
                return product;
              });
            }
          });
      }
    });
  }

  /*   getInfoProduct() {
    this.dcOffersService.offersFilter().subscribe((res) => {
      if (res && res.productos) {
        // Mapear los productos para mostrar solo el id, nombre y marca
        this.infoProduct = res.productos.map((product: any) => ({
          id: product.id,
          nombre: product.nombre,
          marca: product.marca,
        }));
        console.log('INFO', this.infoProduct);
      }
    });
  } */
  getShopProvince() {
    this.dcOffersService.getProvinceFromLocalStorage().subscribe((res: any) => {
      // Verificar si la respuesta contiene la propiedad 'sucursales'
      if (res && res.sucursales && Array.isArray(res.sucursales)) {
        // Obtener el array de sucursales
        const sucursales = res.sucursales;

        // Crear una lista para almacenar los IDs de sucursales
        const idsSucursales: string[] = [];

        // Recorrer cada sucursal y obtener el ID
        sucursales.forEach((sucursal: any) => {
          // Verificar si la sucursal tiene un ID
          if (sucursal && sucursal.id) {
            // Agregar el ID a la lista de IDs de sucursales
            idsSucursales.push(sucursal.id);
          }
        });

        this.getProduct(idsSucursales);

        // Imprimir la lista de IDs de sucursales
        console.log('IDs de sucursales:', idsSucursales);
      } else {
        console.log(
          'La respuesta no contiene la propiedad "sucursales" o no es un array.'
        );
      }
    });
  }

  buscarProductosPorSucursales(idsSucursales: string[]): void {
    // Llamar al servicio del otro componente y pasarle los idsSucursales
    this.dcOffersService.buscarProductos(idsSucursales).subscribe(
      (respuesta: any) => {
        console.log('datosss', respuesta);
      },
      (error: any) => {
        console.error(
          'Ocurrió un error al llamar al servicio del otro componente:',
          error
        );
      }
    );
  }

  getItems() {}
}
