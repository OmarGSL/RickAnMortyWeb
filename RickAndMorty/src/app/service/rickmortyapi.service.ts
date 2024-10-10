import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickmortyapiService {


  private urlApi = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }
  
  getCharacters(): Observable<any> {
    return this.http.get(this.urlApi);
  }
}
