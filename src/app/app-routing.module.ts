import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CaracteristiqueComponent} from './parametrage/caracteristique/caracteristique.component';
import {AdminParametrageComponent} from './parametrage/admin-parametrage/admin-parametrage.component';
import {BaremesComponent} from './parametrage/baremes/baremes.component';
import {BaremSimulationComponent} from "./simulation/barem-simulation/barem-simulation.component";
import {NifEvaluationComponent} from "./evaluation/nif-evaluation/nif-evaluation.component";
import {NifAnneeImpositionComponent} from "./evaluation/nif-annee-imposition/nif-annee-imposition.component";
import {AcceuilComponent} from "./home/acceuil/acceuil.component";
import {AcceuilParametrageComponent} from "./home/acceuil-parametrage/acceuil-parametrage.component";
import {LoginComponent} from "./home/login/login.component";


const routes: Routes = [
  {path : 'admin/caracteristiques' , component : CaracteristiqueComponent },
  {path :'admin/adminitration' ,component: AdminParametrageComponent},
  {path :'admin/baremes', component: BaremesComponent},
  {path :'simulation/baremes', component: BaremSimulationComponent},
  {path :'evaluation/nif_annee' ,component: NifEvaluationComponent},
  {path : 'evaluation/yearImposition', component:NifAnneeImpositionComponent},
  {path : 'home',component:AcceuilComponent},
  {path : 'login',component:LoginComponent},
  {path :'homeParam',component:AcceuilParametrageComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
