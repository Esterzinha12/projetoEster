import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './login/inicio/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import { PaginaComponent } from './pagina-inicial/pagina/pagina.component';
import { CadastrarComponent } from './pagina-inicial/cadastrar/cadastrar.component';
import { DeletarComponent } from './pagina-inicial/deletar/deletar.component';
import { CadastraradmComponent } from './pagina-inicial/cadastraradm/cadastraradm.component';

const routes: Routes=[
  {
    path:'',
    component: InicioComponent,
    canActivate: []
  },
  {
    path:'pagina-principal',
    component : PaginaComponent,
    canActivate: []
  },
  {
    path:'cadastrar',
    component : CadastrarComponent,
    canActivate: []
  },
  {
    path:'deletar',
    component : DeletarComponent,
    canActivate: []
  },
  {
    path:'cadastraradm',
    component : CadastraradmComponent,
    canActivate: []
  }
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaComponent,
    CadastrarComponent,
    DeletarComponent,
    CadastraradmComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
