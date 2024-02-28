import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';
import { DcRegisterComponent } from './views/dc-register/dc-register.component';
import { DcLoginFormComponent } from './components/dc-login-form/dc-login-form.component';
import { DcLoginBannerComponent } from './components/dc-login-banner/dc-login-banner.component';
import { DcOffersComponent } from './views/dc-offers/dc-offers.component';
import { DcShopsComponent } from './views/dc-shops/dc-shops.component';
import { DcCategoriesComponent } from './views/dc-categories/dc-categories.component';
import { DcMyProfileComponent } from './views/dc-my-profile/dc-my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DcLoginComponent,
  },
  {
    path: 'login',
    component: DcLoginComponent,
  },
  {
    path: 'register',
    component: DcRegisterComponent,
  },

  {
    path: 'home',
    component: DcSidenavComponent,
    children: [
      {
        path: 'offers',
        component: DcOffersComponent,
      },
      /*    {
        path: 'categories',
        component: DcCategoriesComponent,
      },
 */
      {
        path: 'shops',
        component: DcShopsComponent,
      },

      {
        path: 'my-profile',
        component: DcMyProfileComponent,
      },

      /*   {
        path: 'register',
        component: DcRegisterComponent,
      }, */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
