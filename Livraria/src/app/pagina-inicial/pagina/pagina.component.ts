import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cadastrar() {
    this.route.navigate(['/cadastrar/'])
  }
  deletar() {
    this.route.navigate(['/deletar/'])
  }
  cadastraradm() {
    this.route.navigate(['/cadastraradm/'])
  }
  livroscads() {
    this.route.navigate(['/livroscads/'])
  }

}
