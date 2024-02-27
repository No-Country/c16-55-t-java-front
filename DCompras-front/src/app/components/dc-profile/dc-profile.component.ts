import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdcUser } from 'src/app/interfaces/idc-user';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { DcRegisterFormComponent } from '../dc-register-form/dc-register-form.component';
import { DcUserService } from 'src/app/services/dc-user.service';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-profile',
  templateUrl: './dc-profile.component.html',
  styleUrls: ['./dc-profile.component.scss']
})
export class DcProfileComponent {

  formUser: FormGroup;


  constructor(
    @Inject(DcRegisterFormComponent) public datosUsuario: IdcUser,
    private fb: FormBuilder,
    private router: Router,
    private utilitiesService: UtilitiesService,
    private dcUserService: DcUserService
  ){ 
    this.formUser = this.fb.group({
      name: ['', ],
      lastname:[''] ,
      email:['', [Validators.required, Validators.email]],
      country:[''],
      province:[''],
      city:[''], 
      address:[''],
      
    });

  }

  ngOnInit(): void {
    const userInfoLogueado: any = window.localStorage.getItem('userInfo')
    const userInfo= JSON.parse(userInfoLogueado);
    /* console.log();
    const userData: IdcUser = this.formUser.value;
    this.dcUserService.editUser(userData)
    console.log(userData) */
    if(userInfo != null){
      this.formUser.patchValue({
        //name: this.datosUsuario.name,
        //lastname: this.datosUsuario.lastname,
        email: userInfo.email,
        country: userInfo.country,
        province: userInfo.province,
        city: userInfo.city,
        address: userInfo.address

      })
      //console.log(this.datosUsuario);
    }
  }


  onSubmit(): void {
    if (this.formUser.valid) {
      const userData: IdcUser = this.formUser.value; 
      console.log(userData);
       this.dcUserService.editUser(userData).subscribe({
        next: (response: ApiResponse) => {
          if (response.status === 0 && response.message === 'success') {
            const userInfo: any = JSON.stringify(response.payload);
            localStorage.setItem('userInfo', userInfo);

            this.utilitiesService.mostrarAlerta('Perfil actualizado correctamente', 'Ok!');
            this.router.navigate(['home']);
            
          } else {
            this.utilitiesService.mostrarAlerta('Error al actualizar el perfil', 'Error');
          }
        },
        error: (error: any) => {
          this.utilitiesService.mostrarAlerta('Error al conectar con el servidor', 'Error');
        }
      }); 
    } 
  }


  cancelRegister(): void {
    this.router.navigate(['home']);
  }










}