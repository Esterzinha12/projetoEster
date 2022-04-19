import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InicioComponent } from './login/inicio/inicio.component';
import {RouterModule, Routes} from '@angular/router';
import { PaginaComponent } from './pagina-inicial/pagina-selecionar/pagina-selecionar.component';
import { CadastrarComponent } from './pagina-inicial/cadastrar/cadastrar.component';
import { CadastraradmComponent } from './pagina-inicial/cadastraradm/cadastraradm.component';
import { LoginadmComponent } from './login/loginadm/loginadm.component';
import { GeneroComponent } from './pagina-inicial/genero/genero.component';
import { EditoraComponent } from './pagina-inicial/editora/editora.component';
import { LivroscadsComponent } from './pagina-inicial/livroscads/livroscads.component';
import { CheckLogged } from './checkLogged';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login-v2";
import { EditarLivroComponent } from './pagina-inicial/editar-livro/editar-livro.component';

const routes: Routes=[
  {
    path:'',
    component: InicioComponent,
    canActivate: []
  },
  {
    path:'acesso',
    component : PaginaComponent,
    canActivate: [CheckLogged]
  },
  {
    path:'cadastrar',
    component : CadastrarComponent,
    canActivate: []
  },
  {
    path:'cadastraradm',
    component : CadastraradmComponent,
    canActivate: []
  }
  ,
  {
    path:'loginadm',
    component : LoginadmComponent,
    canActivate: []
  },

  {
    path:'genero',
    component : GeneroComponent,
    canActivate: []
  },
  
  {
    path:'editora',
    component : EditoraComponent,
    canActivate: []
  },
  {
    path:'livroscads',
    component : LivroscadsComponent,
    canActivate: []
  },
  {
    path:'editarlivro',
    component : EditarLivroComponent,
    canActivate: []
  },




];

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("1002036984829-c8t8mtuihp6rcrbn0pi8bijt3nceoqee.apps.googleusercontent.com"),
      }
    ]
  )
  return config
};

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaComponent,
    CadastrarComponent,
    CadastraradmComponent,
    LoginadmComponent,
    GeneroComponent,
    EditoraComponent,
    LivroscadsComponent,
    EditarLivroComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule ,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
      
    },
    [CheckLogged]
  ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
