import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginadm',
  templateUrl: './loginadm.component.html',
  styleUrls: ['./loginadm.component.css']
})
export class LoginadmComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

  acesso() {
    this.route.navigate(['/acesso/'])
  }

}
