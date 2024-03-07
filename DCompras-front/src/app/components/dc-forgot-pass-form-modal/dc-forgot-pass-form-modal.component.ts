import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dc-forgot-pass-form-modal',
  templateUrl: './dc-forgot-pass-form-modal.component.html',
  styleUrls: ['./dc-forgot-pass-form-modal.component.scss']
})
export class DcForgotPassFormModalComponent {
  @Inject(MAT_DIALOG_DATA) public data: any


  
}
