import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() isSelected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  prodFavorite: any[] = [];

  constructor(public DcListService: DcListService) {}

  ngOnInit(): void {
    const productosFavoritos = this.DcListService.obtenerProductos();

    productosFavoritos.forEach((res) => {
      if (res && res.id === this.product.id) {
        this.isSelected = true;
      }
    });
  }
  agregarProductoSeleccionado(producto: any): void {
    this.DcListService.agregarProducto(producto);
    this.prodFavorite = this.DcListService.obtenerProductos();
  }
}
