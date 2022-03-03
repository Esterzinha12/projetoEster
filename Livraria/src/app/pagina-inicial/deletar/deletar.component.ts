import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

  deletado(){
    alert('Livro deletado com sucesso!')
  }
}
