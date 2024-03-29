import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/interfaces/sign-up';
import { SignUpService } from 'src/app/services/sign-up.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-dc-register-form',
  templateUrl: './dc-register-form.component.html',
  styleUrls: ['./dc-register-form.component.scss'],
})
export class DcRegisterFormComponent {
  formUser: FormGroup;
  ocultarPassword: boolean = true;
  provinces!: any[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignUpService,
    private utilitiesService: UtilitiesService
  ) {
    this.formUser = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
          Validators.maxLength(30),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
          Validators.maxLength(30),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/),
        ],
      ],
      repeatPassword: ['', Validators.required],
      country: ['Argentina'],
      province: ['', Validators.required],
      city: ['.'],
      address: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]+$/)],
      ],
    });
  }

  ngOnInit() {
    this.getState();
  }

  onSubmit(): void {
    if (this.formUser.valid) {
      const password = this.formUser.value.password;
      const repeatPasswordControl = this.formUser.get('repeatPassword');

      if (!repeatPasswordControl) {
        return;
      }

      const repeatPassword = repeatPasswordControl.value;

      if (repeatPassword === null || repeatPassword === undefined) {
        return;
      }

      if (password !== repeatPassword) {
        this.formUser.get('repeatPassword')?.setErrors({ mismatch: true });
        return;
      }
      const signUpData: SignUp = {
        name: this.formUser.value.name,
        lastname: this.formUser.value.lastname,
        email: this.formUser.value.email,
        password: this.formUser.value.password,
        country: this.formUser.value.country,
        province: this.formUser.value.province,
        city: this.formUser.value.city,
        address: this.formUser.value.address,
      };
      this.signUpService.saveRegister(signUpData).subscribe({
        next: (response) => {
          if (response.message) {
            this.utilitiesService.mostrarAlertaSuccess(
              'Registro exitoso',
              'sucess'
            );
            this.router.navigate(['/login']);
          }
        },
        error: (e: any) => {
          this.utilitiesService.mostrarAlertaError(
            'El email ya existe',
            'error'
          );
        },
      });
    }
  }

  getState() {
    this.signUpService.getState().subscribe((res) => {
      this.provinces = res;
    });
  }

  cancelRegister(): void {
    this.router.navigate(['/login']);
  }
}
