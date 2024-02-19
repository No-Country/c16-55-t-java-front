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

@NgModule({
  declarations: [AppComponent, DcLoginComponent, DcSidenavComponent, DcLoginFormComponent, DcLoginBannerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
