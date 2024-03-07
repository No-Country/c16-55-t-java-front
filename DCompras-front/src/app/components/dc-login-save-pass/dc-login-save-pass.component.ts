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
        console.log(
          'Contraseña restablecida:',
          this.formUserPassword.value.newPassword
        );

        console.log('Enviando solicitud para restablecer la contraseña.');
        console.log('Este es el body:', this.formUserPassword.value);

        const token = this.route.snapshot.queryParamMap.get('token');
        console.log('Este es su token, miamor: ', token);

        this.urlService
          .savePassWord({
            token: token,
            newPassword: this.formUserPassword.value.newPassword,
          })
          .subscribe(
            (response: any) => {
              if(response.message == 'Password Changed' ){
                this.utilitiesService.mostrarAlerta('Tu contraseña fue cambiada', 'Ok!');
                this.router.navigate(['/login']);
              }
              else {
                this.utilitiesService.mostrarAlerta('Se produjo un error', 'Oops!');
              }
              
            },
            (error) => {
              console.log('Correo no enviado', error);
            }
          );
      } else {
        console.log('Las contraseñas no coinciden');
      }
    }
  }
}
