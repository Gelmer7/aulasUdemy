import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'cursos', component:CursosComponent },
  { path:'cadastrar', component:CadastrarComponent },
  { path:'cadastrar', component:CadastrarComponent },
  { path:'temporizador', component:TemporizadorComponent },
  { path:'**', pathMatch:'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
