import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-loginadm',
  templateUrl: './loginadm.component.html',
  styleUrls: ['./loginadm.component.css']
})
export class LoginadmComponent implements OnInit {

  constructor(private route: Router,
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
  }

  usuario = '';
  senha = '';

  acesso() {
    this.usuarioservico.login(this.usuario, this.senha)
      .then((resultado: any) => {
        if (resultado.user) {
          console.log('certo', resultado.user);
          this.route.navigate(['/acesso/']);

        } else {
          alert('Erro ao fazer login! Verifique usuario e senha')
        }
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })



  }

}
