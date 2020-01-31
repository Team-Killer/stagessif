import { Injectable } from '@angular/core';
import {ServeurService} from './serveur.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracService {

  private endpoint = '/caracs';
  private endpointAdmin = '/admin/caracs';
  constructor(private server: ServeurService, private http: HttpClient ) {}

  getCaracteristiqueList(): Observable<any> {
    return this.http.get(`${this.server.baseUrl + this.endpoint}`);
  }

  createCaracteristique(carac: any): Observable<any> {
    return this.http.post(`${this.server.baseUrl + this.endpointAdmin}`, carac);
  }

  getCaracteristique(id:string): Observable<any>{
    const url = `${this.server.baseUrl+this.endpointAdmin}/${id}`;
    return this.http.get(url);
  }

  updateCaracteristique(id: string, value: any): Observable<any> {
    return this.http.put(`${this.server.baseUrl+this.endpointAdmin}/${id}`, value);
  }

}
