import { Injectable } from '@angular/core';
import {ServeurService} from "./serveur.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaremCaracService {
   private  admin='/admin/baremes';
   private  caracs='caracs';
    private caracNotBind='caracs-not-involved';
  constructor(private  server:ServeurService , private  http:HttpClient) { }

  getListCaracteristiqueWithBarem(idBarem:String):Observable<any>{
     return this.http.get(`${this.server.baseUrl+this.admin}/${idBarem}/${this.caracs}`);
  }

  getCaracNotBindBareme(idBarem):Observable<any>{
    return this.http.get(`${this.server.baseUrl+this.admin}/${idBarem}/${this.caracNotBind}`);
  }

  createBaremeCaracteristique(data,idBarem,idCarac):Observable<any>{
    let url='assocs';
     return this.http.post(`${this.server.baseUrl+this.admin}/${idBarem}/${this.caracs}/${idCarac}/${url}`,data);
  }

  /**** delete bareme carac*****/
  deleteBaremeCaracteristique(idBarem,idCarac):Observable<any> {
    let url = 'assocs';
    return  this.http.delete(`${this.server.baseUrl+this.admin}/${idBarem}/${this.caracs}/${idCarac}/${url}`);
  }

  /**** Liste  des associations Barème-Caractéristique
   *  endpoint  /admin/baremes/{id_bareme}/caracs/{id_carac}/assocs
   * ***/
  getListAllBaremeCaracteritique(idBarem,idCarac):Observable<any> {
    let url = 'assocs';
    return  this.http.get(`${this.server.baseUrl+this.admin}/${idBarem}/${this.caracs}/${idCarac}/${url}`);
  }

  /**** Lire une association Barème-Caractéristique existante*****/
  getListBaremeCaracteritique(idBarem,idCarac,id_assoc):Observable<any> {
    let url = 'assocs';
    return  this.http.get(`${this.server.baseUrl+this.admin}/${idBarem}/${this.caracs}/${idCarac}/${url}`);
  }
}
