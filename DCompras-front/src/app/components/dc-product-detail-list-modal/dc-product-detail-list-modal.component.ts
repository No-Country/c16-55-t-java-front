import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DcListService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-dc-product-detail-list-modal',
  templateUrl: './dc-product-detail-list-modal.component.html',
  styleUrls: ['./dc-product-detail-list-modal.component.scss'],
})
export class DcProductDetailListModalComponent {
  checkboxSeleccionado: any = null;
  totalPrecios: number = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dcListService: DcListService
  ) {}

  ngOnInit() {}

  sucursalSeleccionada(sucursalSelect: any) {
    this.checkboxSeleccionado = sucursalSelect;
    const itemSucursal = {
      ...this.data.product,
      sucursalSelect: sucursalSelect,
    };
    this.dcListService.agregarProducto(itemSucursal);
  }
}
