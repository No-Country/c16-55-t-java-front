import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDcProduct } from 'src/app/interfaces/Idc-product';
import { DcListService } from 'src/app/services/lista.service';
import { DcProductDetailListModalComponent } from '../dc-product-detail-list-modal/dc-product-detail-list-modal.component';

@Component({
  selector: 'app-dc-selectProduct',
  templateUrl: './dc-selectProduct.component.html',
  styleUrls: ['./dc-selectProduct.component.scss'],
})
export class DcSelectProductComponent {
  @Input() product!: any;

  constructor(public dcListService: DcListService, public dialog: MatDialog) {}
  openModal(product: any) {
    this.dcListService.getItemDetail(product).subscribe(
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
}
