import { Component, OnInit } from '@angular/core';
import { AulasService,Aulas,Secao } from 'src/app/services/aulas.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [
  ]
})
export class CursosComponent implements OnInit {
  aulas:Aulas[]=[]
  tituloCursos:string[]
  nCursos:number
  secao:any
  ver = false

  constructor( private aulasService:AulasService) { 
    this.getTodosCursos()
  }

  ngOnInit(): void {
  }
  

  getTodosCursos(){
    this.aulasService.getCursos()
    .subscribe(resp =>{
      this.aulas = resp
      this.nCursos = this.aulas.length
      console.log(this.aulas);
    })
  }

  verCapitulos(s:any){
    console.log(s);
    this.secao = s
    this.ver = true
  }




}
