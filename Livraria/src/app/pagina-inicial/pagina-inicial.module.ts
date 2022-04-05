import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CadastraradmComponent } from './cadastraradm/cadastraradm.component';
import { GeneroComponent } from './genero/genero.component';
import { EditoraComponent } from './editora/editora.component';
import { LivroscadsComponent } from './livroscads/livroscads.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaComponent, CadastrarComponent,  CadastraradmComponent, GeneroComponent, EditoraComponent, LivroscadsComponent]
})
export class PaginaInicialModule { }
