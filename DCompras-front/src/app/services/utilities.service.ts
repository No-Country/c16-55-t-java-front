import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private _snackBar:MatSnackBar) { }

  
  mostrarAlerta(message:string, tipo:string){
    let color: string;

    if (message === 'sucess') {
      color = 'green';
    } else if (message === 'error') {
      color = 'red';
    } else {
      color = 'black'; 
    }

    this._snackBar.open(message, tipo, {
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:5000,
      panelClass: [color]
    })
  }

  

}
