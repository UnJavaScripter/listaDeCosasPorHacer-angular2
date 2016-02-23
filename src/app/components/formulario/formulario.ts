import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from '../cosa';

@Component({
    selector: 'formulario',
    template: `
    <form (ngSubmit)="addTodo()">
      <input type="text" [(ngModel)]="task" size="30"
             placeholder="add new todo here">
      <input class="btn-primary" type="submit" value="add">
    </form>`
})
export class Formulario {
    @Output() newTask = new EventEmitter<Todo>();
    task: string = '';

    addTodo() {
        if (this.task) {
            this.newTask.next({ text: this.task, done: false });
        }
        this.task = '';
    }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/