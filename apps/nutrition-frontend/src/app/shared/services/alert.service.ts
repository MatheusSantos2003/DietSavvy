import { Observable } from 'rxjs';
import { AlertComponent } from './../components/alert/alert.component';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { FirstStepsComponent } from '../components/first-steps.component';
import { MatDialog } from '@angular/material/dialog';
// import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
  ) {
    //
  }

  openAlert(message: string): Observable<MatSnackBarDismiss> {

    return this._snackBar.openFromComponent(AlertComponent, { duration: 1500, data: { msg: message } }).afterDismissed();

  }

  openFirstUserAccessAlert() {

    return this._dialog.open(FirstStepsComponent,
      {
        data: {
          msg: 'First User Acess'
        },
        height: '90%',
        width: '100%',
        panelClass:'custom-container',
        disableClose: true
      }).afterClosed();
    // return this._dialog.open(FirstStepsComponent, { duration: 1500, data: { msg: 'First User Acess' } }).afterDismissed();

  }

  // openSwalError(message: string) {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top",
  //     background: "red",
  //     color: "white",
  //     iconColor: "white",
  //     showConfirmButton: false,
  //     timer: 4000,
  //     width: '100%',
  //     heightAuto: false,
  //     grow: 'row'
  //   });

  //   const returnMessage = this.handleErrorMessages(message);

  //   return Toast.fire("Erro!", "<p>Um Erro ocorreu, caso o problema persista, entre em contato com o suporte.</p><br>Erro: " + returnMessage, "error");
  // }

  // openSwalWarning(message: string) {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top",
  //     background: "#ffeb3b",
  //     color: "black",
  //     iconColor: "black",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     width: '100%',
  //     heightAuto: false,
  //     grow: 'row'
  //   });

  //   return Toast.fire("Aviso!", message, "warning");
  // }

  // openSwalSuccess(message: string) {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top",
  //     background: "green",
  //     color: "white",
  //     iconColor: "white",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     width: '100%',
  //     heightAuto: false,
  //     grow: 'row'
  //   });
  //   return Toast.fire("Sucesso!!", message, "success");
  // }

}
