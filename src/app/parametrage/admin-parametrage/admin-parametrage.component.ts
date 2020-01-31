import { Component, OnInit } from '@angular/core';
import {AdminParamService} from "../../services/admin-param.service";

@Component({
  selector: 'app-admin-parametrage',
  templateUrl: './admin-parametrage.component.html',
  styleUrls: ['./admin-parametrage.component.scss']
})
export class AdminParametrageComponent implements OnInit {

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
  constructor(private parametrageService:AdminParamService) { }

  ngOnInit() {
    this.getParametrageList();
  }

  getParametrageList(){
    this.parametrageService.getListParametrage().subscribe(
      data =>{
           this.parametrage=data;
           console.log(this.parametrage);
    });

  }

}
