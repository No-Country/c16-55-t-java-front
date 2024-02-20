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

  constructor(private router: Router) {
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
      case '/home/register':
        return 'Registro';
      case '/home/login':
        return 'Inicio de sesión';
      default:
        return '';
    }
  }
  ngOnDestroy(): void {
    this.onRouteChangeSub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.updateMode(this.windowWidth);
  }

  closeAccordion() {
    this.accordion?.closeAll();
  }

  setListItems() {
    this.listItems = [
      {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Ofertas',
        link: 'offers',
      },
      {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Categorías',
        link: 'categories',
      },
      {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Tiendas',
        link: 'shops',
      },
      {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Mi perfil',
        link: 'my-profile',
      },
      {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Registro',
        link: 'register',
      },
      {
        img: 'assets/imgs/dc-general/search.svg',
        text: 'Inicio de sesión',
        link: 'login',
      },
    ];
  }

  private updateMode(windowWidth: number) {
    if (windowWidth > 950) {
      this.mode = 'side';
    } else {
      this.mode = 'over';
    }
  }
  /* 
  toggleDrawer() {
    this.toggleService.toggle();
  } */

  /*  shouldDisplayLogoOnMobile(CurrentURL: string) {
    if (CurrentURL === '//home') {
      this.displayLogoMobile = true;
    }
  } */
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
    this.closeAccordion();
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
