import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AccueilComponent } from './accueil/accueil.component';
import { TableauComponent } from './tableau/tableau.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'form', component: FormulaireComponent },
  { path: 'tab', component: TableauComponent },
  { path: 'insc', component: InscriptionComponent }
  { path: 'consult', component: ConsultationComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


