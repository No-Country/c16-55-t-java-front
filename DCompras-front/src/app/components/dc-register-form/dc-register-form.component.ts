import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, finalize, map, of, switchMap } from 'rxjs';
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
  emailTaken: boolean = false;
  
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignUpService,
    private utilitiesService: UtilitiesService
  ){
    this.formUser = this.fb.group({
      name:['', Validators.required],
      lastname:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
        password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/),
        ],
      ],
      //repeatPassword: ['', [Validators.required, this.mustMatch('password')]],
      //password:['', Validators.required],
       country:['Argentina'],
      province:['Buenos Aires'],
      city:['Belgrano'], 
      address:['', Validators.required],
      
    });
    
  }
  ngOnInit() {
  }
  

  /* onSubmit(): void {
    console.log("probando");
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
          console.log(this.formUser);
         this.signUpService.saveRegister(signUpData).subscribe({ 
          next:(response) => {
            debugger
            if(response.message){
              this.utilitiesService.mostrarAlerta("Registro exitoso", "Ok!")
              this.router.navigate(["login"]);
            }
    
          },
          error: (e: any) => {
         
            this.utilitiesService.mostrarAlerta("El email ya existe", "Opps!")
          } 
       });
       

    }
  } */

  onSubmit(): void {
    console.log('Formulario válido:', this.formUser.valid);
    if (this.formUser.valid) {
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
          debugger;
          if (response.message) {
            this.utilitiesService.mostrarAlerta('Registro exitoso', 'Ok!');
            this.router.navigate(['login']);
          }
        },
        error: (e: any) => {
          this.utilitiesService.mostrarAlerta('El email ya existe', 'Opps!');
        },
      });

      console.log(signUpData);
    }
  }

  cancelRegister(): void {
    this.router.navigate(['login']);
  }
}

    

