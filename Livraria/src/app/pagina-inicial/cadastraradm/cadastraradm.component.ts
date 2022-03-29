import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastraradm',
  templateUrl: './cadastraradm.component.html',
  styleUrls: ['./cadastraradm.component.css']
})
export class CadastraradmComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

  cadastradoadm(){
    alert('Administrador cadastrado com sucesso!')
  }
  voltar() {
    this.route.navigate(['/acesso/'])
  }
}
