import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableauComponent } from './tableau/tableau.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConsultationComponent } from './consultation/consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    AccueilComponent,
    TableauComponent,
    InscriptionComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
