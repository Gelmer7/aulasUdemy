import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { HttpClient  } from "@angular/common/http";
import { AulasService,Secao, Aulas } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styles: []
})
export class CadastrarComponent implements OnInit {
  formulario:FormGroup
  aulas:Aulas
  constructor( private fb:FormBuilder,
                private http:HttpClient,
                private aulasService:AulasService) {
    //this.mostraLista()
    this.crearFormulario()
   }

  ngOnInit(): void {
  }

  get secao(){
    return this.formulario.get('secao') as FormArray
  } 

  agregarSecao(){
    this.secao.push(this.fb.group({
      titulo:   ['Parte ',[Validators.required]],
      capitulos:    this.fb.array([['1. introdução\n2. resumen\n3. conclusão\n4. Fin']])
    })
    )

  }
  eliminarSecao(i:number){
    this.secao.removeAt(i)
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
      secao:    this.fb.array([])
    })
  }

  guardar() {
   console.log("this.formulario: ",this.formulario.value);
   this.aulas = this.formulario.value
   this.aulas.secao.forEach(element => {
    let capitulos:string[]
    capitulos = element.capitulos[0].split('\n')
    console.log("capitulos: ", capitulos);
    element.capitulos = capitulos
   });
  console.log("aulas: ", this.aulas);

    this.aulasService.crearAula(this.aulas).subscribe()
   }
}
