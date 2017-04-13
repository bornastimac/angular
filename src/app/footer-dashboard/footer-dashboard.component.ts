import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { KontaktService } from '../kontakt.service';
import { Strings } from '../strings';
import { IOdgovor, IKontakt } from '../data';
import { KontaktDialog,InfoDialog } from '../footer/footer.component';


@Component({
  selector: 'app-footer-dashboard',
  templateUrl: './footer-dashboard.component.html',
  styleUrls: ['./footer-dashboard.component.css']
})
export class FooterDashboardComponent implements OnInit {

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
