import { Component } from '@angular/core';
import { IDcProduct } from 'src/app/interfaces/Idc-product';
import { DcOffersService } from 'src/app/services/dc-offers.service';

@Component({
  selector: 'app-dc-offers',
  templateUrl: './dc-offers.component.html',
  styleUrls: ['./dc-offers.component.scss'],
})
export class DcOffersComponent {
  products!: any[];

  constructor(private dcOffersService: DcOffersService) {}

  ngOnInit() {
    this.getOffers();
  }
  getOffers() {
    this.dcOffersService.getAllOffers().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
