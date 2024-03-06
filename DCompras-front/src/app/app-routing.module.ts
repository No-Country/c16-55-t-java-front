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
import { DcShoppingCartComponent } from './views/dc-shopping-cart/dc-shopping-cart.component';
import { DcForgotPassFormComponent } from './components/dc-forgot-pass-form/dc-forgot-pass-form.component';
import { DcLoginPassRecoveryComponent } from './views/dc-login-pass-recovery/dc-login-pass-recovery.component';

const routes: Routes = [
  {
    path: '',
    component: DcLoginComponent,
  },
  {
    path: 'login',
    component: DcLoginComponent,
    // children: [
    //   {
    //     path: 'recovery',
    //     component: DcLoginPassRecoveryComponent,
    //   }
    // ]
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
        path: 'shopping',
        component: DcShoppingCartComponent,
      },
      /*  {
        path: 'shops',
        component: DcShopsComponent,
      }, */

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
  {
    path: 'forgot-pass',
    component: DcForgotPassFormComponent,
  },
  {
    path: 'recoveryPass',
    component: DcLoginPassRecoveryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
