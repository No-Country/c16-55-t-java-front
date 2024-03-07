import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DcUserService } from 'src/app/services/dc-user.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-dc-login-save-pass',
  templateUrl: './dc-login-save-pass.component.html',
  styleUrls: ['./dc-login-save-pass.component.scss'],
})
export class DcLoginSavePassComponent {
  formUserPassword: FormGroup;

  constructor(
    private urlService: DcUserService,
    private route: ActivatedRoute,
    private utilitiesService: UtilitiesService,
    private router: Router
  ) {
    this.formUserPassword = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmitChangePassword() {
    if (this.formUserPassword.valid) {
      if (
        this.formUserPassword.value.newPassword ===
        this.formUserPassword.value.confirmPassword
      ) {
        const token = this.route.snapshot.queryParamMap.get('token');

        this.urlService
          .savePassWord({
            token: token,
            newPassword: this.formUserPassword.value.newPassword,
          })
          .subscribe(
            (response: any) => {
              if (response.message == 'Password Changed') {
                this.utilitiesService.mostrarAlertaSuccess(
                  'Contraseña fue actualizada',
                  'Ok!'
                );
                this.router.navigate(['/login']);
              } else {
                this.utilitiesService.mostrarAlertaError(
                  'Se produjo un error',
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
        this.utilitiesService.mostrarAlertaError(
          'Las contraseñas no coinciden',
          'Oops!'
        );
      }
    }
  }
}
