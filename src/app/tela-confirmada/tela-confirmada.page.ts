import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tela-confirmada',
  templateUrl: './tela-confirmada.page.html',
  styleUrls: ['./tela-confirmada.page.scss'],
})
export class TelaConfirmadaPage implements OnInit {

  nome:any;
  email:any;
  telefone:any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.telefone = this.activatedRoute.snapshot.paramMap.get('telefone');
  }

}
