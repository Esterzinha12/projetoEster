import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  
  titulo='';
  autor='';
  valor='';
  genero='';
  editora='';
  estoque='';
  listaGenero=[];
  listaEditora=[]; 
  imageURL

  constructor( private route: Router,  
    private usuarioservico: UsuarioService) { }

  ngOnInit() {
    this.usuarioservico.select_genero()
    .then((resultado : any )=> {
    this.listaGenero=resultado;
    console.log(this.listaGenero)
    })

    this.usuarioservico.select_editora()
    .then((resultado : any )=> {
    this.listaEditora=resultado;
    console.log(this.listaEditora)
    })
  }
 
  mostrarImagem(event) {
  const file = new FileReader
  file.onload = (e) => {
    this.imageURL = e.target.result;
    console.log(this.imageURL)
  }
  file.readAsDataURL(event.target.files[0])
  console.log(file)
}
    cadastrar() {
    this.usuarioservico.cadastrar(this.titulo, this.autor, this.valor, this.genero, this.editora, this.estoque, this.imageURL)
      .then((resultado: any) => {
        alert('Livro cadastrado com sucesso!')
        this.titulo=''
        this.autor=''
        this.valor=''
        this.genero=''
        this.editora=''
        this.estoque=''
        this.imageURL

      }).catch(erro => {
        console.log(erro)
      })
  }
  

  cadasgenero() {
    this.route.navigate(['/genero/'])
  }
  cadaseditora() {
    this.route.navigate(['/editora/'])
  }
  voltar() {
    this.route.navigate(['/acesso/'])
  }

  cadastrado(){
    alert('Livro cadastrado com sucesso!')
  }
  
}
