import {Component, Input} from 'angular2/core';
import {Todo} from '../cosa';

@Component({
    selector: 'lista-de-cosas',
    styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
    ],
    template: `
    <ul class="unstyled">
      <li *ngFor="#todo of todos">
        <input type="checkbox" [(ngModel)]="todo.done">
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </li>
    </ul>`
})
export class ListaDeCosas {
    @Input() todos: Todo[];
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/