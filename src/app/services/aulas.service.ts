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
  getCursos(){
    return this.http.get("https://aulasudemy-773c1.firebaseio.com/aulas.json")
    .pipe(
      map(this.crearArreglo))
  }
  crearArreglo( aulasObj:Object){
    const aulas:Aulas[] =[]
    if (aulasObj === null ) { return []}

    Object.keys(aulasObj).forEach(key => {
      const aula:Aulas = aulasObj[key] 
      aula.id = key
      aulas.push(aula)
    })
    return aulas
  }
}

export interface Secao {
  titulo: string
  capitulos: Array<string>
}
export interface Aulas {
  id?:string
  titulo:string
  secoes: Array<Secao>
}
