import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina-selecionar/pagina-selecionar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CadastraradmComponent } from './cadastraradm/cadastraradm.component';
import { GeneroComponent } from './genero/genero.component';
import { EditoraComponent } from './editora/editora.component';
import { LivroscadsComponent } from './livroscads/livroscads.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { CheckLogged } from '../checkLogged';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaComponent, CadastrarComponent,  CadastraradmComponent, GeneroComponent, EditoraComponent, LivroscadsComponent, EditarLivroComponent],
  providers: [CheckLogged]
})
export class PaginaInicialModule { }
