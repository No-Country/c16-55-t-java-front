import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/interfaces/sign-up';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-dc-register-form',
  templateUrl: './dc-register-form.component.html',
  styleUrls: ['./dc-register-form.component.scss'],
})
export class DcRegisterFormComponent {
  formUser: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignUpService
  ){
    this.formUser = this.fb.group({
      name:['', Validators.required],
      lastname:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      country:['Argentina'],
      province:['Buenos Aires'],
      city:['Belgrano'],
      address:['', Validators.required],
      
    });
  }
  ngOnInit() {

    }

    onSubmit(): void {
      if (this.formUser.valid) {
        const signUpData: SignUp = {
          name: this.formUser.value.name,
          lastname: this.formUser.value.lastname,
          email: this.formUser.value.email,
          password: this.formUser.value.password,
          country: this.formUser.value.country,
          province: this.formUser.value.province,
          city: this.formUser.value.city,
          address: this.formUser.value.address
        };
  
        this.signUpService.saveRegister(signUpData).subscribe({ 
          next:(response) => {
            // Manejar la respuesta del backend
            console.log(response);
            // Redirigir a otra página si es necesario
            this.router.navigate(["register"]);
          },
          error: (e: any) => {
            // Manejar cualquier error
            console.error(e);
          }
       });
    }
  }
 
    
}
