import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

//services
import { LoginService } from './login.service';
import { KontaktService } from './kontakt.service';
import { RegistracijaService } from './registracija.service';
import { EditProfilaService } from './edit-profila.service';
import { PredajaOglasaService } from './predaja-oglasa.service';

//dialogs
import { KontaktDialog,InfoDialog } from './footer/footer.component';
//components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { FooterComponent } from './footer/footer.component';
import { PrikazOglasaComponent } from './prikaz-oglasa/prikaz-oglasa.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EditProfilaComponent } from './edit-profila/edit-profila.component';
import { PredajaOglasaComponent } from './predaja-oglasa/predaja-oglasa.component';
import { PretragaOglasaComponent } from './pretraga-oglasa/pretraga-oglasa.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    RegistracijaComponent,
    FooterComponent,
    InfoDialog,
    KontaktDialog,
    PrikazOglasaComponent,
    SearchbarComponent,
    EditProfilaComponent,
    PredajaOglasaComponent,
    PretragaOglasaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [LoginService, KontaktService,RegistracijaService, EditProfilaService, PredajaOglasaService],
  bootstrap: [AppComponent],
  entryComponents: [InfoDialog, KontaktDialog],

})
export class AppModule { }
