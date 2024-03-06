import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  Input,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, map, startWith, take } from 'rxjs';
import { Router } from '@angular/router';
import { DcUserService } from 'src/app/services/dc-user.service';
import { DcOffersService } from 'src/app/services/dc-offers.service';
import { ProductDataService } from 'src/app/services/dc-product.service';

@Component({
  selector: 'app-dc-header',
  templateUrl: './dc-header.component.html',
  styleUrls: ['./dc-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DcHeaderComponent implements OnInit, OnDestroy {
  @Output() linkSelected = new EventEmitter<any>();
  myControl = new FormControl('');
  @Input() pageTitle: string = '';
  options!: any[];
  filteredOptions!: Observable<any[]>;
  notifications$!: Subscription;
  setNotifications: boolean = false;
  onLangChangeSub!: Subscription;
  subscriptionName!: Subscription;
  loggedInUserName: string = '';
  loggedInUserLastname: string = '';

  constructor(
    private router: Router,
    private dcUserService: DcUserService,
    public dcOffersService: DcOffersService,
    private productDataService: ProductDataService
  ) {}

  ngOnInit() {
    this.setFilteredOptions();

    const userInfoLogueado: string | null = localStorage.getItem('userInfo');
    const userInfo =
      userInfoLogueado !== null ? JSON.parse(userInfoLogueado) : null;

    if (userInfo !== null) {
      this.loggedInUserName = userInfo.name;
    } else {
      this.loggedInUserName = '';
    }

    if (userInfo !== null) {
      this.loggedInUserLastname = userInfo.lastname;
    } else {
      this.loggedInUserLastname = '';
    }

    //this.loggedInUserName = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!).name : '';
  }

  ngOnDestroy(): void {
    if (this.subscriptionName) {
      this.subscriptionName.unsubscribe();
    }
    if (this.notifications$) {
      this.notifications$.unsubscribe();
    }
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }
  }

  private setFilteredOptions() {
    this.setOptions();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private setOptions() {
    this.options = [
      {
        link: 'register',
        text: 'FS.HEADER.OPTIONS.START',
        selected: false,
      },
    ];
  }

  _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.text.toLowerCase().includes(filterValue)
    );
  }

  onSelect(option: any) {
    this.router.navigate(['/home/register']);
    this.linkSelected.emit(option);
    this.myControl.reset();
  }

  prevenRefresh(event: any) {
    event.preventDefault();
  }

  saveChangesBeforeLogout() {
    const userDataString: string | null = localStorage.getItem('userInfo');
    if (userDataString !== null) {
      const userData: any = JSON.parse(userDataString);
      this.dcUserService.editUser(userData).subscribe({
        next: (response: any) => {
          if (response.status === 0 && response.message === 'success') {
            const userInfo: any = JSON.stringify(response.payload);
            localStorage.setItem('userInfo', userInfo);
          } else {
            console.error(
              'Error al guardar los cambios antes de cerrar sesión'
            );
          }
        },
        error: (error: any) => {
          console.error(
            'Error al conectar con el servidor al guardar los cambios antes de cerrar sesión'
          );
        },
      });
    }
  }

  onHome() {
    this.router.navigate(['/home']);
  }

  /*  onSearchEnter(searchInput: string) {
    this.dcOffersService.getProvinceFromLocalStorage().subscribe((res: any) => {
      if (res && res.sucursales && Array.isArray(res.sucursales)) {
        const sucursales = res.sucursales;
        const idsSucursales: string[] = [];
        sucursales.forEach((sucursal: any) => {
          if (sucursal && sucursal.id) {
            idsSucursales.push(sucursal.id);
          }
        });
        this.dcOffersService.searchProductosos(searchInput, idsSucursales);
        console.log('IDs de sucursales:', idsSucursales);
      } else {
        console.log(
          'La respuesta no contiene la propiedad "sucursales" o no es un array.'
        );
      }
    });
  } */

  /* onSearchEnter(searchInput: HTMLInputElement) {
    const searchString = searchInput.value;
    this.dcOffersService.getProvinceFromLocalStorage().subscribe((res: any) => {
      if (res && res.sucursales && Array.isArray(res.sucursales)) {
        const sucursales = res.sucursales;
        const idsSucursales: string[] = [];
        sucursales.forEach((sucursal: any) => {
          if (sucursal && sucursal.id) {
            idsSucursales.push(sucursal.id);
          }
        });
        this.dcOffersService
          .searchProductosos(searchString, idsSucursales)
          .subscribe((productos: any) => {
            console.log('Productos encontrados:', productos);
          });

        console.log('IDs de sucursales:', idsSucursales);
      } else {
        console.log(
          'La respuesta no contiene la propiedad "sucursales" o no es un array.'
        );
      }
    });
  } */

  onSearchEnter(searchInput: HTMLInputElement) {
    const searchString = searchInput.value;
    this.dcOffersService.getProvinceFromLocalStorage().subscribe((res: any) => {
      if (res && res.sucursales && Array.isArray(res.sucursales)) {
        const sucursales = res.sucursales;
        const idsSucursales: string[] = [];
        sucursales.forEach((sucursal: any) => {
          if (sucursal && sucursal.id) {
            idsSucursales.push(sucursal.id);
          }
        });
        this.router.navigate(['/home/offers']);
        this.dcOffersService
          .searchProductosos(searchString, idsSucursales)
          .subscribe((productos: any) => {
            this.productDataService.sendProductList(productos);
          });
        console.log('IDs de sucursales:', idsSucursales);
      } else {
        console.log(
          'La respuesta no contiene la propiedad "sucursales" o no es un array.'
        );
      }
    });
  }
}
