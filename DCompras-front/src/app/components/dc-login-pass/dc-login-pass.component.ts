import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DcUserService } from 'src/app/services/dc-user.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-dc-login-pass',
  templateUrl: './dc-login-pass.component.html',
  styleUrls: ['./dc-login-pass.component.scss'],
})
export class DcLoginPassComponent {
  emailFound: boolean = false;
  formUserEmail: FormGroup;
  formUserPassword: FormGroup;

  constructor(
    private http: HttpClient,
    private urlService: DcUserService,
    private router: Router,
    public dialog: MatDialog,
    private utilitiesService: UtilitiesService
  ) {
    this.formUserEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.formUserPassword = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmitEmail() {
    if (this.formUserEmail.valid) {
      this.urlService
        .newPassWord({
          email: this.formUserEmail.value.email,
        })
        .subscribe(
          (response: any) => {
            if (response.message == 'Email enviado') {
              this.utilitiesService.mostrarAlertaSuccess(
                'Correo enviado',
                'Ok!'
              );
              this.navigateToLogin();
            } else {
              this.utilitiesService.mostrarAlertaError(
                'Se produjo un error (Tu correo ya fue enviado o no existe el usuario con ese email)',
                'Oops!'
              );
              this.navigateToLogin();
            }
          },
          (error) => {
            console.log('Correo no enviado', error);
          }
        );
    }
  }

  onSubmitChangePassword() {
    if (this.formUserPassword.valid) {
      if (
        this.formUserPassword.value.newPassword ===
        this.formUserPassword.value.confirmPassword
      ) {
        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
        });

        this.urlService
          .newPassWord({
            email: this.formUserEmail.value.email,
          })
          .subscribe(
            (response: any) => {
              if (response.message == 'Email enviado') {
                this.utilitiesService.mostrarAlertaSuccess(
                  'Correo enviado',
                  'Ok!'
                );
              } else {
                this.utilitiesService.mostrarAlertaError(
                  'Se produjo un error (Tu correo ya fue enviado o no existe el usuario con ese email)',
                  'Oops!'
                );
              }
            },
            (error) => {
              this.utilitiesService.mostrarAlertaError(
                'Correo no enviado',
                'Oops!'
              );
            }
          );
      } else {
      }
    }
  }

  navigateToLogin(): void {
    this.dialog.closeAll();
    //this.router.navigate(['/login']);
  }
}
