import { Component, OnInit } from '@angular/core';
import {BaremeService} from "../../services/bareme.service";

@Component({
  selector: 'app-barem-simulation',
  templateUrl: './barem-simulation.component.html',
  styleUrls: ['./barem-simulation.component.scss']
})
export class BaremSimulationComponent implements OnInit {
  baremesList:any[];
  enventIs=false;
  donnees:any;
  tableRes:any[];
  selectedVO:any={
    id:''
  };

  idBarem:string;

  dataToPost:any={
    listePrevious:[],
    selectedCarac:{
      id:''
    },
    selectedVO:{
      id:''
    }
  };
  constructor(private baremesService:BaremeService) { }

  ngOnInit() {
    this.listeBaremeActif();
  }

  listeBaremeActif(){
      this.baremesService.getBaremListActif().subscribe(e => {this.baremesList=e;});
  }

  baremChoisi(id: string){
    this.enventIs=true;

    this.donnees={};
    this.baremesService.baremSelect(this.donnees,id).subscribe(
      data =>{
        this.tableRes=data;
        console.log(this.tableRes);
      }
    );
    // this.routeur.navigate(['baremChoisi', id]);
  }



  traiter(barem,previous,carac,vo){
    this.dataToPost.listePrevious=previous;
    this.dataToPost.selectedCarac.id=carac;
    this.dataToPost.selectedVO.id=vo;
    this.idBarem=barem;
    //alert("" this.dataToPost.listePrevious+ +" ,vo=  "+this.dataToPost.selectedVO.id +"  etcarac= "+this.dataToPost.selectedCarac.id);
    console.log(this.dataToPost);
    this.baremesService.baremSelect(this.dataToPost,this.idBarem).subscribe(
      data =>{
        this.tableRes=data;
        console.log(this.tableRes);
      }
    )
  }

  retour(){
    this.enventIs=false;
  }


}
