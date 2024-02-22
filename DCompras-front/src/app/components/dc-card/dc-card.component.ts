import { Component, Input } from '@angular/core';
import { IDcProduct } from 'src/app/interfaces/Idc-product';

@Component({
  selector: 'app-dc-card',
  templateUrl: './dc-card.component.html',
  styleUrls: ['./dc-card.component.scss'],
})
export class DcCardComponent {
  @Input() product!: IDcProduct;
  @Input() shop!: IDcProduct;
}
