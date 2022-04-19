import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-livroscads',
  templateUrl: './livroscads.component.html',
  styleUrls: ['./livroscads.component.css']
})
export class LivroscadsComponent implements OnInit {

  constructor(private route: Router,  
    private usuarioservico: UsuarioService) { }

  listaLivros=[];
    codigo=''
  ngOnInit() {
    this.usuarioservico.listarLivros(this.codigo)
    .then((resultado: any) => {
    this.listaLivros=resultado;
    console.log(this.listaLivros)
    })
  }
  voltar() {
    this.route.navigate(['/acesso/'])
  }

  excluir(i){
    this.usuarioservico.excluir_livro(i);
    window.location.reload();
  }
  editar(i){
    localStorage.setItem("CODIGO_LIVRO", i)
    this.route.navigate(['/editarlivro/'])
  }
}
