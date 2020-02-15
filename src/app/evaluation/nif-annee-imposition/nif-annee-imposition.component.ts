import { Component, OnInit } from '@angular/core';
import {EvaluationService} from "../../services/evaluation.service";
import {BaremeService} from "../../services/bareme.service";

@Component({
  selector: 'app-nif-annee-imposition',
  templateUrl: './nif-annee-imposition.component.html',
  styleUrls: ['./nif-annee-imposition.component.scss']
})
export class NifAnneeImpositionComponent implements OnInit {

  constructor(private  evalService:EvaluationService , private baremeActifService:BaremeService ) { }
  listeContribuable ={
    annee: null as number,
    nif: null as string,
    rsoc: null as string,
    status: null as string,
    vehicules: [
      {numImm:null as string ,genre:null as string,dmc:null as string,nbPlace:null as number,cu:null as number,pf:null as number}
    ]
  };
  contribuale ={
    status: null as string,
    nif: null as string,
    annee: "2019" as string,
    rsoc: null as string,
  };
  nifYear;
  columns:string[];
  ngOnInit() {
  }

  onSubmit(nifEtAnnne){
    this.nifYear=nifEtAnnne;
    this.getImposition(this.nifYear);
    }

  getImposition(nifEtAnne) {
    this.evalService.getContribuable(nifEtAnne.nif ,nifEtAnne.annee).subscribe(e =>{
      this.listeContribuable=e;
      this.contribuale=e;
      console.log(this.listeContribuable);
    });
    this.columns=this.getColumns();
  }

  getColumns(): string[]{
    return ["Année d'imposition", "Vehicules", "Date de mise en circulation", "Nombre de place","","Charge Utile en (t)","Barème appliqué "
      ,"Minima(en ariary)","Montant a payer","Action"
    ]};
}
