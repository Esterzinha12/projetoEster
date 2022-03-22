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
import { LoginadmComponent } from './login/loginadm/loginadm.component';
import { GeneroComponent } from './pagina-inicial/genero/genero.component';
import { EditoraComponent } from './pagina-inicial/editora/editora.component';
import { LivroscadsComponent } from './pagina-inicial/livroscads/livroscads.component';
// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   GoogleLoginProvider
// } from "angular-6-social-login-v2";

const routes: Routes=[
  {
    path:'',
    component: InicioComponent,
    canActivate: []
  },
  {
    path:'acesso',
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
  }



];

// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//     [
//       {
//         id: GoogleLoginProvider.PROVIDER_ID,
//         provider: new GoogleLoginProvider("214907937972-gf4q78bvlr2nhgur0bdlecchcrths7i8.apps.googleusercontent.com"),
//       }
//     ]
//   )
//   return config
// };

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PaginaComponent,
    CadastrarComponent,
    DeletarComponent,
    CadastraradmComponent,
    LoginadmComponent,
    GeneroComponent,
    EditoraComponent,
    LivroscadsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule ,
    // SocialLoginModule
  ],
  providers: [
    // {
    //   provide: AuthServiceConfig,
    //   useFactory: getAuthServiceConfigs
    // }
  ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
