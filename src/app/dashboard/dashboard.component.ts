import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  deltaTime = 200;
  startTime = 500;
  endTime = 750;
  
  lookAtMe1 : boolean = false;
  lookAtMe2 : boolean = false;
  lookAtMe3 : boolean = false;

  hideCards :boolean = false;
  hidePretragaForm :boolean = false;
  hidePredajaForm :boolean = false;
  hideEditForm :boolean = false;

  constructor( private router:Router) {
    
    if(User.loggedUser.username == "")
       this.router.navigate(['/home']);
   }

  ngOnInit() {
    setTimeout(() => {this.lookAtMe1 = true;}, this.startTime);
    setTimeout(() => {this.lookAtMe2 = true;}, this.startTime + this.deltaTime);
    setTimeout(() => {this.lookAtMe3 = true;}, this.startTime + this.deltaTime * 2);

    setTimeout(() => {this.lookAtMe1 = false;}, this.endTime);
    setTimeout(() => {this.lookAtMe2 = false;}, this.endTime + this.deltaTime);
    setTimeout(() => {this.lookAtMe3 = false;}, this.endTime + this.deltaTime * 2);
  }

  summon(komponentaZaPrikaz :string){
    //back button click
    if(komponentaZaPrikaz === 'cards'){
      this.hideCards = false;
    }

    //card click
    if(komponentaZaPrikaz === 'pretraga'){
      this.hideCards = true;
      this.hidePretragaForm = false;
      this.hidePredajaForm = true;
      this.hideEditForm = true;
    }
    if(komponentaZaPrikaz === 'predaja'){
      this.hideCards = true;
      this.hidePretragaForm = true;
      this.hidePredajaForm = false;
      this.hideEditForm = true;
    }
    if(komponentaZaPrikaz === 'edit-profile'){
      this.hideCards = true;
      this.hidePretragaForm = true;
      this.hidePredajaForm = true;
      this.hideEditForm = false;
    }
  }
}
