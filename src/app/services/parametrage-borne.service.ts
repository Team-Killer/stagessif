import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ServeurService} from "./serveur.service";

@Injectable({
  providedIn: 'root'
})
export class ParametrageBorneService
{
  private endpointAdmin='/admin/parametrage';
  private endpointCF='/admin/centres';
  private param:Observable<any>;
  constructor(private serveur:ServeurService,private http:HttpClient) { }

  getParametrageList(): Observable<any>{
    return this.http.get(`${this.serveur.baseUrl+this.endpointAdmin}`);
  }

  getCentreFiscalList():Observable<any>{
    return  this.http.get(`${this.serveur.baseUrl+this.endpointCF}`);
  }

  updateParametrage(value: any): Observable<Object> {
    //console.log(value+" " +codeBur)
    return this.http.put(`${this.serveur.baseUrl+this.endpointAdmin}`,value);
  }

  getCentre(id:string): Observable<any>{
    const url = `${this.serveur.baseUrl+this.endpointAdmin}/${id}`;
    return this.http.get(url);
  }


}
