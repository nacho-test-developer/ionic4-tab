import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs'

// Environment
import { environment } from './../../environments/environment';

// Interfaces
import { Todo } from './../interfaces/todo.interface';

const API_URI = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private _http:HttpClient
  ) {}

  getApi(path): Observable<Todo[]> {
    return this._http.get<Todo[]>(`${API_URI}${path}`)
  }

  getApiById(id): Observable<Todo> {
    return this._http.get<Todo>(`${API_URI}todos/${id}`)
  }
}
