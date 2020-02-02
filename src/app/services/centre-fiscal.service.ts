import { Injectable } from '@angular/core';
import {ServeurService} from './serveur.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CentreFiscalService {
  private  endPoint: string ="/admin/centres";
  constructor(private server:ServeurService,private http: HttpClient) { }

   getCentreFiscalList(): Observable<any>{
     return  this.http.get(`${this.server.baseUrl + this.endPoint}`);
  }

   getCentreFiscal(id: string): Observable<any>{
     const url = `${this.server.baseUrl+this.endPoint}/${id}`;
     return  this.http.get(url);
   }
}
