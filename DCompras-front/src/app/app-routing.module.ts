import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';
import { DcRegisterComponent } from './views/dc-register/dc-register.component';
import { DcOffersComponent } from './views/dc-offers/dc-offers.component';
import { DcMyProfileComponent } from './views/dc-my-profile/dc-my-profile.component';
import { DcShoppingCartComponent } from './views/dc-shopping-cart/dc-shopping-cart.component';
import { DcLoginPassRecoveryComponent } from './views/dc-login-pass-recovery/dc-login-pass-recovery.component';
import { DcEditPasswordComponent } from './views/dc-edit-password/dc-edit-password.component';

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
    path: 'edit-pass',
    component: DcEditPasswordComponent,
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
