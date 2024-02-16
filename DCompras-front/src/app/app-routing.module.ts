import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';

const routes: Routes = [
  /*   {
    path: '',
    component: DcLoginComponent,
  }, */
  {
    path: '',
    component: DcSidenavComponent,
    children: [
      {
        path: '',
        component: DcLoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
