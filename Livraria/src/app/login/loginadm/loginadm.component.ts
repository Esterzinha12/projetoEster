import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-loginadm',
  templateUrl: './loginadm.component.html',
  styleUrls: ['./loginadm.component.css']
})
export class LoginadmComponent implements OnInit {

  constructor( private route: Router, 
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
  }

  usuario = '';
  senha = '';

  acesso(){
    this.usuarioservico.buscarUsuario()
    .then((resultado:any) => {
      const find = resultado.list.find(e => e.USUARIO == this.usuario && e.SENHA == this.senha);
      
      if (find) {
        localStorage.setItem('USER', this.usuario);
        this.route.navigate(['/acesso/']);
        console.log('Funcionou');   
        
      } else {
        alert('Usuário não cadastrado!');
        console.log('Não funcionou');
      }

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
   
      
    
  }



}
