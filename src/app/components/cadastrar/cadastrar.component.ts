import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient  } from "@angular/common/http";
import { AulasService,Secao, Aulas } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styles: []
})
export class CadastrarComponent implements OnInit {
  secoes:number[] = []
  listaAulas:Aulas
  formulario:FormGroup

  constructor( private fb:FormBuilder,
                private http:HttpClient,
                private aulasService:AulasService) {
    //this.mostraLista()
    this.crearFormulario()
   }

  ngOnInit(): void {
  }
  agregarSecao(){
    this.secoes.push(this.secoes.length + 1)
  }
  eliminarSecao(){
    this.secoes.pop()
  }
  mostraLista(){
    this.http.get("assets/bd_local.json").subscribe(data =>{
      //this.lista = data
      //console.log("lista: ",this.lista)
    })
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      titulo:   ['Redes',[Validators.required, Validators.minLength(5)]],
      secao:    ['', [Validators.required, Validators.minLength(3)]],
      capitulo: ['', [Validators.required]]

    })
  }

  guardar() {
   console.log("this.formulario: ",this.formulario);

     this.listaAulas = 
    {
      titulo: "Redes",
      secoes:         
        [
          {
          titulo: "Parte 1",
          capitulos: ["cap1", "cap2", "cap3"],
          },
          {
            titulo: "Parte 2",
            capitulos: ["cap1", "cap2", "cap3"],
          }
        ]
    }
    this.aulasService.crearAula(this.listaAulas).subscribe()
   }
}
