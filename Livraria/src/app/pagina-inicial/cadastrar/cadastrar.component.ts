import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  
  titulo='';
  autor='';
  valor='';
  genero='';
  editora='';
  estoque='';

  constructor( private route: Router,  
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
  }
    cadastrar() {
    this.usuarioservico.cadastrar(this.titulo, this.autor, this.valor, this.genero, this.editora, this.estoque)
      .then((resultado: any) => {
        alert('Livro cadastrado com sucesso!')
      }).catch(erro => {
        alert('Erro ao cadastrar livro!')
      })
  }

  cadasgenero() {
    this.route.navigate(['/genero/'])
  }

}
