import { Component, Input } from '@angular/core';
import { IDcProduct } from 'src/app/interfaces/Idc-product';

@Component({
  selector: 'app-dc-product-card',
  templateUrl: './dc-product-card.component.html',
  styleUrls: ['./dc-product-card.component.scss'],
})
export class DcProductCardComponent {
  @Input() product!: IDcProduct;
}
