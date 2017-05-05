import { Component, OnInit } from '@angular/core';
import { PretragaOglasaService } from '../pretraga.service';
import { Ioglasi, Ioglas } from '../data';
import {MdDialog, MdDialogRef , MdDialogConfig} from '@angular/material';
import {PrikazProfilaService} from '../prikaz-profila.service';
import { User } from '../data';
import { MdSnackBar } from '@angular/material';


@Component({
  selector: 'app-pretraga-oglasa',
  templateUrl: './pretraga-oglasa.component.html',
  styleUrls: ['./pretraga-oglasa.component.css']
})
export class PretragaOglasaComponent implements OnInit {
  showNapredno = false;
  selectedStruka: string;
  tipOglasaZaPretragu: string;
  fizickaOsoba: boolean;
  pravnaOsoba: boolean;
  data: Ioglasi;
  waiting = false;
  public oglasi = new Array<Ioglas>();

  constructor(private pretragaOglasaService: PretragaOglasaService, public dialog: MdDialog,private snackbar:MdSnackBar) { }
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
  ngOnInit() {
  }

  pretraziOglase(pojamZaPretragu: string) {
    this.waiting = true;
    let usertype = "Both";
    if (this.fizickaOsoba && this.pravnaOsoba)
      usertype = "Both";
    else if (this.fizickaOsoba)
      usertype = "NotCompany"
    else if (this.pravnaOsoba)
      usertype = "Company";
    else
      usertype = "Both";

    let foo;
    if (this.tipOglasaZaPretragu === "Potražnja")
      foo = "Demand";
    else
      foo = "Supply";

    if (this.selectedStruka == null)
      this.selectedStruka = "";

    let formToSend =
      {
        UserType: usertype,
        Profession: this.selectedStruka,
        AdType: foo,
        SearchTerm: pojamZaPretragu
      }

    this.pretragaOglasaService.getPretragaOglasaResponse(formToSend)
      .subscribe(res => {
        this.data = res;
        this.waiting = false;
        this.oglasi = [];
        if (this.data.Ads === null) {
          this.oglasi.push({ Title: "Rezultati pretrage", AdText: "Nema oglasa", DateCreated: "", Viewed: "", User: "" });
        }
        else {
          this.data.Ads.forEach(element => { this.oglasi.push(element);  });
        }
      });
  }

  pogledajProfil(id, user) {
    if(User.loggedUser.username != ""){
    let jsonToSend = { Id: id };
    this.pretragaOglasaService.getPogledajProfilResponse(jsonToSend).subscribe(res => {
    })

    //prikaz profila
let dataForDialog = new MdDialogConfig();
dataForDialog.data = user;
let dialogRef = this.dialog.open(PrikazProfilaDialog, dataForDialog);
    dialogRef.afterClosed().subscribe(result => {
    });}
    else{
        this.snackbar.open("Prijavite se kako biste vidjeli detalje profila", 'X', {duration:3000});
    }
  }
//prikaz oglasa
pogledajOglas(oglas)
{
  if(User.loggedUser.username != "")
  {
    let dataForDialog = new MdDialogConfig();
  dataForDialog.data = oglas;
let dialogRef = this.dialog.open(OglasDialog, dataForDialog);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  else{
        this.snackbar.open("Prijavite se kako biste vidjeli oglas i kontakt", 'X', {duration:3000});
  }
}
  }

@Component({
  template: `
   <i (click)="dialogRef.close()" class="material-icons" style="float: right; cursor: pointer;">close</i>
  
  <h1>
    Pregled profila
  </h1>
  <md-dialog-content style="display:flex; flex-direction:column">
      <md-input-container>
        <input mdInput placeholder="Ime" value= {{userInfo.FirstName}} disabled style="color: black">
      </md-input-container>
  
      <md-input-container>
        <input mdInput placeholder="Prezime" value= {{userInfo.LastName}} disabled style="color: black">
      </md-input-container>
      <md-input-container>
        <input mdInput  placeholder="Email" value= {{userInfo.Email}} disabled style="color: black">
      </md-input-container>
      <md-input-container>
        <input mdInput  placeholder="Struka" value= {{userInfo.Profession}} disabled style="color: black">
      </md-input-container>
      <md-input-container>
        <textarea  mdInput placeholder="Ključne riječi(odvojene zarezom)" disabled style="color: black" > {{userInfo.Keywords}}</textarea>
      </md-input-container>

      <md-input-container>
        <input mdInput  placeholder="Grad" value= {{userInfo.City}} disabled style="color: black">
      </md-input-container>
      <md-input-container>
        <textarea mdInput  placeholder="O meni" disabled style="color: black" > {{userInfo.AboutMe}} </textarea>
      </md-input-container>
      <md-input-container>
        <input mdInput  placeholder="Kontakt(broj telefona)" value= {{userInfo.Phone}}  disabled style="color: black">
      </md-input-container>
      <div [hidden]="!userInfo.IsCompany">
        <md-input-container>
          <input mdInput placeholder="Ime tvrtke" value= {{userInfo.CompanyName}} disabled style="color: black">
        </md-input-container>
        <md-input-container >
          <input mdInput  placeholder="Faks" value= {{userInfo.Fax}} disabled style="color: black">
        </md-input-container>
        <md-input-container >
          <input mdInput  placeholder="Kontakt(broj telefona)" value= {{userInfo.ContactPhone}} disabled style="color: black">
        </md-input-container>
      </div>
  </md-dialog-content>
`,
})
export class PrikazProfilaDialog {
  public userInfo={ Login: "",
      IsCompany: "",
      FirstName: "",
      LastName: "",
      Email:  "",
      Profession:  "",
      Keywords:  "",
      City:  "",
      AboutMe:  "",
      Phone:  "",
      CompanyName:  "",
      Fax:  "",
      ContactPhone:  ""
  }
  constructor(public dialogRef: MdDialogRef<PrikazProfilaDialog>, private prikazProfilaService: PrikazProfilaService) {
   this.prikazProfilaService.getProfilResponse(this.dialogRef.config.data).subscribe(res => 
      {
        this.userInfo = res;
      });
  }
}

@Component({

  template: `
   <i (click)="dialogRef.close()" class="material-icons" style="float: right; cursor: pointer;">close</i>

      <h1>{{oglas.Title}}</h1>
      <md-dialog-content>
      {{oglas.AdText}}
      </md-dialog-content>
      <div style="display: flex; flex-direction:column;">
        <div style="display: flex;">
          <i  class="material-icons">person</i> {{oglas.User}}
        </div>
        <div style="display: flex; ">        
          <i class="material-icons">remove_red_eye</i> <label>{{oglas.Viewed}} </label>
        </div>
        <div style="display: flex;">        
          <i class="material-icons">date_range</i>     {{oglas.DateCreated}}
        </div> 
       <label>
            Javite se na oglas na:
       </label>
       <md-input-container>
        <input  mdInput type="text" value="{{user?.Email}}" readonly="readonly" >
      </md-input-container>
      </div>


  `
})
export class OglasDialog {
  oglas;
  user ;
  constructor(public dialogRef: MdDialogRef<OglasDialog>, private prikazProfilaService: PrikazProfilaService) {
    this.oglas = this.dialogRef.config.data;
   this.prikazProfilaService.getProfilResponse(this.dialogRef.config.data.User).subscribe(res => 
      {
        this.user = res;
      });
  }
}