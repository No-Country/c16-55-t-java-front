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

  ofertas: any[] = [];

  constructor(private dcOffersService: DcOffersService) {}

  ngOnInit() {
    /* 
    this.getOffers(); */
    this.getProduct(); /* 
    this.getComercios(); */
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

  getProduct() {
    this.dcOffersService.offers1().subscribe((res) => {
      this.products = res.productos;
      console.log(this.products);
    });
  }
}
