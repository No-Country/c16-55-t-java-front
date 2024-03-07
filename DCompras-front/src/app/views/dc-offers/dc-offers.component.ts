import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAllProducts } from 'src/app/interfaces/IAllProducts';
import { DcOffersService } from 'src/app/services/dc-offers.service';
import { ProductDataService } from 'src/app/services/dc-product.service';
import { DcListService } from 'src/app/services/lista.service';
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
  selectedProducts: Set<string> = new Set();

  searchTerm: string = '';
  searchTermSubscription!: Subscription;

  productList: any[] = [];

  constructor(
    private dcOffersService: DcOffersService,
    private fb: FormBuilder,
    private router: Router,

    private dcListService: DcListService,
    private productDataService: ProductDataService
  ) {}

  imagen!: any;
  ngOnInit(): void {
    this.productDataService.productList$.subscribe((productsResponse: any) => {
      const products = productsResponse.productos;

      this.products = products.map((product: any) => {
        this.dcListService
          .image(product.nombre)
          .subscribe((imgUrl: string | null) => {
            product.title = imgUrl;
          });

        product.isSelected = this.selectedProducts.has(product.id);
        return product;
      });
    });

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
        }
        this.getProduct(idsSucursales, '01');
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
                this.dcListService
                  .image(product.nombre)
                  .subscribe((imgUrl: string | null) => {
                    product.title = imgUrl;
                  });
                product.isSelected = this.selectedProducts.has(product.id);

                return product;
              });
            }
          });
      }
    });
  }
  onSelectedChange(isSelected: boolean) {
    console.log('Producto seleccionado:', isSelected);
  }

  onCategorySelect(event: any) {
    const categoryControl = this.myOffers.get('category');

    if (categoryControl) {
      categoryControl.setValue(event.value);
      const categoryId = event.value;
    } else {
      console.log('El control de categoría es nulo.');
    }
  }
  getCategory() {
    this.dcOffersService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  toggleProductSelection(productId: string): void {
    if (this.selectedProducts.has(productId)) {
      this.selectedProducts.delete(productId);
    } else {
      this.selectedProducts.add(productId);
    }
  }

  navigateMyOrder() {
    this.router.navigate(['/home/shopping']);
  }
}
