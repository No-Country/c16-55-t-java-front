import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDcProduct } from 'src/app/interfaces/Idc-product';
import { DcListService } from 'src/app/services/lista.service';
import { DcProductDetailListModalComponent } from '../dc-product-detail-list-modal/dc-product-detail-list-modal.component';
import { DcOffersService } from 'src/app/services/dc-offers.service';

@Component({
  selector: 'app-dc-selectProduct',
  templateUrl: './dc-selectProduct.component.html',
  styleUrls: ['./dc-selectProduct.component.scss'],
})
export class DcSelectProductComponent {
  @Input() product!: any;
  preciosPorSucursal: { [sucursal: string]: number } = {};

  constructor(
    public dcListService: DcListService,
    public dcOffersService: DcOffersService,
    public dialog: MatDialog
  ) {}
  ngOnInit() {}

  openModal(product: any) {
    this.dcOffersService.getProvinceFromLocalStorage().subscribe((res: any) => {
      if (res && res.sucursales && Array.isArray(res.sucursales)) {
        const sucursales = res.sucursales;
        const idsSucursales: string[] = [];
        sucursales.forEach((sucursal: any) => {
          if (sucursal && sucursal.id) {
            idsSucursales.push(sucursal.id);
          }
        });

        this.dcListService.getItemDetail(product, idsSucursales).subscribe(
          (data) => {
            this.dialog.open(DcProductDetailListModalComponent, {
              data: {
                product: product,
                productDetails: data, // Agrega los detalles del producto a los datos del modal
              },
            });
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
  }

  /*  openModal(product: any) {

    this.dcOffersService.getProvinceFromLocalStorage().subscribe((res: any) => {
      if (res && res.sucursales && Array.isArray(res.sucursales)) {
        const sucursales = res.sucursales;
        const idsSucursales: string[] = [];
        sucursales.forEach((sucursal: any) => {
          if (sucursal && sucursal.id) {
            idsSucursales.push(sucursal.id);
          }
        });

        this.dcListService.getItemDetail(product,idsSucursales).subscribe(
          (data) => {
            this.dialog.open(DcProductDetailListModalComponent, {
              data: {
                product: product,
                productDetails: data, // Agrega los detalles del producto a los datos del modal
              },
            });
          },
          (error) => {
            console.error('Error al obtener detalles del producto:', error);
          }
        );


      }


    });


  } */

  deleteProduct(product: any) {
    this.dcListService.agregarProducto(product);
  }
}
