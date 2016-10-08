import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lista: any;

  constructor() {
    this.lista = [
    {
      titulo: 'Aprender Angular 2',
      completada: false
    },
    {
      titulo: 'Asistir al Devfest Cali/Bogotá',
      completada: false
    },
    {
      titulo: 'Seguir a @unJavaScripter',
      completada: true
    }
  ]
  }
}
