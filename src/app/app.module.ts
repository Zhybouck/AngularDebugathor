import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableauComponent } from './tableau/tableau.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'form', component: FormulaireComponent },
  { path: 'tab', component: TableauComponent },
  { path: 'insc', component: InscriptionComponent },
  { path: 'consult', component: ConsultationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormulaireComponent,
    TableauComponent,
    InscriptionComponent,
    ConsultationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
