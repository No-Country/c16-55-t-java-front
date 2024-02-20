import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';
<<<<<<< HEAD
import { DcRegisterComponent } from './views/dc-register/dc-register.component';
=======
import { DcLoginFormComponent } from './components/dc-login-form/dc-login-form.component';
import { DcLoginBannerComponent } from './components/dc-login-banner/dc-login-banner.component';
>>>>>>> origin/DeLaCruz

const routes: Routes = [
  /*   {
    path: '',
    component: DcLoginComponent,
  }, */
  {
    path: '',
    component: DcRegisterComponent,
  },
  {
    path: 'home',
    component: DcSidenavComponent,
    children: [
      {
        path: '',
        component: DcLoginComponent,
      },
      {
        path: 'register',
        component: DcRegisterComponent,
      },
    ],
  },
  {
    path: 'login',
    component: DcLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
