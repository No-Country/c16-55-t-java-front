import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DcLoginFormComponent } from './components/dc-login-form/dc-login-form.component';
import { DcLoginBannerComponent } from './components/dc-login-banner/dc-login-banner.component';
import { DcHeaderComponent } from './components/dc-header/dc-header.component';
import { DcRegisterComponent } from './views/dc-register/dc-register.component';
import { DcRegisterFormComponent } from './components/dc-register-form/dc-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent,
    DcSidenavComponent,
    DcHeaderComponent,
    AppComponent,
    DcLoginComponent,
    DcSidenavComponent,
    DcRegisterComponent,
    DcRegisterFormComponent,
    AppComponent,
    DcLoginComponent,
    DcSidenavComponent,
    DcLoginFormComponent,
    DcLoginBannerComponent,
  ],
})
export class AppModule {}
