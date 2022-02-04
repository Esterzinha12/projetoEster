import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './login/inicio/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import { PaginaComponent } from './pagina-inicial/pagina/pagina.component';

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
  }
];


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaComponent
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
