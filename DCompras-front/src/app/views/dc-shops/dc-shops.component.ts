import { Component } from '@angular/core';
import { DcShopsService } from 'src/app/services/dc-shops.service';

@Component({
  selector: 'app-dc-shops',
  templateUrl: './dc-shops.component.html',
  styleUrls: ['./dc-shops.component.scss'],
})
export class DcShopsComponent {
  shops!: any[];

  constructor(private dcShopsService: DcShopsService) {}

  ngOnInit() {
    this.getShops();
  }
  getShops() {
    this.dcShopsService.getAllShops().subscribe({
      next: (response) => {
        this.shops = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
