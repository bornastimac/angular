import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { KontaktService } from '../kontakt.service';
import { Strings } from '../strings';
import { IOdgovor, IKontakt } from '../data';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  kontaktDialog() {
    let dialogRef = this.dialog.open(KontaktDialog);
  }

  oNamaDialog() {
    let dialogRef = this.dialog.open(InfoDialog);
    dialogRef.componentInstance.setText(Strings.oNamaDialogText);
  }

  uvjetiDialog() {
    let dialogRef = this.dialog.open(InfoDialog);
    dialogRef.componentInstance.setText(Strings.uvjetiDialogText);
   
  }
  ngOnInit() {
  }

}

@Component({
  template: ` <i (click)="dialogRef.close()" class="material-icons" style="float: right; cursor: pointer">close</i>
             <h1 md-dialog-title> Kontakt </h1>
              <md-input-container>
                <input #ime mdInput placeholder="Ime i prezime ili naziv tvrtke">
              </md-input-container>
              <br>
               <md-input-container>
                <input #email mdInput placeholder="Vaš e-mail">
              </md-input-container>
              <br>              
               <md-input-container>
                <textarea #poruka mdInput md-autosize minRows="5" placeholder="Vaša poruka nama"></textarea>
              </md-input-container>
              <br>
              <md-dialog-actions>
                <button md-raised-button color="accent" (click) = "posaljiPoruku(ime.value, email.value, poruka.value)" > Pošalji</button>
              </md-dialog-actions>
     `

})
export class KontaktDialog {
  kontakt: IKontakt;
  odgovor: IOdgovor;
  constructor(public dialogRef: MdDialogRef<KontaktDialog>, private kontaktService: KontaktService, public snackbar: MdSnackBar) {

  }
  posaljiPoruku(ime, email, poruka) {
    this.kontakt = { Name: ime, Email: email, Text: poruka }
    this.kontaktService.getKontaktResponse(this.kontakt).
      subscribe(res => {
        this.odgovor = res;
        if (this.odgovor.ContactUsStatus = "success")
          this.openSnackbar("Hvala na poruci!");
        else
          this.openSnackbar("Pokusajte ponovno kasnije");

      });
  }
  openSnackbar(tekst) {
    this.snackbar.open( tekst, "X", {
      duration: 2000,
    });

  }
}


@Component({
  template: ` <i (click)="dialogRef.close()" class="material-icons" style="float: right; cursor: pointer;">close</i>
              <md-dialog-content>
                <label> {{text}} </label>
              </md-dialog-content>
     `
})
export class InfoDialog {
  public text;
  constructor(public dialogRef: MdDialogRef<InfoDialog>) {
  }

  setText(tekst: string) {
    this.text = tekst;
  }
}
