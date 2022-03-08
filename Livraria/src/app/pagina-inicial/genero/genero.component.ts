import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

genero='';
  constructor(private route: Router,  
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
  }

  cadasgenero() {
    this.usuarioservico.cadasgenero( this.genero)
      .then((resultado: any) => {
        alert('Livro cadastrado com sucesso!')
      }).catch(erro => {
        alert('Erro ao cadastrar livro!')
      })
  }
}
