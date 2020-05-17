import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient  } from "@angular/common/http";
import { AulasService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styles: [
  ]
})
export class CadastrarComponent implements OnInit {
  formulario:FormGroup
  temp = new Object()
  listaAulas = new Object()
  listaUdemy = new Object()

  lista = [1,2,3,4]
  

  constructor( private fb:FormBuilder,
                private http:HttpClient,
                private aulasService:AulasService) {
    //this.mostraLista()
    this.crearFormulario()
   }

  ngOnInit(): void {
  }
  mostraLista(){
    this.http.get("assets/bd_local.json").subscribe(data =>{
      this.lista = data
      //console.log("lista: ",this.lista)
    })
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      titulo:   ['Redes',[Validators.required, Validators.minLength(5)]],
      secao:    ['parte1', [Validators.required, Validators.minLength(3)]],
      capitulo: ['', [Validators.required]],
      secao2:    ['part2', [Validators.required, Validators.minLength(3)]],
      capitulo2: ['', [Validators.required]]
    })
  }

  guardar() {


    class Secoes {
      titulo: string
      capitulos: Array<string>
    }
    class ListaAulasModel {
      titulo:string
      secoes: Array<Object>
    }
    

    let secoes: Array<Secoes> = [];
    let secao = new Secoes() 
    secao.titulo = "teste"
    secao.capitulos = this.formulario.value.capitulo.split("\n")

    secoes.push(secao)
    secoes.push(secao)
    secoes.push(secao)

    let listaAulas = new ListaAulasModel()
    listaAulas.titulo = this.formulario.value.titulo
    listaAulas.secoes = secoes
    console.log("seções: ",secoes);
    console.log("aulas: ", listaAulas);

    
    

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
