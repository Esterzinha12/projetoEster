import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  constructor( 
    private usuarioService: UsuarioService,
    private route: Router) { }

    listaLivros=[];
  ngOnInit() {
    this. usuarioService.select_login()
    .then(resultado => {
      console.log('RESULTADO', resultado);
    }).catch(erro =>{
      console.log('ERRO AO BUSCAR USUARIO:', erro);
    })

    this.usuarioService.listarLivros()
    .then((resultado: any) => {
    this.listaLivros=resultado.resposta;
    console.log(this.listaLivros)
    })
  }

  loginadm(){
    this.route.navigate(['/loginadm'])
 }

}
