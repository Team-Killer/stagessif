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
import { NifEvaluationComponent } from './evaluation/nif-evaluation/nif-evaluation.component';
import {EvaluationService} from "./services/evaluation.service";
import { ParametrageBorneComponent } from './parametrage/parametrage-borne/parametrage-borne.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/**material**/
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from "@angular/material/input";
//import {MatFormFieldModule} from "@angular/material/typings/esm5/form-field";
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {BaremCaracService} from "./services/barem-carac.service";
import { ListVehiculeComponent } from './evaluation/list-vehicule/list-vehicule.component';
import { NifAnneeImpositionComponent } from './evaluation/nif-annee-imposition/nif-annee-imposition.component';
import { TablesEvaluerComponent } from './evaluation/tables-evaluer/tables-evaluer.component';
import { ModalEvaluationComponent } from './evaluation/modal-evaluation/modal-evaluation.component';
import { AcceuilComponent } from './home/acceuil/acceuil.component';
import { AcceuilParametrageComponent } from './home/acceuil-parametrage/acceuil-parametrage.component';
import { LoginComponent } from './home/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import {ValeurOptionService} from "./services/valeur-option.service";

@NgModule({
  declarations: [
    AppComponent,
    BaremSimulationComponent,
    CaracteristiqueComponent,
    AdminParametrageComponent,
    BaremesComponent,
    NifEvaluationComponent,
    ParametrageBorneComponent,
    ListVehiculeComponent,
    NifAnneeImpositionComponent,
    TablesEvaluerComponent,
    ModalEvaluationComponent,
    AcceuilComponent,
    AcceuilParametrageComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule
  ],
  providers: [
              ServeurService,
              CaracService,
              BaremeService,
              ParamBorneService,
              AdminParamService,
              CentreFiscalService,
              EvaluationService,
              BaremCaracService,
    NgbModalConfig,NgbModal,
    ValeurOptionService

     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
