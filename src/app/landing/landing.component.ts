import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

constructor() { }
  isLoginHidden = true;
  isRegistracijaHidden = true;
  isLogRegHidden = true;
  //poziva se na event kroz <app-toolbar>
  toggleForm(evt: string) {
    this.isLogRegHidden = false;
    if (evt === "login") {
      this.isLoginHidden = false;
      this.isRegistracijaHidden = true;
      
    }
    else if (evt === "registracija") {
      this.isRegistracijaHidden = false;
      this.isLoginHidden = true;
    }
    else if (evt === "registered")
    {
      this.isLoginHidden = false;
      this.isRegistracijaHidden = true;
    }
  }

ngOnInit(){}
}
