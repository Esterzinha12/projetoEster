import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastraradm',
  templateUrl: './cadastraradm.component.html',
  styleUrls: ['./cadastraradm.component.css']
})
export class CadastraradmComponent implements OnInit {

  constructor( private route: Router,  
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
  }
  usuario=''
  senha=''

  cadastraradm() {
    this.usuarioservico.criar_adm(this.usuario, this.senha)
      .then((resultado: any) => {
        alert('ADM cadastrado com sucesso!')
      }).catch(erro => {
        alert('Erro ao cadastrar ADM!')
      })
  }
  voltar() {
    this.route.navigate(['/acesso/'])
  }
}
 