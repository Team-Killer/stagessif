import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  parametreSelected:any={};
  constructor(private router:Router) { }

  paramGerer = [ {id:1,nom:'Simulation'},
    {id:2,nom:'Evaluation'},
    {id:3,nom:'Parametrage'}];

  ngOnInit() {
  }

  borneChoisi(id:number):void{
    if(id==1){
      this.router.navigate(['simulation/baremes']);
    }

    else if(id==2){

      this.router.navigate(['evaluation/yearImposition']);
    }
    else if(id==3){
      this.router.navigate(['homeParam']);
    }
  }

}
