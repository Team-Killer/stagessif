import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil-parametrage',
  templateUrl: './acceuil-parametrage.component.html',
  styleUrls: ['./acceuil-parametrage.component.scss']
})
export class AcceuilParametrageComponent implements OnInit {

  constructor(private router:Router) { }

  paramGerer = [ {id:1,nom:'Gestion des Caracteristiques'},
    {id:2,nom:'Gestion des Barèmes'},
    {id:3,nom:'Administration et Parametrage'}];

  ngOnInit() {
  }

  borneChoisi(id:number):void {
    if (id == 1) {
      this.router.navigate(['simulation/baremes']);
    } else if (id == 2) {

      this.router.navigate(['evaluation/yearImposition']);
    } else if (id == 3) {
      this.router.navigate(['homeParam']);
    }

  }

}
