import {Component, Output, EventEmitter} from 'angular2/core';
import {Cosa} from '../cosa';

@Component({
    selector: 'formulario',
    templateUrl: './app/components/formulario/formulario.html'
})
export class Formulario {
    @Output() newTask = new EventEmitter<Cosa>();
    task: string = '';

    addTodo() {
        if (this.task) {
            this.newTask.next({ text: this.task, done: false });
        }
        this.task = '';
    }
}

