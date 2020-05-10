import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'cursos', component:CursosComponent },
  { path:'cadastrar', component:CadastrarComponent },
  { path:'about', component:AboutComponent },
  { path:'**', pathMatch:'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
