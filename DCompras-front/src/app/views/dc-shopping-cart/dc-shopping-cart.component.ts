import { Component } from '@angular/core';
import { DcListService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-dc-shopping-cart',
  templateUrl: './dc-shopping-cart.component.html',
  styleUrls: ['./dc-shopping-cart.component.scss'],
})
export class DcShoppingCartComponent {
  productosRaros: any;

  constructor(public DcListService: DcListService) {}

  ngOnInit() {
    this.productosRaros = this.DcListService.obtenerProductos();
    console.log(this.productosRaros);
  }
}
