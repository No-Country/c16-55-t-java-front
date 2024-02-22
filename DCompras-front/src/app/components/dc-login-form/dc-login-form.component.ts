import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-login-form',
  templateUrl: './dc-login-form.component.html',
  styleUrls: ['./dc-login-form.component.scss']
})
export class DcLoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['home/offers']);
      //console.log(this.loginForm.value);
    } else {
      this.router.navigate(['register']);
      //console.log('Formulario inválido');
    }
  }

  toggleAutocomplete(event: any) {
    const fields: HTMLInputElement[] = Array.from(document.querySelectorAll('.input_field'));
    fields.forEach((field: HTMLInputElement) => {
      field.autocomplete = event.target.checked ? 'on' : 'off';
    });
  }
}
