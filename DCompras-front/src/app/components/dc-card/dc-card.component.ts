import { Component, Input } from '@angular/core';
import { IDcProduct } from 'src/app/interfaces/Idc-product';
import { DcListService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-dc-card',
  templateUrl: './dc-card.component.html',
  styleUrls: ['./dc-card.component.scss'],
})
export class DcCardComponent {
  @Input() product!: any;
  @Input() shop!: IDcProduct;
  @Input() title: string | null = null;

  constructor(public DcListService: DcListService) {}

  agregarProductoSeleccionado(producto: any): void {
    this.DcListService.agregarProducto(producto);
  }
}
