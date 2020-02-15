import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValeurOptionService {

  private endpointAdmin = '/admin/baremes';
  constructor() { }
}
