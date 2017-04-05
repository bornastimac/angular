import { Component, OnInit, Input } from '@angular/core';
import { IOglas } from '../data';
@Component({
  selector: 'app-prikaz-oglasa',
  templateUrl: './prikaz-oglasa.component.html',
  styleUrls: ['./prikaz-oglasa.component.css']
})
export class PrikazOglasaComponent implements OnInit {
@Input()
  oglasiArr: { Ads: Array<IOglas> };
  public oglasi = new Array<IOglas>();
  constructor() {
     this.oglasi.push({ Title: "Rezultati pretrage", AdText: "Nema oglasa" });// ovo obrisati
   
   }

ngOnChanges() {
    this.oglasi = [];
    if (this.oglasiArr.Ads == null) {
      this.oglasi.push({ Title: "Rezultati pretrage", AdText: "Nema oglasa" });
    }
    else {
      this.oglasiArr.Ads.forEach(element => { this.oglasi.push(element); });
    }
  }
  ngOnInit() {
  }

}
