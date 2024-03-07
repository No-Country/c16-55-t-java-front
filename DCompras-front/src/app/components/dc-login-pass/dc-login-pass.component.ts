import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { DcUserService } from 'src/app/services/dc-user.service';

@Component({
  selector: 'app-dc-login-pass',
  templateUrl: './dc-login-pass.component.html',
  styleUrls: ['./dc-login-pass.component.scss'],
})
export class DcLoginPassComponent {
  emailFound: boolean = false;
  formUserEmail: FormGroup;
  formUserPassword: FormGroup;

  constructor(private http: HttpClient, private urlService: DcUserService) {
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
      console.log('El correo electrónico es:', this.formUserEmail.value.email);
      this.urlService
        .newPassWord({
          email: this.formUserEmail.value.email,
        })
        .subscribe(
          (response) => {
            console.log('Correo Enviado', response);
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
        console.log(
          'Contraseña restablecida:',
          this.formUserPassword.value.newPassword
        );

        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json',
        });

        console.log('Enviando solicitud para restablecer la contraseña.');
        console.log('Este es el body:', this.formUserPassword.value);

        this.urlService
          .newPassWord({
            email: this.formUserEmail.value.email,
          })
          .subscribe(
            (response) => {
              console.log('Correo Enviado', response);
            },
            (error) => {
              console.log('Correo no enviado', error);
            }
          );
      } else {
      }
    }
  }
}
