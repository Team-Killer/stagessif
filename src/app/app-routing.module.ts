import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CaracteristiqueComponent} from './parametrage/caracteristique/caracteristique.component';
import {AdminParametrageComponent} from './parametrage/admin-parametrage/admin-parametrage.component';


const routes: Routes = [
  {path : 'caracteristiques' , component : CaracteristiqueComponent },
  {path :'parametrage' ,component: AdminParametrageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
