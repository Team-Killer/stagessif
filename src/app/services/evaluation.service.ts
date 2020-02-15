import { Injectable } from '@angular/core';
import {ServeurService} from "./serveur.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private contribuable='/contribuables';
  private vehicule ='vehicules';
  protected vehicules : Observable<any[]>;
  constructor(private server:ServeurService,private  http:HttpClient) { }

  getContribuable(nif: string , annee: number): Observable<any>{
      return this.http.get(`${this.server.baseUrl + this.contribuable}/${nif}/${this.vehicule}/${annee}`);
  }


}
