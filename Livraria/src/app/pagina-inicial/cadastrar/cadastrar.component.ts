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
  listaGenero={};

  constructor( private route: Router,  
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
    this.usuarioservico.select_genero()
    .then(resultado => {
    this.listaGenero=resultado;
    console.log(this.listaGenero)
    })
  }
    cadastrar() {
    this.usuarioservico.cadastrar(this.titulo, this.autor, this.valor, this.genero, this.editora, this.estoque)
      .then((resultado: any) => {
        alert('Livro cadastrado com sucesso!')
      }).catch(erro => {
        alert('Erro ao cadastrar livro!')
      })
     console.log(this.genero)
  }

  cadasgenero() {
    this.route.navigate(['/genero/'])
  }
  cadaseditora() {
    this.route.navigate(['/editora/'])
  }
  voltar() {
    this.route.navigate(['/acesso/'])
  }

  cadastrado(){
    alert('Livro cadastrado com sucesso!')
  }

}
