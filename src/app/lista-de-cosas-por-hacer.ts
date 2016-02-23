import {Component} from 'angular2/core';
import {Todo} from './components/cosa';
import {ListaDeCosas} from './components/lista-de-cosas/lista-de-cosas';
import {Formulario} from './components/formulario/formulario';

@Component({
    selector: 'lista-de-cosas-por-hacer',
    template: `
    <h2>Todo</h2>
    <span>{{remaining}} of {{todos.length}} remaining</span>
    [ <a (click)="archive()">archive</a> ]

    <lista-de-cosas [todos]="todos"></lista-de-cosas>
    <formulario (newTask)="addTask($event)"></formulario>`,
    styles: ['a { cursor: pointer; cursor: hand; }'],
    directives: [ListaDeCosas, Formulario]
})
export class listaDeCosasPorHacer {
    todos: Todo[] = [
        { text: 'learn angular', done: true },
        { text: 'build an angular app', done: false }
    ];

    get remaining() {
        return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
    }

    archive(): void {
        var oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach((todo: Todo) => {
            if (!todo.done) this.todos.push(todo);
        });
    }

    addTask(task: Todo) {
        this.todos.push(task);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/