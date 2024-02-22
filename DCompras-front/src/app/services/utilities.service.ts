import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private _snackBar:MatSnackBar) { }

  
  mostrarAlerta(mensaje:string, tipo:string){
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition:"end",
      verticalPosition:"top",
      duration:5000
    })
  }

  

}
