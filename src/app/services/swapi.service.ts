import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from './../../environments/environment';

const API_URI = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private _http:HttpClient
  ) {}

  getSwapi(path) {
    return this._http.get(`${API_URI}${path}`);
  }
}
