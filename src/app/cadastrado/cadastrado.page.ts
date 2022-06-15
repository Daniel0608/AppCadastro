import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrado',
  templateUrl: './cadastrado.page.html',
  styleUrls: ['./cadastrado.page.scss'],
})
export class CadastradoPage implements OnInit {

  constructor(private router: Router) { }

  abrirTela(){
    this.router.navigateByUrl(`/home`)
  }

  ngOnInit() {
  }

}