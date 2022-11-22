import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { manga } from './mangas-list/manga';

//Utilizacion de API
const URL = "https://637d37e89c2635df8f840aee.mockapi.io/obras";

@Injectable({
  providedIn: 'root'
})
export class mangaDataService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<manga[]>{
    //hace un fetch con get DEVOLVIENDO UN OBSERVABLE
    return this.http.get<manga[]>(URL).pipe(tap((mangas: manga[]) => {
      for (const manga of mangas) {
        manga.quantity = 0;
      }
    }));  //el 'tap' toca lo que viene antes de emitirlo y lo podemos transformar.
  }
}
