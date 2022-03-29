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
    if(this.genero!=''){
      this.usuarioservico.cadasgenero(this.genero)
      .then((resultado: any) => {
        console.log(resultado)
        alert('Genero cadastrado com sucesso!')
      }).catch(erro => {
        alert('Erro ao cadastrar genero!')
      })
  }else{
    alert('Campos em branco!')
  }
    }
    
    voltar() {
      this.route.navigate(['/acesso/'])
    }

  
}
