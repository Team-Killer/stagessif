import { Component, OnInit } from '@angular/core';
import {EvaluationService} from "../../services/evaluation.service";
import {BaremeService} from "../../services/bareme.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-nif-evaluation',
  templateUrl: './nif-evaluation.component.html',
  styleUrls: ['./nif-evaluation.component.scss']//,
 // providers:[NgbModalConfig,NgbModal]
})
export class NifEvaluationComponent implements OnInit {
  option:boolean=true;
  nifEtAnne={
    annees: null as string,
    nif: null as string

  };
  avoirType:boolean =true;
  isEvalClicked:boolean=true;
  listeContribuable :any[];
  contribuale ={
    status: null as string,
    nif: null as string,
    annee: "2019" as string,
    rsoc: null as string,
  };

  dataToPost:any={
    listePrevious:[],
    selectedCarac:{
      id:''
    },
    selectedVO:{
      id:''
    },
    lCaracVehicule:[
       {
         idCarac:null, valeur:null
       },
       {idCarac: null, valeur:null}
       ]

};



  listeBaremActif :any[];
  baremeAssocieCarac:any[];

  constructor(private  evalService:EvaluationService , private baremeActifService:BaremeService ,
              config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }



  ngOnInit() {
    this.contribuale.annee="2019";
    this.choisirBaremes();
  }

  open(content) {
    this.modalService.open(content,{size :'lg'});
  }

  choisirBaremes(){
    this.baremeActifService.getBaremListActif().subscribe(e =>{
      this.listeBaremActif=e;
     // console.log(this.listeBaremActif);
      this.isEvalClicked=false;
    });
  }


  onSubmit(data){
      this.nifEtAnne.annees = data.annee;
      this.nifEtAnne.nif =data.nif;
      this.getImposition(this.nifEtAnne);
  }

  getImposition(nifEtAnne) {
   // alert(this.nifEtAnne.annee +"nif= "+this.nifEtAnne.nif);
    this.evalService.getContribuable(nifEtAnne.nif ,nifEtAnne.annees).subscribe(e =>{
        //console.log(e);
        this.listeContribuable=e;
        //console.log(this.listeContribuable);
        this.contribuale=e;
        this.option=false;
    });
    //this.choisirBaremes();
  }

   getBaremWithCarac(id:string){
    this.baremeActifService.getCaractAssocieBareme(id).subscribe(e => {
       this.baremeAssocieCarac=e;
       console.log(this.baremeAssocieCarac);
     // this.choisirBaremes();
      this.avoirType=false;
    });
   }

  onSubmitContinue(continuer){
    console.log(continuer);
  }
}
