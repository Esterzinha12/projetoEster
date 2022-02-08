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

  ngOnInit() {
    this. usuarioService.buscarUsuario()
    .then(resultado => {
      console.log('RESULTADO', resultado);
    }).catch(erro =>{
      console.log('ERRO AO BUSCAR USUARIO:', erro);
    })
  }

  logar(){
    this.route.navigate(['/pagina-principal/'])
 }
}
