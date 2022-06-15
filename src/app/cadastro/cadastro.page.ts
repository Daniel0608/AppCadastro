import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome:string;
  email: string;
  bairro: string;
  tipo: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  abrirTela(){
    this.router.navigateByUrl(`/home`)
  }
  
  abrirCadastrado(){
    this.router.navigateByUrl(`/cadastrado`)
  }

  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.bairro = this.activatedRoute.snapshot.paramMap.get('bairro');
    this.tipo = this.activatedRoute.snapshot.paramMap.get('tipo');
  }

}
