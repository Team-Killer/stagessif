import { Injectable } from '@angular/core';
import {ServeurService} from "./serveur.service";

@Injectable({
  providedIn: 'root'
})
export class ValeurOptionService {

  private endpointAdmin = '/admin/baremes';
  private valeurs='valeurs';
  constructor(private host:ServeurService) { }
}
