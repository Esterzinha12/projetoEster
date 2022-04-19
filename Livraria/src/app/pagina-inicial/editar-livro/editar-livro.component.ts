import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  constructor(private route: Router,
    private usuarioservico: UsuarioService) { }

  listaLivros = [];
  ngOnInit() {
    this.usuarioservico.listarLivros(this.codigo)
      .then((resultado: any) => {
        console.log(resultado)
        resultado.forEach(valor => {
          if (valor.CODIGO == localStorage.getItem("CODIGO_LIVRO")) {
            this.codigo = valor.CODIGO
            this.estoque = valor.ESTOQUE
            this.titulo = valor.TITULO
            this.autor = valor.AUTOR
            this.valor = valor.VALOR
            this.ImageURL = valor.IMAGEURL
          }
        })
      })
  }

  codigo = ''
  estoque = ''
  titulo = ''
  autor = ''
  valor = ''
  ImageURL = ''
  qtd = ""

  alterar() {
    console.log(this.estoque)
    this.usuarioservico.editar_livro(this.codigo, this.qtd);
    this.usuarioservico.listarLivros(this.codigo)
      .then((resultado: any) => {
        resultado.forEach(valor => {
          if (valor.CODIGO == localStorage.getItem("CODIGO_LIVRO")) {
            console.log(valor)
          }
        })
      })
      this.route.navigate(["./livroscads"])
  }

  voltar() {
    this.route.navigate(['/livroscads'])
  }
}
