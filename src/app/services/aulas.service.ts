import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AulasService {

  constructor( private http:HttpClient ) { }

  crearAula( aula :any){
    return this.http.post("https://aulasudemy-773c1.firebaseio.com/aulas.json", aula)
    .pipe(
      map( (resp:any) => {
        aula.id = resp.name
        return aula 
      }
      ))
  }
}
