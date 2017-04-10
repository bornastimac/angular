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

  constructor(private pretragaOglasaService: PredajaOglasaService, private snackbar: MdSnackBar) { }
  private radio = "Supply";
  public oglas: IpredajaOglasa;
  public data: predajaJsonResponse;
  private tekstOglasa ="";
  predajOglas(form)
  {
 this.oglas =
        {
         // Username: User.loggedUser.username,
         Username: "borna",
          Title: form.naslov,
          Profession: form.struka,
          Text: this.tekstOglasa,
          AdType: this.radio
        }

console.log(JSON.stringify(this.oglas));
      this.pretragaOglasaService.getPredajaOglasaResponse(this.oglas)
        .subscribe(res => {
          this.data = res;
          if (this.data.AdPostStatus = "posted") {
            this.snackbar.open("Oglas uspješno predan :)", 'X', { duration: 5000 });
          }
          else
            this.snackbar.open("Oglas nije predan", 'X', { duration: 5000 });

        });
    
  }
  ngOnInit() {
  }

}
