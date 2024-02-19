import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dc-sidenav',
  templateUrl: './dc-sidenav.component.html',
  styleUrls: ['./dc-sidenav.component.scss'],
})
export class DcSidenavComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  closed: boolean = true;
  panelOpenState = false;
  pageTitle = 'FS.TITLE.TITLEHOME';
  mode!: MatDrawerMode;

  displayLogoMobile: boolean = false;
  windowWidth: number = window.innerWidth;
  shouldShowBlock: boolean = true;
  pageTitleMap = new Map<string, string>([
    ['/finsuite/cards/new-card', 'Ofertas'],
    ['/finsuite/cards', 'Categorías'],
    ['/finsuite/operaciones', 'Tiendas'],
    ['/finsuite/points', 'Mi perfil'],
  ]);
  onRouteChangeSub: Subscription = new Subscription();
  listItems!: any[];

  constructor(private router: Router) {
    this.updateMode(window.innerWidth);
  }

  ngOnInit() {
    this.setListItems();
    const CurrentURL = this.router.url;
    this.shouldDisplayLogoOnMobile(CurrentURL);
    const pageTitle = this.pageTitleMap.get(CurrentURL) || '';
    this.pageTitle = pageTitle;
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
        img: 'assets/img/sidenav/inicio.svg',
        text: 'Ofertas',
        link: '',
      },
      {
        img: 'assets/img/sidenav/tarjetas.svg',
        text: 'Categorías',
        link: '',
      },
      {
        img: 'assets/img/sidenav/prestamos.svg',
        text: 'Tiendas',
        link: '',
      },
      {
        img: 'assets/img/sidenav/pagar servicios.svg',
        text: 'Mi perfil',
        link: '',
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

  /*   toggleDrawer() {
    this.toggleService.toggle();
  }
 */

  shouldDisplayLogoOnMobile(CurrentURL: string) {
    if (CurrentURL === '/finsuite/home') {
      this.displayLogoMobile = true;
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
