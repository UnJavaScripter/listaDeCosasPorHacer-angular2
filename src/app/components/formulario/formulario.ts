import {Component, Output, EventEmitter} from 'angular2/core';
import {Cosa} from '../cosa';

@Component({
    selector: 'formulario',
    templateUrl: './app/components/formulario/formulario.html'
})
export class Formulario {
    @Output() nuevaTarea = new EventEmitter<Cosa>();
    tarea: string = '';

    agregarCosaPorHacer() {
        if (this.tarea) {
            this.nuevaTarea.next({ texto: this.tarea, completada: false });
        }
        this.tarea = '';
    }
}

