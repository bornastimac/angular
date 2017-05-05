import { Component, OnInit, Output } from '@angular/core';
import { User } from '../data';
import { EditProfilaService } from '../edit-profila.service';
import { MdSnackBar } from '@angular/material';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { IUserInfo } from '../data';


@Component({
  selector: 'app-edit-profila',
  templateUrl: './edit-profila.component.html',
  styleUrls: ['./edit-profila.component.css']
})
export class EditProfilaComponent implements OnInit {
  @Output()
  userInfo;
  editInfo;
  data;
  public isTvrtka;
  odabranaStruka;
  editPrezime= false;
  spinnerShown = false;
 
  listaStruka = [
    { value: 'Racunarstvo, informatika i telekomunikacije', viewValue: 'IT' },
    { value: 'Administrativne djelatnosti', viewValue: 'Administracija' },
    { value: 'Pravo', viewValue: 'Pravo' },
    { value: 'Management', viewValue: 'Management' },
    { value: 'Agronomija i šumarstvo', viewValue: 'Agronomija i šumarstvo' },
    { value: 'Arhitektura', viewValue: 'Arhitektura' },
    { value: 'Ekonomija i financije', viewValue: 'Ekonomija i financije' },
    { value: 'Elektrotehnika i strojarstvo', viewValue: 'Elektrotehnika i strojarstvo' },
    { value: 'Graficke djelatnosti', viewValue: 'Graficke djelatnosti' },
    { value: 'Dizajn i umjetnost', viewValue: 'Dizajn i umjetnost' },
    { value: 'Državna služba', viewValue: 'Državna služba' },
    { value: 'Graditeljstvo i geodezija', viewValue: 'Graditeljstvo i geodezija' },
    { value: 'Glazba', viewValue: 'Glazba' },
    { value: 'Kemija i biokemija', viewValue: 'Kemija i biokemija' },
    { value: 'Ljudski resursi', viewValue: 'Ljudski resursi' },
    { value: 'Marketing', viewValue: 'Marketing' },
    { value: 'Mediji', viewValue: 'Mediji' },
    { value: 'Neprofitne ogranizacije', viewValue: 'Neprofitne ogranizacije' },
    { value: 'Osobne usluge', viewValue: 'Osobne usluge' },
    { value: 'Promet, transport i logistika', viewValue: 'Promet, transport i logistika' },
    { value: 'Trgovina', viewValue: 'Trgovina' },
    { value: 'Turizam i ugostiteljstvo', viewValue: 'Turizam i ugostiteljstvo' },
    { value: 'Zdravstvo, njega i briga o ljepoti', viewValue: 'Zdravstvo, njega i briga o ljepoti' },
    { value: 'Državna služba', viewValue: 'Državna služba' },
    { value: 'Znanost i školstvo', viewValue: 'Znanost i školstvo' },
    { value: 'Ostalo', viewValue: 'Ostalo' }
  ];
  constructor(public editProfilaService: EditProfilaService,private snackbar:MdSnackBar, public dialog: MdDialog) {

 
    this.userInfo = User.userInfo;
    this.odabranaStruka = User.userInfo.Profession;
    if(this.userInfo.IsCompany === "true")
      this.isTvrtka = true;
    else if(this.userInfo.IsCompany === "false")
      this.isTvrtka = false;

    

  }
  onSubmit(ime, prezime, email, kljucneRijeci, grad, oMeni, kontakt, imeTvrtke, faks, kontaktBroj) {
   
      this.editInfo = {
        UserName: User.loggedUser.username,
        FirstName: ime.value,
        LastName: prezime.value,
        Email: email.value,
        Profession: this.odabranaStruka,
        Keywords: kljucneRijeci.value,
        City: grad.value,
        AboutMe: oMeni.value,
        Phone: kontakt.value,
        CompanyName: imeTvrtke.value,
        Fax: faks.value,
        ContactName: "", //??
        ContactPhone: kontaktBroj.value
      }
    
    this.spinnerShown = true;
      this.editProfilaService.getEditProfilaResponse(this.editInfo).subscribe(res => {
        this.data = res;
        if(this.data.UpdateStatus === "success")
        {
          this.snackbar.open("Uspješna izmjena profila", 'X', {duration:3000});
          this.spinnerShown = false;
        }
      })

    }
    editBox(userInfo, box)
    {
      let dataForDialog = new MdDialogConfig();
      if(box != 'Struka')
      {      
      dataForDialog.data = [userInfo, box] ;   
      let dialogRef = this.dialog.open(EditDialog, dataForDialog);
      dialogRef.afterClosed().subscribe(result => {
        this.userInfo.FirstName = result;
        }); 
  }
  else
  {
      dataForDialog.data = [userInfo, box] ;   
      let dialogRef = this.dialog.open(EditStrukaDialog, dataForDialog);
      dialogRef.afterClosed().subscribe(result => {
        this.userInfo.Profession = result;
        this.odabranaStruka = result;
    });
  }
}
  
    ngOnInit() {
     
    }

  }


@Component({
  template: ` <i (click)="dialogRef.close()" class="material-icons" style="float: right; cursor: pointer;">close</i>
              <md-dialog-content>
              <div style="display:flex;  align-items: center;">
                <md-input-container>
                  <input mdInput #changedValue placeholder="{{box}}"  style="color: black">
                </md-input-container>
                <i (click)="dialogRef.close(changedValue.value)" class="material-icons" style="cursor: pointer;">done</i>     
              </div>          
              </md-dialog-content>
     `
})
export class EditDialog {
  userInfo :IUserInfo;
  box;
  constructor(public dialogRef: MdDialogRef<EditDialog>, public editProfilaService: EditProfilaService, private snackbar:MdSnackBar) {
        this.userInfo = this.dialogRef.config.data[0];
        this.box = this.dialogRef.config.data[1];
  }
}

@Component({
  template: ` <i (click)="dialogRef.close(odabranastruka)" class="material-icons" style="float: right; cursor: pointer;">done</i>
             <md-dialog-content style="width:100%">
                <div class="edit-field">
                <div  style="display:flex; align-items:center">
                  <md-select style="width:100%"  placeholder="Struka" [(ngModel)]="odabranastruka">
                    <md-option *ngFor="let struka of listaStruka" [value]="struka.value">
                       {{ struka.viewValue }}
                    </md-option>
                   </md-select>
                   </div>
                </div>          
              <md-dialog-content>
     `
})
export class EditStrukaDialog {
  userInfo :IUserInfo;
  box;
  odabranastruka;
  constructor(public dialogRef: MdDialogRef<EditDialog>, public editProfilaService: EditProfilaService, private snackbar:MdSnackBar) {
        this.userInfo = this.dialogRef.config.data[0];
        this.box = this.dialogRef.config.data[1];
  }
  listaStruka = [
    { value: 'Racunarstvo, informatika i telekomunikacije', viewValue: 'IT' },
    { value: 'Administrativne djelatnosti', viewValue: 'Administracija' },
    { value: 'Pravo', viewValue: 'Pravo' },
    { value: 'Management', viewValue: 'Management' },
    { value: 'Agronomija i šumarstvo', viewValue: 'Agronomija i šumarstvo' },
    { value: 'Arhitektura', viewValue: 'Arhitektura' },
    { value: 'Ekonomija i financije', viewValue: 'Ekonomija i financije' },
    { value: 'Elektrotehnika i strojarstvo', viewValue: 'Elektrotehnika i strojarstvo' },
    { value: 'Graficke djelatnosti', viewValue: 'Graficke djelatnosti' },
    { value: 'Dizajn i umjetnost', viewValue: 'Dizajn i umjetnost' },
    { value: 'Državna služba', viewValue: 'Državna služba' },
    { value: 'Graditeljstvo i geodezija', viewValue: 'Graditeljstvo i geodezija' },
    { value: 'Glazba', viewValue: 'Glazba' },
    { value: 'Kemija i biokemija', viewValue: 'Kemija i biokemija' },
    { value: 'Ljudski resursi', viewValue: 'Ljudski resursi' },
    { value: 'Marketing', viewValue: 'Marketing' },
    { value: 'Mediji', viewValue: 'Mediji' },
    { value: 'Neprofitne ogranizacije', viewValue: 'Neprofitne ogranizacije' },
    { value: 'Osobne usluge', viewValue: 'Osobne usluge' },
    { value: 'Promet, transport i logistika', viewValue: 'Promet, transport i logistika' },
    { value: 'Trgovina', viewValue: 'Trgovina' },
    { value: 'Turizam i ugostiteljstvo', viewValue: 'Turizam i ugostiteljstvo' },
    { value: 'Zdravstvo, njega i briga o ljepoti', viewValue: 'Zdravstvo, njega i briga o ljepoti' },
    { value: 'Državna služba', viewValue: 'Državna služba' },
    { value: 'Znanost i školstvo', viewValue: 'Znanost i školstvo' },
    { value: 'Ostalo', viewValue: 'Ostalo' }
  ];
}