import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaremSimulationComponent } from './simulation/barem-simulation/barem-simulation.component';
import { CaracteristiqueComponent } from './parametrage/caracteristique/caracteristique.component';

import {ServeurService} from './services/serveur.service';
import {CaracService} from './services/carac.service';
import {BaremeService} from './services/bareme.service';
import {ParamBorneService} from './services/param-borne.service';
import { AdminParametrageComponent } from './parametrage/admin-parametrage/admin-parametrage.component';
import {AdminParamService} from './services/admin-param.service';
import {CentreFiscalService} from "./services/centre-fiscal.service";
import { BaremesComponent } from './parametrage/baremes/baremes.component';


@NgModule({
  declarations: [
    AppComponent,
    BaremSimulationComponent,
    CaracteristiqueComponent,
    AdminParametrageComponent,
    BaremesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
              ServeurService,
              CaracService,
              BaremeService,
              ParamBorneService,
              AdminParamService,
              CentreFiscalService
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
