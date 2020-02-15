import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-evaluer',
  templateUrl: './tables-evaluer.component.html',
  styleUrls: ['./tables-evaluer.component.scss']
})
export class TablesEvaluerComponent implements OnInit {

  constructor() { }
  columns: string[];
  ngOnInit() {
    this.columns=this.getColumns();
  }

  getColumns(): string[]{
    return ["Année d'imposition", "Vehicules", "Date de mise en circulation", "Nombre de place","","Charge Utile en (t)","Barème appliqué "
        ,"Minima(en ariary)","Montant a payer","Action"
    ]};

}
