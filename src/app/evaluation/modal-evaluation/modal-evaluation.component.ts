import {Component, Input, OnInit} from '@angular/core';
import {BaremeService} from "../../services/bareme.service";

@Component({
  selector: 'app-modal-evaluation',
  templateUrl: './modal-evaluation.component.html',
  styleUrls: ['./modal-evaluation.component.scss']
})
export class ModalEvaluationComponent implements OnInit {
  @Input() listeBaremActifs;
  baremeAssocieCarac:any[];
  isCaractere:boolean=false;
  constructor(private baremeActifService:BaremeService) { }

  ngOnInit() {
    this.isCaractere=false;
  }

  getBaremWithCarac(id){
    this.baremeActifService.getCaractAssocieBareme(id).subscribe(e => {
      this.baremeAssocieCarac=e;
      this.isCaractere=true;
      id=null;

    });
  }

  onSubmitContinue(donnes,id){

  }

}
