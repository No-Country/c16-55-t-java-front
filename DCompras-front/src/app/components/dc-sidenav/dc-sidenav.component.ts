import {
  Component,
  HostListener,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

import { MatAccordion } from '@angular/material/expansion';
import { IDCProfile } from 'src/app/interfaces/Idc-profile';
import { DCProfileService } from 'src/app/services/dc-profile.service';

@Component({
  selector: 'app-dc-sidenav',
  templateUrl: './dc-sidenav.component.html',
  styleUrls: ['./dc-sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DcSidenavComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  closed: boolean = true;
  panelOpenState = false;
  pageTitle = 'register';
  mode!: MatDrawerMode;
  profile!: IDCProfile;
  companyLogo!: string;
  displayLogoMobile: boolean = false;
  windowWidth: number = window.innerWidth;
  shouldShowBlock: boolean = true;
  pageTitleMap = new Map<string, string>([
    ['/home/offers', 'Ofertas'],
    ['/home/categories', 'Categorías'],
    ['/home/shops', 'Tiendas'],
    ['/home/my-profile', 'Mi perfil'],
    ['/home/register', 'Registro'],
    ['/home/login', 'Inicio de sesión'],
  ]);
  themeConfigSub: Subscription = new Subscription();
  onRouteChangeSub: Subscription = new Subscription();
  onLangChangeSub!: Subscription;
  listItems!: any[];

  constructor(
    private router: Router,
    private dcProfileService: DCProfileService
  ) {
    this.updateMode(window.innerWidth);
    this.onRouteChangeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getPageTitle(event.urlAfterRedirects);
        this.pageTitle = pageTitle;
      }
    });
  }

  ngOnInit() {
    this.setListItems();
    const CurrentURL = this.router.url;
    const pageTitle = this.pageTitleMap.get(CurrentURL) || '';
    this.pageTitle = pageTitle;
  }
  private getProfileById() {
    this.dcProfileService.getProfileData().subscribe((data) => {
      this.profile = data;
    });
  }

  getPageTitle(url: string): string {
    switch (url) {
      case '/home/offers':
        return 'Ofertas';
      case '/home/categories':
        return 'Categorías';
      case '/home/shops':
        return 'Tiendas';
      case '/home/my-profile':
        return 'Mi perfil';

      default:
        return '';
    }
  }
  setListItems() {
    this.listItems = [
      {
        img: 'assets/icons/dc-sidenav/offers.png',
        text: 'Ofertas',
        link: 'offers',
      },
      /*    {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Categorías',
        link: 'categories',
      }, */
      {
        img: 'assets/icons/dc-sidenav/shop_icon.svg',
        text: 'Tiendas',
        link: 'shops',
      },
      {
        img: 'assets/icons/dc-sidenav/profile.svg',
        text: 'Mi perfil',
        link: 'my-profile',
      },
      /*       {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Registro',
        link: 'register',
      },
      {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Inicio de sesión',
        link: 'login',
      }, */
    ];
  }
  ngOnDestroy(): void {
    this.onRouteChangeSub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.updateMode(this.windowWidth);
  }

  private updateMode(windowWidth: number) {
    if (windowWidth > 950) {
      this.mode = 'side';
    } else {
      this.mode = 'over';
    }
  }

  changeStatusSideNav() {
    if (!this.drawer?.opened) {
      this.drawer.open();
      this.closed = false;
    } else {
      this.drawer?.close();
      this.closed = true;
    }
  }
  open() {
    this.drawer.open();
    this.closed = false;
  }
  close() {
    this.drawer.close();
    this.closed = true;
  }

  linkSelected(event: any) {
    this.listItems.map((item) => {
      item.selected = false;
    });

    this.listItems.map((item) => {
      if (item.link === event) {
        item.selected = true;
      }
    });
  }
}
