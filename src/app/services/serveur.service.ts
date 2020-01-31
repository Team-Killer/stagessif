import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeurService {

  baseUrl = 'http://localhost:8080';
  constructor() { }
}
