import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-una-cosa',
  templateUrl: './una-cosa.component.html',
  styleUrls: ['./una-cosa.component.css'],
  inputs: ['titulo', 'completada', 'indice']
})
export class UnaCosaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
