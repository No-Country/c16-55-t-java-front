import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [],
  exports: [
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatGridListModule,
    MatButtonModule
  ],
})
export class SharedModule {}
