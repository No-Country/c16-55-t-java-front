import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DcHeaderComponent } from './components/dc-header/dc-header.component';
import { DcRegisterComponent } from './views/dc-register/dc-register.component';
import { DcRegisterFormComponent } from './components/dc-register-form/dc-register-form.component';
import { DcLoginFormComponent } from './components/dc-login-form/dc-login-form.component';
import { DcLoginBannerComponent } from './components/dc-login-banner/dc-login-banner.component';
import { DcOffersComponent } from './views/dc-offers/dc-offers.component';
import { DcCategoriesComponent } from './views/dc-categories/dc-categories.component';
import { DcShopsComponent } from './views/dc-shops/dc-shops.component';
import { DcMyProfileComponent } from './views/dc-my-profile/dc-my-profile.component';
import { DcCardComponent } from './components/dc-card/dc-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent,
    DcSidenavComponent,
    DcHeaderComponent,
    DcRegisterComponent,
    DcRegisterFormComponent,
    DcLoginFormComponent,
    DcLoginBannerComponent,
    DcOffersComponent,
    DcCategoriesComponent,
    DcShopsComponent,
    DcMyProfileComponent,
    DcCardComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
