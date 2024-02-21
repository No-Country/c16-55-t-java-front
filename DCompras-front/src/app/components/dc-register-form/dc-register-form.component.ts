import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-register-form',
  templateUrl: './dc-register-form.component.html',
  styleUrls: ['./dc-register-form.component.scss'],
})
export class DcRegisterFormComponent {
  formUser: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){
    this.formUser = this.fb.group({
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
    this.saveData();

    }

  
    saveData(){
      console.log(this.formUser.value);
      this.router.navigate(["register"])
    }
    
}
