import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina-selecionar.component.html',
  styleUrls: ['./pagina-selecionar.component.css']
})
export class PaginaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cadastrar() {
    this.route.navigate(['/cadastrar/'])
  }
  cadastraradm() {
    this.route.navigate(['/cadastraradm/'])
  }
  livroscads() {
    this.route.navigate(['/livroscads/'])
  }

}
