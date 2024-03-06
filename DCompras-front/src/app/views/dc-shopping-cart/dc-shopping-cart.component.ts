import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DcListService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-dc-shopping-cart',
  templateUrl: './dc-shopping-cart.component.html',
  styleUrls: ['./dc-shopping-cart.component.scss'],
})
export class DcShoppingCartComponent {
  productosRaros: any[] = [];
  precioTotal: number = 0;
  constructor(public dcListService: DcListService, private router: Router) {}

  ngOnInit() {
    this.productosRaros = this.dcListService.obtenerProductos();
    console.log('listat', this.productosRaros);
  }

  navigateOffers() {
    this.router.navigate(['/home/offers']);
  }
}
