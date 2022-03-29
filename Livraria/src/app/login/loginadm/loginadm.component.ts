import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import {
  AuthService,
  GoogleLoginProvider
} from "angular-6-social-login-v2";


@Component({
  selector: 'app-loginadm',
  templateUrl: './loginadm.component.html',
  styleUrls: ['./loginadm.component.css']
})
export class LoginadmComponent implements OnInit {

  constructor(private route: Router,
    private usuarioservico: UsuarioService,
    private socialAuthService: AuthService
    ) { }

  ngOnInit() {
  }

  usuario = '';
  senha = '';

  acesso() {
    this.usuarioservico.login(this.usuario, this.senha)
      .then((resultado: any) => {
        if (resultado.user) {
          console.log('certo');
          this.route.navigate(['/acesso/']);
        } else {
          alert('Erro ao fazer login! Verifique usuario e senha')
        }
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
  }


  public logarGoogle(socialPlatform: string) {
    let socialPlatformProvider;

      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
      console.log(socialPlatform + " sign in data : ", userData);
        this.route.navigate(['/acesso/'])
    }
  );
  }
}
