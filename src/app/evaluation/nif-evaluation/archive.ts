import {Component, OnInit, ViewChild} from '@angular/core';
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
  mode:boolean=false;
  montant:number=0;
  valeurParfaut=0;
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
    lCaracVehicule:[
    ]

  };

  dataToPost2:any={
    listePrevious:[],
    selectedCarac:{
      id:null as string
    },
    selectedVO:{
      id:null as string
    },
    lCaracVehicule:[

    ]

  };
  /* selectedCarac:{
      id:null as string
    },
    selectedVO:{
      id:null as string
    },*/

  CaracVec={
    idCarac:null as string, valeur:null as string
  };


  listeBaremActif :any[];
  baremeAssocieCarac:any[];

  constructor(private  evalService:EvaluationService , private baremeActifService:BaremeService ,
              /* config: NgbModalConfig,*/ private modalService: NgbModal) {
    //config.backdrop = 'static';
    // config.keyboard = false;
  }



  ngOnInit() {
    this.contribuale.annee="2019";
    this.choisirBaremes();
    this.istraiter=false;
  }
  closeResult:string; //pour modal
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
      this.istraiter=false;
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


  onSubmitContinue(listCaracVe,id ){
    let data= {
      idCarac:"" as string, valeur:"" as string
    };

    data.idCarac=listCaracVe.idCarac;
    data.valeur=listCaracVe.valeur;
    this.dataToPost.lCaracVehicule.push(data);


    this.evalTraiter(id,this.dataToPost);
  }
  /* idBarem:string="";
  onGetIdBarem(idBarem:string){
     idBarem=idBarem;
  }*/

  tableRes:any[];
  istraiter:boolean=false;
  evalTraiter(idBarem,donnee){
    //console.log(donnee);
    this.baremeActifService.traiterData(idBarem,donnee).subscribe(
      e =>{
        this.tableRes=e;
        console.log(this.tableRes);
        this.istraiter=true;
      }
    );


  }

  evalTraiter2(idbarem,lCaracVehicule,idCaract,vo){

    this.dataToPost2.selectedCarac.id=idCaract;
    this.dataToPost2.selectedVO.id=vo;
    /* for(let i of lCaracVehicule){
       this.dataToPost2.lCaracVehicule.push(i);
     }*/
    //this.dataToPost2.lCaracVehicule.push(lCaracVehicule);

    console.log(this.dataToPost2);
    this.dataToPost=this.dataToPost2;
    this.baremeActifService.traiterData(idbarem,this.dataToPost2).subscribe(
      e =>{
        this.tableRes=e;
        console.log(this.tableRes);
        this.istraiter=true;
      }
    );


  }


  //retour modal

  retour(){
    this.avoirType=true;
    this.istraiter=false;
  }

  display="none";
  terminer(){
    this.retour();
  }
}
