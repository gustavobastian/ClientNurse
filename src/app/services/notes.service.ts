import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
//port for api--> must be changed to a global variable
urlApi='http://localhost:8000';
  constructor(private _http: HttpClient) { }
}
