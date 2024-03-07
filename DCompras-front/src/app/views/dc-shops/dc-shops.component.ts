import { Component } from '@angular/core';
import { DcShopsService } from 'src/app/services/dc-shops.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-dc-shops',
  templateUrl: './dc-shops.component.html',
  styleUrls: ['./dc-shops.component.scss'],
})
export class DcShopsComponent {
  shops!: any[];

  constructor(
    private dcShopsService: DcShopsService,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit() {
    this.getShops();
  }
  getShops() {
    this.dcShopsService.getAllShops().subscribe({
      next: (response) => {
        this.shops = response;
      },
      error: (err) => {
        this.utilitiesService.mostrarAlertaError(
          'Error al cargar tiendas',
          'Oops!'
        );
      },
    });
  }
}
