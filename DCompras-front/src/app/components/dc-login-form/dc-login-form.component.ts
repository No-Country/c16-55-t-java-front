import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-login-form',
  templateUrl: './dc-login-form.component.html',
  styleUrls: ['./dc-login-form.component.scss'],
})
export class DcLoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    /* if (window.localStorage.getItem('token')) {
      this.router.navigate(['/home/offers']);
    } */
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.http
        .post(
          'https://sudden-base-production.up.railway.app/auth/login',
          this.loginForm.value
        )
        .subscribe(
          (response: any) => {
            localStorage.setItem('token', response.payload.token);
            const userInfo: any = JSON.stringify(response.payload.userInfo);
            localStorage.setItem('userInfo', userInfo);
            this.router.navigate(['/home/offers']);
            localStorage.setItem(
              'userInfo',
              JSON.stringify(response.payload.userInfo)
            );
          },
          (error) => {
            console.log('Error al enviar el formulario', error);
          }
        );
    } else {
      this.router.navigate(['/register']);
    }
  }

  toggleAutocomplete(event: any) {
    const fields: HTMLInputElement[] = Array.from(
      document.querySelectorAll('.input_field')
    );
    fields.forEach((field: HTMLInputElement) => {
      field.autocomplete = event.target.checked ? 'on' : 'off';
    });
  }

  openViewRegister() {
    this.router.navigate(['/register']);
  }
}
