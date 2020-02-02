import { Component, OnInit } from '@angular/core';
import {CaracService} from '../../services/carac.service';

@Component({
  selector: 'app-caracteristique',
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.scss']
})
export class CaracteristiqueComponent implements OnInit {

  constructor(private caracService: CaracService) { }

  caracteristiquesList: any[];
  addOrEdit: string;
  option: boolean = true;
   caracteristique ={
    id: null,
    nom: null,
    abbrev: null,
    type: null as number,
  };
   mode:boolean=true;
  ngOnInit() {
    this.getCaracteristiqueList();
  }

  onSubmit() {
      this.option = true;
      if(this.caracteristique.id==null)
      {

        this.saveCaracteristique();
      }
      else{
          this.updateCaracteristique();
      }

  }

  onNouveau() {
    this.addOrEdit="Nouveau caracteristique";
    this.option =false;
  }

  edit(id: string) {

    this.option=false;
    this.addOrEdit="Modification d'un caracteristique";
    this.getCaracteristique(id);
  }

  getCaracteristique(id:string){
         this.caracService.getCaracteristique(id).subscribe(
           data =>{
                  this.caracteristique=data;
                 // console.log(this.caracteristique);

           });
  }

  getCaracteristiqueList() {
      this.caracService.getCaracteristiqueList().subscribe(
        data => {
          this.caracteristiquesList = data;
          //console.log(this.caracteristiquesList);
        }
      );
  }
  getCaracteristiquMode(){
    this.caracService.getCaracteristiqueList().subscribe(
      data1 =>{
        this.caracteristiquesList=data1;
        this.mode=false;
        this.caracteristique.nom=null;
        this.caracteristique.abbrev=null;
        this.caracteristique.type=null;
        this.caracteristique.id=null;
      });
  }

  saveCaracteristique() {

         this.caracService.createCaracteristique(this.caracteristique).subscribe(
                 data => {
                  //console.log(data);
                  this.getCaracteristiquMode();
                 });

  }

  updateCaracteristique(){
         alert(2);
         this.caracService.updateCaracteristique(this.caracteristique.id,this.caracteristique).subscribe(
           data =>{
             this.getCaracteristiquMode();
           });
  }


}
