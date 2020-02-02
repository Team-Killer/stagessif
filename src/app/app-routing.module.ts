import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CaracteristiqueComponent} from './parametrage/caracteristique/caracteristique.component';
import {AdminParametrageComponent} from './parametrage/admin-parametrage/admin-parametrage.component';
import {BaremesComponent} from './parametrage/baremes/baremes.component';
import {BaremSimulationComponent} from "./simulation/barem-simulation/barem-simulation.component";


const routes: Routes = [
  {path : 'caracteristiques' , component : CaracteristiqueComponent },
  {path :'parametrage' ,component: AdminParametrageComponent},
  {path :'baremes', component: BaremesComponent},
  {path :'simulation/baremes', component: BaremSimulationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
