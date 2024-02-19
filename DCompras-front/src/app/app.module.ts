import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcLoginComponent } from './views/dc-login/dc-login.component';
import { DcSidenavComponent } from './components/dc-sidenav/dc-sidenav.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DcHeaderComponent } from './components/dc-header/dc-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DcLoginComponent,
    DcSidenavComponent,
    DcHeaderComponent,
  ],
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
