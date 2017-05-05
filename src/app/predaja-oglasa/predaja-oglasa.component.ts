import { Component, OnInit } from '@angular/core';
import { User, IpredajaOglasa, predajaJsonResponse } from '../data';
import { MdSnackBar } from '@angular/material';
import { PredajaOglasaService } from '../predaja-oglasa.service';


@Component({
  selector: 'app-predaja-oglasa',
  templateUrl: './predaja-oglasa.component.html',
  styleUrls: ['./predaja-oglasa.component.css']
})
export class PredajaOglasaComponent implements OnInit {
  public textOglasa ="";
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

  constructor(private pretragaOglasaService: PredajaOglasaService, private snackbar: MdSnackBar) { }
  public radio = "Supply";
  public oglas: IpredajaOglasa;
  public data: predajaJsonResponse;
  predajOglas(form)
  {
 this.oglas =
        {
          Username: User.loggedUser.username,
          Title: form.naslov,
          Profession: form.odabranaStruka,
          Text: this.textOglasa,
          AdType: this.radio
        }

this.spinnerShown = true;
      this.pretragaOglasaService.getPredajaOglasaResponse(this.oglas)
        .subscribe(res => {
          this.data = res;
          if (this.data.AdPostStatus = "posted") {
            this.snackbar.open("Oglas uspješno predan :)", 'X', { duration: 5000 });
          }
          else
            this.snackbar.open("Oglas nije predan", 'X', { duration: 5000 });
        });
    this.spinnerShown = false;
  }
  ngOnInit() {
  }

}
