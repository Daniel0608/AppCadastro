import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string;
  email: string;
  bairro: string;
  tipo: string;

  constructor(public router: Router ) {}

  abrirTela(){
    this.router.navigateByUrl(`/cadastro/${this.nome}/${this.email}/${this.bairro}/${this.tipo}`);
  }

}