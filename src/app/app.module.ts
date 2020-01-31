import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaremSimulationComponent } from './simulation/barem-simulation/barem-simulation.component';
import {ServeurService} from './services/serveur.service';

@NgModule({
  declarations: [
    AppComponent,
    BaremSimulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServeurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
