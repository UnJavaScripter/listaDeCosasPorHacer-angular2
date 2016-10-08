import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-la-lista',
  templateUrl: './la-lista.component.html',
  styleUrls: ['./la-lista.component.css'],
  inputs: ['listaDeCosas']
})
export class LaListaComponent implements OnInit {
  public listaDeCosas: [{
    titulo: string,
    completada: boolean
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
