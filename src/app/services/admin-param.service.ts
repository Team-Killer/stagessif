import { Injectable } from '@angular/core';
import {ServeurService} from './serveur.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminParamService {

  private endpoint = '/parametrage ';
  private endpointAdmin = '/admin/parametrage ';
  constructor(private server: ServeurService ,private  http:HttpClient) { }

  getListParametrage(): Observable<any>{
    return this.http.get(`${this.server.baseUrl + this.endpoint}`);
  }

  updateParametrage(value :any) : Observable<any>{
    return  this.http.put(`${this.server.baseUrl + this.endpointAdmin}`,value);
  }
}
