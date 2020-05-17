import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


//routas
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    HomeComponent,
    CadastrarComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
