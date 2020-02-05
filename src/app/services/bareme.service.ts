import { Injectable } from '@angular/core';
import {ServeurService} from "./serveur.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaremeService {
  private endpoint = '/baremes';
  private endpointAdmin = '/admin/baremes';
  private enable='activer';
  private desable='/desactiver';
  private simuler='simuler';
  private  caracNumerique='caracs-numeriques';
//admin/baremes/{id_bareme}/caracs-numeriques
  constructor(private server:ServeurService , private http:HttpClient) { }

  getBaremList(): Observable<any> {
    return this.http.get(`${this.server.baseUrl + this.endpointAdmin}`);
  }

  getBaremListActif(): Observable<any> {
    return this.http.get(`${this.server.baseUrl + this.endpoint}`);
  }

  createBareme(barem: any): Observable<any> {
   return  this.http.post(`${this.server.baseUrl + this.endpointAdmin}`,barem);
  }

  getBarem(id:string): Observable<any>{
    const url = `${this.server.baseUrl+this.endpointAdmin}/${id}`;
    return this.http.get(url);
  }

  updateBarem(id: string, value: any): Observable<any> {
    return this.http.put(`${this.server.baseUrl+this.endpointAdmin}/${id}`, value);
  }

  updateEnabledBarem(id: string , bareme: any): Observable<any>  {
    return this.http.put(`${this.server.baseUrl+this.endpointAdmin}/${id}/${this.desable}`,bareme);
  }

  updateDesabledBarem(id: string , bareme: any): Observable<any>  {
    return this.http.put(`${this.server.baseUrl+this.endpointAdmin}/${id}/${this.enable}`,bareme);
  }

                                    /*** Simulation***/
   baremSelect(donnees:any,idBarem:string): Observable<any> {
     return this.http.post(`${this.server.baseUrl+this.endpointAdmin}/${idBarem}/${this.simuler}`,donnees);
   }

                         /***Evaluation***/
   getCaractAssocieBareme(idBarem:string):Observable<any>{
        return this.http.get(`${this.server.baseUrl+this.endpointAdmin}/${idBarem}/${this.caracNumerique}`);
   }

   evaluerData(idBarem:string,donnees:any): Observable<any>{
     return
   }

}
