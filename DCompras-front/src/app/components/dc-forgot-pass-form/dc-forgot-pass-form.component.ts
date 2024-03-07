import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DcUserService } from 'src/app/services/dc-user.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-dc-forgot-pass-form',
  templateUrl: './dc-forgot-pass-form.component.html',
  styleUrls: ['./dc-forgot-pass-form.component.scss'],
})
export class DcForgotPassFormComponent {
  email: string = '';
  password: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  formUser: FormGroup;

  constructor(
    private http: HttpClient,
    private urlService: DcUserService,
    private utilitiesService: UtilitiesService
  ) {
    this.formUser = new FormGroup({
      email: new FormControl(this.email),
      password: new FormControl(this.password),
      newPassword: new FormControl(this.newPassword),
    });
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      document
        .getElementById('confirmPassword-error')
        ?.classList.remove('hidden');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });

    this.loading = true;

    this.utilitiesService.mostrarAlertaSuccess(
      'Enviando solicitud para restablecer la contraseña',
      'Ok!'
    );

    this.urlService.editpassWord(this.formUser.value).subscribe(
      (response) => {
        this.utilitiesService.mostrarAlertaSuccess(
          'Contraseña restablecida correctamente',
          'Ok!'
        );
        this.loading = false;
      },
      (error) => {
        this.utilitiesService.mostrarAlertaError(
          'Error al restablecer la contraseña',
          'Oops!'
        );
        this.loading = false;
      }
    );
  }
}
