import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DeletarComponent } from './deletar/deletar.component';
import { CadastraradmComponent } from './cadastraradm/cadastraradm.component';
import { GeneroComponent } from './genero/genero.component';
import { EditoraComponent } from './editora/editora.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaComponent, CadastrarComponent, DeletarComponent, CadastraradmComponent, GeneroComponent, EditoraComponent]
})
export class PaginaInicialModule { }
