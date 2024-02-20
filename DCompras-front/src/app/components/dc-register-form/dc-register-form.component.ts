import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-register-form',
  templateUrl: './dc-register-form.component.html',
  styleUrls: ['./dc-register-form.component.scss']
})
export class DcRegisterFormComponent {

  formularioUsuario: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){
    this.formularioUsuario = this.fb.group({
      nombreCompleto:['', Validators.required],
      correo:['', Validators.required],
      clave:['', Validators.required],
      id:['', Validators.required],
      // idEstado:['', Validators.required],
      // idCiudad:['', Validators.required],
      direccion:['', Validators.required],
      
    });
  }
  ngOnInit() {
    this.SaveData();

    }

  
    SaveData(){
      console.log(this.formularioUsuario.value);
      this.router.navigate(["register"])
    }
    
}
