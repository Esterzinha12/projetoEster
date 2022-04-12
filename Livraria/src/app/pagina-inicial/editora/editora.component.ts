import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  editora='';

  constructor(private route: Router,  
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
  }

  cadaseditora() {
    if(this.editora!=''){
      this.usuarioservico.cadaseditora(this.editora)
      .then((resultado: any) => {
        console.log(resultado)
        alert('Editora cadastrado com sucesso!')
        this.editora=''
      }).catch(erro => {
        alert('Erro ao cadastrar editora!')
      })
  }else{
    alert('Campos em branco!')
  }
    }

    voltar() {
      this.route.navigate(['/cadastrar/'])
    }
}
