import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DcUserService } from 'src/app/services/dc-user.service';

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

  constructor(private http: HttpClient, private urlService: DcUserService) {
    this.formUser = new FormGroup({
      email: new FormControl(this.email),
      password: new FormControl(this.password),
      newPassword: new FormControl(this.newPassword),
    });
  }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      document.getElementById('confirmPassword-error')?.classList.remove('hidden');
      return;
    }

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    });

    this.loading = true;
    console.log('Enviando solicitud para restablecer la contraseña.');
    console.log('Este es el body:', this.formUser.value); // Obtener los valores del formulario

    // Enviar solo los valores del formulario en la solicitud HTTP
    this.urlService.editpassWord(this.formUser.value).subscribe(
      (response) => {
        console.log('Contraseña restablecida correctamente.', response);
        this.loading = false;
      },
      (error) => {
        console.log('Error al restablecer la contraseña.', error);
        this.loading = false;
      }
    );
  }
}
