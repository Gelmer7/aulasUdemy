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
  constructor( private aulasService:AulasService) { }

  ngOnInit(): void {
    this.aulasService.getCursos()
    .subscribe(resp =>{
      this.aulas = resp
      console.log(this.aulas);
    })
    
  }





}
