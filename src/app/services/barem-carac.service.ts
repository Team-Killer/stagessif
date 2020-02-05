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
    return this.http.get(`${this.server.baseUrl+this.admin}/${idBarem}/${this.caracs}`);
  }
}
