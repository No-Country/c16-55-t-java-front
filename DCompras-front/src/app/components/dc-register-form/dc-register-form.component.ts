import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dc-register-form',
  templateUrl: './dc-register-form.component.html',
  styleUrls: ['./dc-register-form.component.scss'],
})
export class DcRegisterFormComponent {
  formularioUsuario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioUsuario = this.fb.group({
      nombreCompleto: ['', Validators.required],
      correo: ['', Validators.required],
      clave: ['', Validators.required],
      idPais: ['', Validators.required],
      idEstado: ['', Validators.required],
      idCiudad: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }
  ngOnInit() {}
}
