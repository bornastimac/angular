import { Component, OnInit } from '@angular/core';
import { User } from '../data';
import { EditProfilaService } from '../edit-profila.service';

@Component({
  selector: 'app-edit-profila',
  templateUrl: './edit-profila.component.html',
  styleUrls: ['./edit-profila.component.css']
})
export class EditProfilaComponent implements OnInit {
  userInfo;
  editInfo;
  data;
  private isTvrtka;
  //odabranaStruka = User.userInfo.Profession;
  odabranaStruka = "Racunarstvo, informatika i telekomunikacije";
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
  constructor(public editProfilaService: EditProfilaService) {
    // this.userInfo = User.userInfo;
    this.userInfo = {
      Login: "true",
      IsCompany: "false",
      FirstName: "",
      LastName: "",
      Email: "stimacborna@gmail.com",
      Profession: "Racunarstvo, informatika i telekomunikacije",
      Keywords: "sadsad",
      City: "",
      AboutMe: "",
      Phone: "",
      CompanyName: "",
      Fax: "",
      ContactName: "",
      ContactPhone: ""
    }
    if(this.userInfo.IsCompany === "true")
      this.isTvrtka = true;
    else if(this.userInfo.IsCompany === "false")
      this.isTvrtka = false;


  }
  onSubmit(ime, prezime, email, kljucneRijeci, grad, oMeni, kontakt, imeTvrtke, faks, kontaktBroj) {
   
      this.editInfo = {
        Username: "borna",
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
    
 console.log(JSON.stringify(this.editInfo));
    
      this.editProfilaService.getEditProfilaResponse(this.editInfo).subscribe(res => {
        this.data = res;
        console.log(JSON.stringify(this.data));
      })

    }
    ngOnInit() {
    }

  }


