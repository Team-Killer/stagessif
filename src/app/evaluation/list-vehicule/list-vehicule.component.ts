import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BaremeService} from "../../services/bareme.service";
import {EvaluationService} from "../../services/evaluation.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.scss']
})
export class ListVehiculeComponent implements OnInit,OnDestroy {
  @Input() value;
  @Input() vehicule:any;
  @Input() contribuable:any;
  @Input() columns:string[];

  numImm:any[]=[];
  isNotImm=true;
  listeBaremActif :any[];
  retourProcess:boolean=false;
  baremeAssocieCarac:any[];
  isCaractere:boolean=false;
  showModal:boolean;

  /** evaluer**/
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
  getIndex(i:any){
    this.numImm.push(i);
    this.isNotImm=false;
    this.choisirBaremes();
  this.tableRes=null;
  }


  constructor(private baremeActifService:BaremeService ,private  evalService:EvaluationService) { }

  ngOnInit() {
          this.choisirBaremes();
     }

  choisirBaremes(){
    this.baremeActifService.getBaremListActif().subscribe(e =>{
      this.listeBaremActif=e;

    });
  }


  trackedByNumImm(index:number,vehi:any):string{
      return vehi.numImm;
  }

  getBaremWithCarac(id){
    this.baremeActifService.getCaractAssocieBareme(id).subscribe(e => {
      this.baremeAssocieCarac=e;
      this.isCaractere=true;
      id=null;

    });
  }

  onSubmitContinue(caracVe,id){
    let data= {
      idCarac:"" as string, valeur:"" as string
    };

    data.idCarac=caracVe.idCarac;
    data.valeur=caracVe.valeur;
    this.dataToPost.lCaracVehicule.push(data);
    this.evalTraiter(id,this.dataToPost);
  }

  tableRes:any[];
  tableResCopie:any[];
  istraiter:boolean=false;
  evalTraiter(idBarem,donnee){

    this.baremeActifService.traiterData(idBarem,donnee).subscribe(
      e =>{
        this.tableRes=e;
        this.tableResCopie=e;
        this.istraiter=true;
      }
    );
  }

   detruit:Subscription;
  evalTraiter2(idbarem,lCaracVehicule,idCaract,vo) {

    this.dataToPost2.selectedCarac.id = idCaract;
    this.dataToPost2.selectedVO.id = vo;
    console.log(this.dataToPost2);
    this.dataToPost = this.dataToPost2;
   this.detruit = this.baremeActifService.traiterData(idbarem, this.dataToPost2).subscribe(
      e => {
        this.tableRes = e;
        this.tableResCopie=this.tableRes;
        console.log(this.tableRes);
        this.istraiter = true;
      }
    );
  }
  /**close modal **/
  isTrue:boolean=true;
  closeModal(){
    this.isCaractere=false;
    this.showModal=false;
    this.choisirBaremes();
    this.isTrue=false;
    this.istraiter=false;
    this.tableRes=null;
  }

  ngOnDestroy(): void {
       if(this.detruit){
         this.tableRes=null;
         this.detruit.unsubscribe();
       }
  }
}
