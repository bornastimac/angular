import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

//services
import { LoginService } from './login.service';
import { KontaktService } from './kontakt.service';
import { RegistracijaService } from './registracija.service';
import { EditProfilaService } from './edit-profila.service';
import { PredajaOglasaService } from './predaja-oglasa.service';
import { PretragaOglasaService } from './pretraga.service'; 
//dialogs
import { KontaktDialog,InfoDialog } from './footer/footer.component';

//components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EditProfilaComponent } from './edit-profila/edit-profila.component';
import { PredajaOglasaComponent } from './predaja-oglasa/predaja-oglasa.component';
import { PretragaOglasaComponent } from './pretraga-oglasa/pretraga-oglasa.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LandingComponent } from './landing/landing.component';
import { ToolbarDashboardComponent } from './toolbar-dashboard/toolbar-dashboard.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';

const appRoutes: Routes = [
  { path: 'home', component: LandingComponent },
  {path: 'dashboard', component: DashboardComponent},
 
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    RegistracijaComponent,
    FooterComponent,
    InfoDialog,
    KontaktDialog,
    SearchbarComponent,
    EditProfilaComponent,
    PredajaOglasaComponent,
    PretragaOglasaComponent,
    DashboardComponent,
    CardsComponent,
    LandingComponent,
    ToolbarDashboardComponent,
    FooterDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, KontaktService,RegistracijaService, EditProfilaService, PredajaOglasaService, PretragaOglasaService],
  bootstrap: [AppComponent],
  entryComponents: [InfoDialog, KontaktDialog],

})
export class AppModule { }
