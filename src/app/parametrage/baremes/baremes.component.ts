import { Component, OnInit } from '@angular/core';
import {BaremeService} from "../../services/bareme.service";
import {BaremCaracService} from "../../services/barem-carac.service";

@Component({
  selector: 'app-baremes',
  templateUrl: './baremes.component.html',
  styleUrls: ['./baremes.component.scss']
})
export class BaremesComponent implements OnInit {
  mode:boolean =true;
  option:boolean = true;
  addOrEdit:string;
  listeBaremes:any[];
  bareme={
    id: null as string,
    nom: null as string,
    abbrev: null as string,
    enabled: null as boolean,
  };


 /*situation=[
   {enabled:true,nom:"Activer"},
   {enabled:false,nom:"Desactiver"}

 ] ;*/

 defaultSelect:boolean=false;
  constructor(private  baremeService:BaremeService,private  baremCaracService:BaremCaracService) { }

  ngOnInit() {
    this.getBaremList();
  }

  onNouveau() {
    this.bareme.nom=null;
    this.bareme.abbrev=null;
    this.bareme.id=null;
      this.option=false;

  }

  onSubmit(data){
     // alert(data.enabled);
    if(data.id ==null){

    this.bareme.nom=data.nom;
    this.bareme.abbrev=data.abbrev;
    this.bareme.enabled=data.enabled;
    this.createBarem();
    }
    else{
      this.bareme.nom=data.nom;
      this.bareme.abbrev=data.abbrev;
      this.bareme.enabled= data.enabled;
      this.bareme.id=data.id;
     this.updateBarem();

    }
  }

  getBaremList() {
      this.baremeService.getBaremList().subscribe(e =>{
            this.listeBaremes=e;
            //console.log(this.listeBaremes);
      })
  }

  createBarem() {
    this.baremeService.createBareme(this.bareme).subscribe(e =>{
      console.log(e);

            this.getBaremList();
            this.mode=false;
      this.bareme.nom=null;
      this.bareme.abbrev=null;
      this.bareme.id=null;
    });
    this.option=true;


  }

  getBarem(id:string) {
    this.baremeService.getBarem(id).subscribe(e =>{
      //console.log(e);
      this.bareme=e;
    })
  }

  editBarem(id: string) {
     this.getBarem(id);
     this.option=false;
     this.defaultSelect=false;
  }
  isEnabled(id: string ,etat: boolean) {
    this.getBarem(id);

   if(this.mode){
     if(etat){
       this.baremeService.updateEnabledBarem(id,this.bareme).subscribe(e =>{
         this.bareme=e;
         this.getBaremList();
         this.bareme.enabled =false;
         this.bareme.nom=null;
         this.bareme.abbrev=null;
         this.bareme.id=null;
       });


     }
     else {
       this.baremeService.updateDesabledBarem(id,this.bareme).subscribe(e =>{
          this.bareme=e;
         this.getBaremList();
         this.bareme.enabled =true;
       });
       this.bareme.nom=null;
       this.bareme.abbrev=null;
       this.bareme.id=null;

     }
   }
   else {
     if(etat){
       this.baremeService.updateEnabledBarem(id,this.bareme).subscribe(e =>{
         this.bareme=e;
         this.getBaremList();
         this.bareme.enabled =false;
       });
       this.bareme.nom="null";
       this.bareme.abbrev=null;
       this.bareme.id=null;

     }
     else {
       this.baremeService.updateDesabledBarem(id,this.bareme).subscribe(e =>{
         this.bareme=e;
         this.getBaremList();
         this.bareme.enabled =true;
       });
       this.bareme.nom=null;
       this.bareme.abbrev=null;
       this.bareme.id=null;

     }
   }
    this.bareme.nom=null;
    this.bareme.abbrev=null;
    this.bareme.id=null;
  }

  updateBarem(){
   // console.log(this.bareme);
     this.baremeService.updateBarem(this.bareme.id,this.bareme).subscribe(e =>{
      // console.log(e);
       this.getBaremList();
       this.mode=false;
       this.option=true;
       this.bareme.nom=null;
       this.bareme.abbrev=null;
       this.bareme.id=null;
     })
  }

  /*****Barem caracteristique****/
  baremeCarac:any[];
  isClickedAssocie:boolean=false;
  baremeAssocie :any ={
     id:null as string,
     ordre:null as number,
    nom:null as string,
     bareme:{
       id:null as string,
       nom: null as string,
       abbrev: null as string,
       enabled:null as boolean
     },
    caracteristique:{
       id:null as string,
      nom:null as string,
      abbrev:null as string,
      type : null as number
    }
  };
  //nom: "Voitures de Location", abbrev: "VL", enabled: true}
  // caracteristique: {id: "c07ff184-f880-4f20-a247-b127145cbe8a", nom: "Genre de véhicule", abbrev: "Genre", type: 2
  nomBareme:string;
  baremeAssocier(id) {
    this.baremCaracService.getListCaracteristiqueWithBarem(id).subscribe(e=>{
        this.baremeCarac=e;
        this.baremeAssocie=e;
       //this.nomBareme=.bareme.nom;

       // console.log(this.baremeAssocie[0].bareme.nom);
        this.isClickedAssocie=true;
    });
  }

  onNewBaremCarac(){

  }
}
