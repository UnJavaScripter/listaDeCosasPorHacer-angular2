import {Component} from 'angular2/core';
import {Cosa} from './components/cosa';
import {ListaDeCosas} from './components/lista-de-cosas/lista-de-cosas';
import {Formulario} from './components/formulario/formulario';

@Component({
    selector: 'lista-de-cosas-por-hacer',
    templateUrl: './app/lista-de-cosas-por-hacer.html',
    directives: [ListaDeCosas, Formulario],
    styleUrls: ['./app/lista-de-cosas-por-hacer.css']
})
export class listaDeCosasPorHacer {
    todos: Cosa[] = [
        { text: 'learn angular', done: true },
        { text: 'build an angular app', done: false }
    ];

    get remaining() {
        return this.todos.reduce((count: number, todo: Cosa) => count + +!todo.done, 0);
    }

    archive(): void {
        var oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach((todo: Cosa) => {
            if (!todo.done) this.todos.push(todo);
        });
    }

    addTask(task: Cosa) {
        this.todos.push(task);
    }
}

