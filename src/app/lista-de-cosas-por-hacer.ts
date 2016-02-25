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
    cosasPendientes: Cosa[] = [
        { texto: 'asistir a un evento acerca de angular2', completada: true },
        { texto: 'aprender angular2', completada: false },
        { texto: 'hacer una app con angular2', completada: false }
    ];

    get remaining() {
        return this.cosasPendientes.reduce((count: number, cosaPendiente: Cosa) => count + +!cosaPendiente.completada, 0);
    }

    archivar(): void {
        let cosasAnteriores = this.cosasPendientes;
        this.cosasPendientes = [];
        cosasAnteriores.forEach((cosaPendiente: Cosa) => {
            if (!cosaPendiente.completada) this.cosasPendientes.push(cosaPendiente);
        });
    }

    agregarTarea(tarea: Cosa) {
        this.cosasPendientes.push(tarea);
    }
}

