import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';
import { DcRegisterComponent } from './views/dc-register/dc-register.component';

const routes: Routes = [
  /*   {
    path: '',
    component: DcLoginComponent,
  }, */
  {
    path: '',
    component: DcRegisterComponent, pathMatch:"full"
  },
  {
     path: 'register',
     component: DcRegisterComponent, pathMatch:"full"
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
