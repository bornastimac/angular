import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { RegistracijaService } from '../registracija.service';
@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  private tipReg: string = "fizickaOsoba";
  constructor(public snackBar: MdSnackBar, public registracijaService: RegistracijaService) { }
  odabranaStruka: string;
  kljucneRijeci ="";
  odgovor;
  osobaOption ="Fizicka osoba";
    @Output() onRegistered = new EventEmitter<string>();


  tipOsobe = [{value: 'Fizicka osoba', name: 'Fizicka osoba'},{value: 'Pravna osoba', name: 'Pravna osoba'}];
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

  onSubmit(form: any) {

    if (form.password != form.passCheck)
      this.snackBar.open("Lozinka i ponovljena lozinka se ne podudaraju", "X", { duration: 2000 });
    else if (this.tipReg === "pravnaOsoba") {
      let jsonToSend =
        {
          CompanyName: form.companyName,
          Username: form.username,
          Password: form.password,
          Email: form.email,
          Profession: form.odabranaStruka,
          Keywords: this.kljucneRijeci,
          Fax: form.faks,
          ContactName: form.kontaktIme,
          ContactPhone: form.brTelefona
        }
      this.registracijaService.getRegistracijaPravnaResponse(jsonToSend).subscribe(res => {
        this.odgovor = res;
      })
    }
    else if (this.tipReg === "fizickaOsoba") {
      let jsonToSend =
        {
          Username: form.username,
          Password: form.password,
          Email: form.email,
          Profession: form.odabranaStruka,
          Phone: form.brTelefona,
          Keywords: this.kljucneRijeci
        }
      this.registracijaService.getRegistracijaFizickaResponse(jsonToSend).subscribe(res => {
        this.odgovor = res;
        this.afterRegistration();
      })
    }
  }
  afterRegistration()
  {
    if(this.odgovor.RegistrationStatus === "registered")
    {
        this.onRegistered.emit("registered");
        console.log(JSON.stringify(this.odgovor));
    }
  }
}

