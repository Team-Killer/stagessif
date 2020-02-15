import { Component, OnInit } from '@angular/core';
import {AdminParamService} from "../../services/admin-param.service";
import {CentreFiscalService} from "../../services/centre-fiscal.service";

@Component({
  selector: 'app-admin-parametrage',
  templateUrl: './admin-parametrage.component.html',
  styleUrls: ['./admin-parametrage.component.scss']
})
export class AdminParametrageComponent implements OnInit {

  isCliked:boolean =true;
  parametrage ={
    abattement:null as number,
    tauxIS:null as number,
    centre:{
      codeBur:null as string,
      nomCF:null as string,
      abbrevCF:null as string,
      categorie:{
        code:null as number,
        nom:null as string
      }
    }
  };

  paramUp ={
    abattement:null as number,
    tauxIS:null as number,
    centre:null as string

  };
   centresFiscaux:any[];
  centreFiscal={
    codeBur:null as string,
    nomCF:null as string,
    abbrevCF:null as string,
    categorie:{
      code:null as number,
      nom:null as string
    }
  };


  constructor(private parametrageService:AdminParamService , private  centreService:CentreFiscalService) { }

  ngOnInit() {
    this.getParametrageList();
  }


  changer() {
        this.isCliked=false;
  }



  onSubmit(data){
    alert("abattement= " +data.abattement +"taux= " +data.tauxIS +"codeBur="+data.codeBur);
      this.paramUp.abattement=data.abattement;
      this.paramUp.tauxIS=data.tauxIS;
      this.paramUp.centre=data.codeBur;
      this.updateParametrage();


  }
  getParametrageList() {
    this.parametrageService.getListParametrage().subscribe(
      data =>{
           this.parametrage=data;
           console.log(this.parametrage);

    });
     //this.getCentreFiscalList();
     this.getCentreFiscalList();
  }

  getCentreFiscalList() {
     this.centreService.getCentreFiscalList().subscribe(data =>{
           this.centresFiscaux =data;

     });
    // this.getCentreFiscal();
  }

  getCentreFiscal() {
        this.centreService.getCentreFiscal("21-9-301").subscribe(data =>{
                 this.centreFiscal=data;
                // console.log(this.centreFiscal);
        });
  }

  updateParametrage(){
   // console.log(this.parametrage);
    this.parametrageService.updateParametrage(this.paramUp).subscribe(e =>{
      console.log(e);
      this.getParametrageList();
    });
    this.isCliked=true;
  }
}
