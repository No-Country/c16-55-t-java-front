import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  province!: any;
  categories!: any;
  myOffers!: FormGroup;
  constructor(
    private dcOffersService: DcOffersService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myOffers = this.fb.group({
      category: { value: '01', disabled: false },
    });
    this.getShopProvince();
    this.getCategory();
  }
  getShopProvince() {
    this.dcOffersService.getProvinceFromLocalStorage().subscribe((res: any) => {
      if (res && res.sucursales && Array.isArray(res.sucursales)) {
        const sucursales = res.sucursales;
        const idsSucursales: string[] = [];
        sucursales.forEach((sucursal: any) => {
          if (sucursal && sucursal.id) {
            idsSucursales.push(sucursal.id);
          }
        });
        const categoryControl = this.myOffers.get('category');
        if (categoryControl) {
          categoryControl.valueChanges.subscribe((categoryId) => {
            this.getProduct(idsSucursales, categoryId);
          });
        } else {
          console.log('El control "category" no está definido o es nulo.');
        }
        this.getProduct(idsSucursales, '01');
        console.log('IDs de sucursales:', idsSucursales);
      } else {
        console.log(
          'La respuesta no contiene la propiedad "sucursales" o no es un array.'
        );
      }
    });
  }
  getProduct(idsSucursales: string[], categoryId: string): void {
    this.dcOffersService.getImg().subscribe((res: any[]) => {
      if (res && res.length > 0) {
        this.dcOffersService
          .searchProducts(idsSucursales, categoryId)
          .subscribe((response) => {
            if (response && response.productos) {
              this.products = response.productos.map((product: any) => {
                const matchingProduct = res.find(
                  (item: any) => item.id === product.id
                );
                if (matchingProduct) {
                  product.title = matchingProduct.imgUrl;
                } else {
                  product.title = null;
                }
                return product;
              });
            }
          });
      }
    });
  }
  onCategorySelect(event: any) {
    const categoryControl = this.myOffers.get('category');

    if (categoryControl) {
      categoryControl.setValue(event.value);
      const categoryId = event.value;
      console.log('datoss', categoryId);
    } else {
      console.log('El control de categoría es nulo.');
    }
  }
  getCategory() {
    this.dcOffersService.getCategories().subscribe((res) => {
      this.categories = res;
      console.log(this.categories);
    });
  }
}
