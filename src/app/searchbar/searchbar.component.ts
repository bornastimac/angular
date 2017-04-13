import { Component, OnInit } from '@angular/core';
import { PretragaOglasaService } from '../pretraga.service';
import { Ioglasi } from '../data';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

showNapredno = false;
selectedStruka: string;
tipOglasaZaPretragu: string;
fizickaOsoba: boolean;
pravnaOsoba: boolean;
data:Ioglasi;
  constructor(private pretragaOglasaService: PretragaOglasaService) { }
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

 pretraziOglase(pojamZaPretragu:string) {
    let usertype;
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

      console.log(JSON.stringify(formToSend));
      this.pretragaOglasaService.getPretragaOglasaResponse(formToSend)
        .subscribe(res => {
          this.data = res;
          console.log(JSON.stringify(this.data));
        });
  }
}
